import { useCallback, useMemo, useState } from 'react';
import { useSessionStorage } from 'react-use';
import { useParams } from 'react-router-dom';
import useWordsDb from '@/hooks/useWordsDb';
import useSettingsDb from './useSettingsDb';
import { WordParams } from '@/types/common';
import toLower from 'lodash/toLower';
import concat from 'lodash/concat';

export default function useWord() {
    const params = useParams<WordParams>();
    const { getLanguage, getLevel } = useSettingsDb();
    const [usedWords, setUsedWords] = useSessionStorage<string[]>(
        'usedWords',
        []
    );
    const [isCorrect, setIsCorrect] = useState(false);

    const {
        words,
        setWordAsKnown,
        incrementCorrect,
        incrementIncorrect,
        findWordById,
    } = useWordsDb({
        selector: useMemo(() => {
            return {
                categoryId: { $eq: params.categoryId },
                levelId: { $eq: getLevel() },
                languageId: { $eq: getLanguage() },
                id: { $nin: usedWords },
                isKnown: { $eq: false },
            };
        }, [getLanguage, getLevel, params.categoryId, usedWords]),
    });

    console.log(words, 'words22');

    const currentWord = useMemo(() => {
        return words[0];
    }, [words]);

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

    return { isCorrect, currentWord, check, nextWord, skip, reset };
}
