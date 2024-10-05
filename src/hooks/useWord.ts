import { useCallback, useMemo, useState } from 'react';
import Language from '@/constants/enums/language';
import { useSessionStorage } from 'react-use';
import { useParams } from 'react-router-dom';
import useWordsDb from '@/hooks/useWordsDb';
import useSettingsDb from './useSettingsDb';
import { WordParams } from '@/types/common';
import orderBy from 'lodash/orderBy';
import toLower from 'lodash/toLower';
import concat from 'lodash/concat';
import split from 'lodash/split';
import size from 'lodash/size';

export default function useWord() {
    const params = useParams<WordParams>();
    const { language, level } = useSettingsDb();
    const [usedWords, setUsedWords] = useSessionStorage<string[]>(
        'usedWords',
        []
    );
    const [isCorrect, setIsCorrect] = useState(false);

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
    }, [size(wordsList)]);

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
    }, [setUsedWords]);

    const check = useCallback(
        async (translation: string) => {
            if (validation(currentWord.translation, translation)) {
                await incrementCorrect(currentWord.id);
                const word = await findWordById(currentWord.id);
                const totalAttempts = word!.incorrect + word!.correct;
                const successRate = (word!.correct / totalAttempts) * 100;

                if (
                    (totalAttempts >= 3 && successRate === 100) ||
                    (totalAttempts >= 10 && successRate >= 95)
                ) {
                    skip();
                }
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
            skip,
        ]
    );

    return {
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
