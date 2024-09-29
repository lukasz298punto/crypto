import { useEffect } from 'react';

function Finish() {
    const handleRestart = () => {
        window.location.reload(); // Możesz zmienić na inną akcję, np. reset sesji
    };

    // Dodanie obsługi klawisza Enter do rozpoczęcia nowej sesji
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                handleRestart(); // Rozpocznij nową sesję po wciśnięciu Enter
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="flex h-screen flex-col items-center justify-center text-center">
            <h1 className="text-gray-800 mb-4 text-4xl font-bold">
                Sesja zakończona
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
                Gratulacje! Ukończyłeś wszystkie fiszki w tej sesji.
            </p>
            <button
                onClick={handleRestart}
                className="bg-blue-500 font-semibold text-white hover:bg-blue-700 rounded-lg px-6 py-3"
            >
                Rozpocznij nową sesję (enter)
            </button>
        </div>
    );
}

export default Finish;
