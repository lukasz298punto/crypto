import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import Language from '@/constants/enums/language';
import { useSessionStorage } from 'react-use';
import useWordsDb from '@/hooks/useWordsDb';
import useSettingsDb from './useSettingsDb';
import { WordParams } from '@/types/common';
import orderBy from 'lodash/orderBy';
import toLower from 'lodash/toLower';
import concat from 'lodash/concat';
import delay from 'lodash/delay';
import split from 'lodash/split';

const today = new Date();

export default function useWord() {
    const params = useParams<WordParams>();
    const { language, level } = useSettingsDb();
    const [usedWords, setUsedWords] = useSessionStorage<string[]>(
        'usedWords',
        []
    );
    const [isCorrect, setIsCorrect] = useState(false);
    const navigate = useNavigate();

    const { words: wordsList2 } = useWordsDb({
        selector: useMemo(() => {
            return {
                categoryId: { $eq: params.categoryId },
                levelId: { $eq: level },
                languageId: { $eq: language },
                isKnown: { $eq: false },
            };
        }, [language, level, params.categoryId]),
    });

    const {
        words: wordsList,
        setWordAsKnown,
        incrementCorrect,
        incrementIncorrect,
        findWordById,
        isLoading,
    } = useWordsDb({
        selector: useMemo(() => {
            return {
                categoryId: { $eq: params.categoryId },
                levelId: { $eq: level },
                languageId: { $eq: language },
                id: { $nin: usedWords },
                isKnown: { $eq: false },
                $or: [
                    {
                        correct: { $lte: 3 },
                    },
                    {
                        correct: { $gt: 3, $lte: 10 },
                        lastCorrectHit: {
                            $lt: new Date(
                                today.setDate(today.getDate() - 3)
                            ).toISOString(),
                        }, // dla correct > 3 i <= 10 sprawdzamy, czy minęły 3 dni
                    },
                    {
                        correct: { $gt: 10 },
                        lastCorrectHit: {
                            $lt: new Date(
                                today.setDate(today.getDate() - 7)
                            ).toISOString(),
                        }, // dla correct > 10 sprawdzamy, czy minęło 7 dni
                    },
                    { lastCorrectHit: { $eq: null } }, // lub null, czyli nigdy nie było poprawnej odpowiedzi
                ],
            };
        }, [language, level, params.categoryId, usedWords]),
    });

    const words = useMemo(() => {
        return orderBy(
            wordsList,
            [
                (word) => word.correct + word.incorrect,
                (word) =>
                    word.correct === 0
                        ? word.incorrect
                        : word.incorrect / word.correct,
            ],
            ['asc', 'desc']
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    const nativeLang = split(params.languageDirectionId, '-to-')[0] as Language;
    const lang = split(params.languageDirectionId, '-to-')[1] as Language;

    const currentWord = useMemo(() => {
        const word = words[0];

        if (!word || word.nativeLanguageId === nativeLang) {
            return word;
        }

        return {
            ...word,
            nativeLanguageId: nativeLang,
            languageId: lang,
            word: word.translation,
            translation: word.word,
        };
    }, [lang, nativeLang, words]);

    const nextWord = useCallback(() => {
        setUsedWords(concat(usedWords, currentWord.id));
    }, [currentWord, setUsedWords, usedWords]);

    const skip = useCallback(async () => {
        await setWordAsKnown(currentWord.id);
    }, [currentWord, setWordAsKnown]);

    const validation = useCallback((word: string, translation: string) => {
        return toLower(word) === toLower(translation);
    }, []);

    const reset = useCallback(() => {
        setUsedWords([]);
        delay(() => {
            navigate('/categories');
        }, 500);
    }, [navigate, setUsedWords]);

    const check = useCallback(
        async (translation: string) => {
            if (validation(currentWord.translation, translation)) {
                await incrementCorrect(currentWord.id);
                const word = await findWordById(currentWord.id);
                const totalAttempts = word!.incorrect + word!.correct;
                const successRate = (word!.correct / totalAttempts) * 100;

                console.log({ word, totalAttempts, successRate });

                setIsCorrect(true);
            } else {
                await incrementIncorrect(currentWord.id);
                setIsCorrect(false);
            }
        },
        [
            currentWord,
            findWordById,
            incrementCorrect,
            incrementIncorrect,
            validation,
        ]
    );

    console.log(words, 'words');
    console.log(wordsList, 'wordsList');
    console.log(wordsList2, 'wordsList2');
    console.log(currentWord, 'currentWord');

    console.log({
        isLoading,
        isCorrect,
        currentWord,
        check,
        nextWord,
        skip,
        reset,
        lang,
        nativeLang,
        usedWords,
    });

    return {
        words,
        isLoading,
        isCorrect,
        currentWord,
        check,
        nextWord,
        skip,
        reset,
        lang,
        nativeLang,
    };
}
