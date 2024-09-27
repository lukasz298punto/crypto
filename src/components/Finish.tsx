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
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Sesja zakończona
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Gratulacje! Ukończyłeś wszystkie fiszki w tej sesji.
            </p>
            <button
                onClick={handleRestart}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
                Rozpocznij nową sesję (enter)
            </button>
        </div>
    );
}

export default Finish;
