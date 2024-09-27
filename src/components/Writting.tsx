import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useWordSelection } from '../hooks/useWordSelection';
import Finish from './Finish';
import Word from './Word';

interface WritingProps {
    language: string;
}

// Funkcja porównująca litery i podkreślająca błędne
const highlightMistakes = (userAnswer: string, correctAnswer: string) => {
    const minLength = Math.min(userAnswer.length, correctAnswer.length);
    const result = [];

    for (let i = 0; i < minLength; i++) {
        if (userAnswer[i] === correctAnswer[i]) {
            result.push(<span key={i}>{userAnswer[i]}</span>);
        } else {
            result.push(
                <span
                    key={i}
                    style={{ textDecoration: 'underline', color: 'red' }}
                >
                    {userAnswer[i]}
                </span>
            );
        }
    }

    // Dodanie brakujących znaków, jeśli długości są różne
    if (userAnswer.length > correctAnswer.length) {
        for (let i = correctAnswer.length; i < userAnswer.length; i++) {
            result.push(
                <span
                    key={i}
                    style={{ textDecoration: 'underline', color: 'red' }}
                >
                    {userAnswer[i]}
                </span>
            );
        }
    }

    return result;
};

const Writing: React.FC<WritingProps> = ({ language }) => {
    const { currentWord, updateWordFrequency, setNextWord, checkCorrect } =
        useWordSelection(language);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState<string | null>(null);
    const [highlightedAnswer, setHighlightedAnswer] = useState<
        JSX.Element[] | null
    >(null);
    const [showNextButton, setShowNextButton] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus na polu tekstowym
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentWord]);

    const handleSubmit = useCallback(() => {
        if (checkCorrect(inputValue)) {
            setFeedback(`Poprawna odpowiedź. ${currentWord!.translation}`);
            updateWordFrequency(currentWord!.word, true, true);
        } else {
            setFeedback(
                `Niepoprawna odpowiedź. Poprawna odpowiedź to: ${currentWord!.translation}`
            );
            setHighlightedAnswer(
                highlightMistakes(inputValue, currentWord!.translation)
            );
            updateWordFrequency(currentWord!.word, false, true);
        }

        setShowNextButton(true);
        setInputValue('');
    }, [checkCorrect, currentWord, inputValue, updateWordFrequency]);

    const handleNext = useCallback(() => {
        setNextWord(currentWord!.word);
        setFeedback(null);
        setHighlightedAnswer(null);
        setShowNextButton(false);
    }, [currentWord, setNextWord]);

    // Dodanie obsługi klawisza Enter
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!feedback && event.key === 'Enter') {
                handleSubmit();
            } else if (feedback && event.key === 'Enter') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [feedback, handleNext, handleSubmit]);

    if (!currentWord) {
        return <Finish />;
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-bold">
                Pisanie ({language === 'english' ? 'Angielski' : 'Polski'})
            </h2>
            <Word
                word={currentWord.word}
                language={language}
                noVoice
            />
            {!feedback ? (
                <>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-1/2 rounded border px-4 py-2"
                    />
                    <button
                        onClick={handleSubmit}
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Sprawdź (Enter)
                    </button>
                </>
            ) : (
                <div className="text-center">
                    <p
                        // eslint-disable-next-line lodash/prefer-lodash-method
                        className={`text-xl font-bold ${feedback.startsWith('Poprawna') ? 'text-green-500' : 'text-red-500'}`}
                    >
                        {feedback}
                    </p>
                    {highlightedAnswer && (
                        <p className="text-xl">
                            Twoja odpowiedź: {highlightedAnswer}
                        </p>
                    )}
                    {showNextButton && (
                        <button
                            onClick={handleNext}
                            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Następne słowo (Enter)
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Writing;
