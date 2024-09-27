import React, { useState, useEffect, useCallback } from 'react';
import { useWordSelection } from '../hooks/useWordSelection';
import Finish from './Finish';
import Word from './Word';

interface FlashcardsProps {
    language: string;
}

const Flashcards: React.FC<FlashcardsProps> = ({ language }) => {
    const { currentWord, updateWordFrequency } = useWordSelection(language);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleFeedback = useCallback(
        (correct: boolean) => {
            updateWordFrequency(currentWord!.word, correct); // Aktualizacja statystyk
            setShowAnswer(false); // Przejście do następnego słowa po udzieleniu odpowiedzi
        },
        [currentWord, updateWordFrequency]
    );

    // Dodanie obsługi klawisza Enter do sprawdzania odpowiedzi
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!showAnswer && event.key === 'Enter') {
                handleCheck(); // Sprawdzenie odpowiedzi po wciśnięciu Enter
            }
            if (showAnswer) {
                if (event.key === '1') {
                    event.preventDefault();
                    handleFeedback(true); // Wciśnięcie klawisza "1" jako "Dobrze"
                } else if (event.key === '2') {
                    event.preventDefault();
                    handleFeedback(false); // Wciśnięcie klawisza "2" jako "Źle"
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleFeedback, showAnswer]);

    if (!currentWord) {
        return <Finish />;
    }

    const handleCheck = () => {
        setShowAnswer(true);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h2 className="text-2xl font-bold">
                Fiszki ({language === 'english' ? 'Angielski' : 'Polski'})
            </h2>
            <Word word={currentWord.word} language={language} />
            {!showAnswer ? (
                <button
                    onClick={handleCheck}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Sprawdź (enter)
                </button>
            ) : (
                <>
                    <p className="text-xl text-gray-700 flex gap-2 !mt-6 bg-blue-200">
                        Odpowiedź:{' '}
                        <Word
                            word={currentWord.translation}
                            language={
                                language === 'english' ? 'polish' : 'english'
                            }
                            voiceKey="4"
                        />
                    </p>
                    <div className="space-x-4">
                        <button
                            onClick={() => handleFeedback(true)}
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        >
                            Dobrze (1)
                        </button>
                        <button
                            onClick={() => handleFeedback(false)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Źle (2)
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Flashcards;
