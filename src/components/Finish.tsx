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
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
                Sesja zakończona
            </h1>
            <p className="mb-8 text-lg text-gray-600">
                Gratulacje! Ukończyłeś wszystkie fiszki w tej sesji.
            </p>
            <button
                onClick={handleRestart}
                className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
                Rozpocznij nową sesję (enter)
            </button>
        </div>
    );
}

export default Finish;
