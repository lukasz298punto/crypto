import { useCallback, useState } from 'react';
import { useLocalStorage } from 'react-use';
import inputArray from '../data/words';
import { removeDiacritics } from '../utility/common';

const words = inputArray.reduce(
    (acc, curr) => {
        // Dodaj słowo do sekcji 'english'
        acc.english.push({
            word: curr.english,
            translation: curr.polish,
        });

        // Dodaj słowo do sekcji 'polish'
        acc.polish.push({
            word: curr.polish,
            translation: curr.english,
        });

        return acc;
    },
    { english: [], polish: [] }
);

// Typy dla słów i statystyk
type Word = {
    word: string;
    translation: string;
};

type WordStats = {
    correct: number;
    incorrect: number;
};

type Words = {
    [key: string]: Word[];
};

// Hook `useWordSelection`
export const useWordSelection = (language: string) => {
    // Stan śledzący użyte słowa w danej sesji
    const [usedWords, setUsedWords] = useState<string[]>([]);

    // Używamy `useLocalStorage` do przechowywania statystyk w localStorage
    const [storedWordStats, setStoredWordStats] = useLocalStorage<
        Record<string, WordStats>
    >(
        'wordStats',
        {} // Domyślna wartość to pusty obiekt
    );

    // Funkcja filtrowania słów na podstawie statystyk
    const filterWords = (word: Word): boolean => {
        const stats = storedWordStats?.[word.word] || {
            correct: 0,
            incorrect: 0,
        };
        const totalAttempts = stats.correct + stats.incorrect;

        // Jeśli słowo miało co najmniej 10 wystąpień i skuteczność >= 95%, wyklucz je
        if (totalAttempts >= 10) {
            const successRate = (stats.correct / totalAttempts) * 100;
            if (successRate >= 95) {
                return false; // Wyklucz słowo
            }
        }

        // Jeśli słowo miało 5 prób i 0 błędów, wyklucz je
        if (stats.correct >= 3 && stats.incorrect === 0) {
            return false; // Wyklucz słowo
        }

        return true; // Zatrzymaj słowo, jeśli nie spełnia warunku filtrowania
    };
    // Funkcja wybierająca następne słowo
    const getNextWord = (
        language: string,
        usedWords: string[]
    ): Word | null => {
        const wordsInLanguage: Word[] = (words as Words)[language];

        console.log(wordsInLanguage, 'wordsInLanguage');

        // Filtrowanie, aby nie używać słów, które już wystąpiły w danej sesji lub spełniają warunek skuteczności
        const availableWords = wordsInLanguage.filter(
            (word) => !usedWords.includes(word.word) && filterWords(word)
        );

        if (availableWords.length === 0) {
            // Jeśli wszystkie słowa zostały użyte, zresetuj sesję
            return null; // Zwracamy null, gdy brak słów
        }

        // Oddzielanie słów bez statystyk od tych, które mają statystyki
        const wordsWithoutStats = availableWords.filter(
            (word) => !storedWordStats?.[word.word]
        );

        const wordsWithStats = availableWords.filter(
            (word) => storedWordStats?.[word.word]
        );

        // Sortowanie słów, które mają statystyki, na podstawie różnicy `incorrect - correct`
        const sortedWordsWithStats = wordsWithStats.sort((a, b) => {
            const statsA = storedWordStats?.[a.word] || {
                correct: 0,
                incorrect: 0,
            };
            const statsB = storedWordStats?.[b.word] || {
                correct: 0,
                incorrect: 0,
            };

            const differenceA = statsA.incorrect - statsA.correct;
            const differenceB = statsB.incorrect - statsB.correct;

            // Sortowanie według różnicy: największa różnica na górze
            return differenceB - differenceA;
        });

        // Najpierw zwracamy słowa bez statystyk, a potem posortowane słowa ze statystykami
        const sortedWords = [...wordsWithoutStats, ...sortedWordsWithStats];

        return sortedWords[0]; // Zwracamy pierwsze słowo z posortowanej listy
    };

    // Wybieramy pierwsze słowo do wyświetlenia
    const [currentWord, setCurrentWord] = useState<Word | null>(() =>
        getNextWord(language, [])
    );

    const setNextWord = (word: string) => {
        setCurrentWord(getNextWord(language, [...usedWords, word]));
    };

    // Funkcja aktualizująca statystyki słów
    const updateWordFrequency = (
        word: string,
        correct: boolean,
        noNextWord = false
    ) => {
        const stats = storedWordStats?.[word] || { correct: 0, incorrect: 0 };

        if (correct) {
            stats.correct += 1;
        } else {
            stats.incorrect += 1;
        }

        // Aktualizacja statystyk w localStorage
        setStoredWordStats({
            ...storedWordStats,
            [word]: stats,
        });

        // Dodaj słowo do listy użytych w sesji
        setUsedWords([...usedWords, word]);

        if (!noNextWord) {
            // Wybieramy nowe słowo po aktualizacji statystyk
            setNextWord(word);
        }
    };

    const checkCorrect = useCallback(
        (word: string) => {
            return (
                removeDiacritics(word) ===
                removeDiacritics(currentWord!.translation)
            );
        },
        [currentWord]
    );

    return {
        currentWord,
        updateWordFrequency,
        setNextWord,
        checkCorrect,
    };
};
