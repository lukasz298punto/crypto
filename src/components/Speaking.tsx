import React, { useState, useEffect, useCallback } from 'react';
import { useWordSelection } from '../hooks/useWordSelection';
import Finish from './Finish';
import Word from './Word';
import { useKeyPress } from 'react-use';

// Deklaracja typu dla SpeechRecognition

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;

interface FlashcardsProps {
    language: string;
}

const Speaking: React.FC<FlashcardsProps> = ({ language }) => {
    const { currentWord, updateWordFrequency, checkCorrect, setNextWord } =
        useWordSelection(language);
    const [speechResult, setSpeechResult] = useState<string | null>(null); // Przechowywanie rozpoznanego słowa
    const [feedback, setFeedback] = useState<string | null>(null);
    const [showNextButton, setShowNextButton] = useState(false);
    const [isEnterPressed] = useKeyPress('Enter');

    // Ustawienie języka rozpoznawania na podstawie props
    useEffect(() => {
        if (language === 'english') {
            recognition.lang = 'pl-PL';
        } else if (language === 'polish') {
            recognition.lang = 'en-US';
        }
    }, [language]);

    const startListening = useCallback(() => {
        let isResultReceived = false;

        recognition.start();
        setFeedback('Słucham...');

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const transcript = event.results[0][0].transcript;
            setSpeechResult(transcript);
            isResultReceived = true;

            if (checkCorrect(transcript)) {
                setFeedback(`Poprawna odpowiedź`);
                updateWordFrequency(currentWord!.word, true, true);
            } else {
                setFeedback(`Niepoprawna odpowiedź`);

                updateWordFrequency(currentWord!.word, false, true);
            }
        };

        recognition.onend = () => {
            if (!isResultReceived) {
                // Jeżeli nie było wyniku, ustawiamy odpowiedni feedback
                setFeedback('Nie było odpowiedzi. Spróbuj ponownie.');
            } else {
                setShowNextButton(true);
            }
        };
    }, [checkCorrect, currentWord, updateWordFrequency]);

    const handleCheck = useCallback(() => {
        startListening(); // Zainicjuj słuchanie, gdy użytkownik kliknie sprawdzenie
    }, [startListening]);

    const handleNextWord = useCallback(() => {
        setNextWord(currentWord!.word);
        setFeedback(null);
        setShowNextButton(false); // Wyłącz możliwość przejścia, zanim odpowiedź nie zostanie udzielona
        setSpeechResult(null); // Zresetuj wynik mowy
    }, [currentWord, setNextWord]);

    useEffect(() => {
        if (isEnterPressed) {
            if (showNextButton) {
                handleNextWord();
            } else {
                handleCheck();
            }
        }
    }, [isEnterPressed]);

    console.log(isEnterPressed, 'isEnterPressed');

    // useEffect(() => {
    //     const handleKeyPress = (event: KeyboardEvent) => {
    //         if (event.key === 'Enter') {
    //             if (showNextButton) {
    //                 handleNextWord();
    //             } else {
    //                 handleCheck();
    //             }
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyPress);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyPress);
    //     };
    // }, [feedback, handleCheck, handleNextWord, showNextButton]);

    if (!currentWord) {
        return <Finish />;
    }

    console.log(feedback, 'feedback');

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h2 className="text-2xl font-bold">
                Mówienie ({language === 'english' ? 'Angielski' : 'Polski'})
            </h2>
            <Word word={currentWord.word} language={language} />
            {!showNextButton && (
                <button
                    onClick={handleCheck}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Sprawdź wymowę (Enter)
                </button>
            )}
            {speechResult && (
                <div>
                    <p>Rozpoznano: {speechResult}</p>
                </div>
            )}
            {showNextButton && (
                <p className="text-xl text-gray-700 flex gap-2 !mt-6 bg-blue-200">
                    Odpowiedź:{' '}
                    <Word
                        word={currentWord.translation}
                        language={language === 'english' ? 'polish' : 'english'}
                        voiceKey="4"
                    />
                </p>
            )}
            {feedback && <p>{feedback}</p>}
            {showNextButton && (
                <button
                    onClick={handleNextWord}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Następne słowo (Enter)
                </button>
            )}
        </div>
    );
};

export default Speaking;
