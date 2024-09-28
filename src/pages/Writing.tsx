import {
    Alert,
    Button,
    Card,
    CardContent,
    Container,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import clsx from 'clsx';

export default function Writing() {
    const [inputValue, setInputValue] = useState('');
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);

    // Przykładowe dane fiszki
    const flashcard = {
        wordPolish: 'Dom',
        wordEnglish: 'House',
        pronunciation: 'house',
    };

    // Stan do kontrolowania, czy użytkownik sprawdził odpowiedź
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    const handleCheck = () => {
        // Po naciśnięciu przycisku "Sprawdź" pokaż odpowiedź
        setIsAnswerChecked(true);
    };

    const handleCorrect = () => {
        // Logika dla odpowiedzi poprawnej
        console.log('Użytkownik zaznaczył odpowiedź jako poprawną');
        setIsAnswerChecked(false); // Resetujemy, żeby wyświetlić kolejną fiszkę
    };

    return (
        <Container maxWidth="md">
            <Card className="p-2">
                <CardContent>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                        >
                            <Typography
                                variant="h2"
                                className="font-medium"
                            >
                                {flashcard.wordPolish}
                            </Typography>
                            <VoiceIcon
                                isPlaying
                                onPlay={() => {}}
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            className={clsx('mb-2', {
                                'opacity-0': !isAnswerChecked,
                            })}
                        >
                            <Typography
                                variant="h5"
                                color="text.secondary"
                            >
                                {flashcard.wordEnglish}
                            </Typography>
                            <VoiceIcon
                                isPlaying
                                onPlay={() => {}}
                            />
                        </Stack>
                        {isAnswerChecked && (
                            <>
                                <Alert
                                    severity={
                                        flashcard?.wordEnglish === inputValue
                                            ? 'success'
                                            : 'error'
                                    }
                                    className="mb-2 h-[56px] w-full xy-center"
                                >
                                    {inputValue}
                                </Alert>
                            </>
                        )}
                        {!isAnswerChecked && (
                            <TextField
                                className="mb-2 w-full"
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        )}
                        {!isAnswerChecked ? (
                            <Stack
                                className="w-full"
                                direction="row"
                                gap={1}
                            >
                                <Button
                                    className="flex-1"
                                    color="error"
                                    variant="contained"
                                    onClick={handleCheck}
                                >
                                    {t('Pomiń (Spacja)')}
                                </Button>
                                <Button
                                    className="flex-1"
                                    variant="contained"
                                    onClick={handleCheck}
                                >
                                    {t('Sprawdź (Enter)')}
                                </Button>
                            </Stack>
                        ) : (
                            <Button
                                className="w-full"
                                variant="contained"
                                onClick={handleCorrect}
                            >
                                {t('Następne słowo (Enter)')}
                            </Button>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
