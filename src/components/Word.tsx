import { useCallback, useEffect } from 'react';

interface WordcardsProps {
    language: string;
    word: string;
    voiceKey?: string;
    noVoice?: boolean;
}

const Word: React.FC<WordcardsProps> = ({
    language,
    word,
    voiceKey = '3',
    noVoice = false,
}) => {
    const speakWord = useCallback(() => {
        if (!noVoice) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = language === 'english' ? 'en-US' : 'pl-PL'; // Ustaw odpowiedni język
            window.speechSynthesis.speak(utterance);
        }
    }, [language, noVoice, word]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Odtwórz wymowę słówka po naciśnięciu klawisza 3
            if (event.key === voiceKey) {
                speakWord();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [voiceKey, speakWord, word, noVoice]);

    useEffect(() => {
        speakWord();
    }, [speakWord]);

    return (
        <p className="font-semibold text-xl">
            {word}

            {!noVoice && (
                <button
                    onClick={() => {
                        speakWord();
                    }}
                    className="ml-2"
                >
                    🔊 ({voiceKey}) {/* Ikonka głośnika */}
                </button>
            )}
        </p>
    );
};

export default Word;
