import { useState, useEffect } from 'react';
import FlashCards from './components/FlashCards';
import Writting from './components/Writting';
import Speaking from './components/Speaking';

function App() {
    const [language, setLanguage] = useState<string | null>(null);
    const [mode, setMode] = useState<string | null>(null);

    // Nasłuchiwanie klawiatury do wyboru języka
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!language) {
                // Obsługa wyboru języka
                if (event.key === '1') {
                    event.preventDefault();
                    setLanguage('english');
                } else if (event.key === '2') {
                    setLanguage('polish');
                    event.preventDefault();
                }
            } else if (!mode) {
                // Obsługa wyboru trybu
                if (event.key === '1') {
                    event.preventDefault();
                    setMode('flashcards');
                } else if (event.key === '2') {
                    event.preventDefault();
                    setMode('writing');
                } else if (event.key === '3') {
                    event.preventDefault();
                    setMode('speaking');
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [language, mode]);

    if (!language) {
        return (
            <div className="flex flex-col items-center justify-center h-screen space-y-4">
                <h2 className="text-2xl font-bold">Wybierz język:</h2>
                <div className="space-x-4">
                    <button
                        onClick={() => setLanguage('english')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        Angielski (1)
                    </button>
                    <button
                        onClick={() => setLanguage('polish')}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                        Polski (2)
                    </button>
                </div>
            </div>
        );
    }

    if (!mode) {
        return (
            <div className="flex flex-col items-center justify-center h-screen space-y-4">
                <h2 className="text-2xl font-bold">Wybierz tryb:</h2>
                <div className="space-x-4">
                    <button
                        onClick={() => setMode('flashcards')}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
                    >
                        Fiszki (1)
                    </button>
                    <button
                        onClick={() => setMode('writing')}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                    >
                        Pisanie (2)
                    </button>
                    <button
                        onClick={() => setMode('speaking')}
                        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-red-700"
                    >
                        Mówienie (3)
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {mode === 'flashcards' && <FlashCards language={language} />}
            {mode === 'writing' && <Writting language={language} />}
            {mode === 'speaking' && <Speaking language={language} />}
        </>
    );
}

export default App;
