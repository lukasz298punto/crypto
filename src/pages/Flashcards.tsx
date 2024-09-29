import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import clsx from 'clsx';

export default function Flashcards() {
    const { t } = useTranslation();

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

    const handleIncorrect = () => {
        // Logika dla odpowiedzi błędnej
        console.log('Użytkownik zaznaczył odpowiedź jako błędną');
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
                                name="dupa111111111111111111111111111111"
                                keyCode={KeyCode.Two}
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
                                name="dupa22222222222222222222222222222222"
                                keyCode={KeyCode.One}
                            />
                        </Stack>

                        {!isAnswerChecked ? (
                            <Stack
                                className="w-full"
                                direction="row"
                                gap={1}
                            >
                                <KeyPressButton
                                    className="flex-1"
                                    color="error"
                                    variant="contained"
                                    onClick={handleCheck}
                                    keyCode={KeyCode.Space}
                                >
                                    {t('Pomiń')}
                                </KeyPressButton>
                                <KeyPressButton
                                    className="flex-1"
                                    variant="contained"
                                    onClick={handleCheck}
                                    keyCode={KeyCode.Enter}
                                >
                                    {t('Sprawdź')}
                                </KeyPressButton>
                            </Stack>
                        ) : (
                            <Stack
                                className="w-full"
                                direction="row"
                                gap={1}
                            >
                                <KeyPressButton
                                    className="flex-1"
                                    color="error"
                                    variant="contained"
                                    onClick={handleIncorrect}
                                    keyCode={KeyCode.Space}
                                >
                                    {t('Źle')}
                                </KeyPressButton>
                                <KeyPressButton
                                    className="flex-1"
                                    color="success"
                                    variant="contained"
                                    onClick={handleCorrect}
                                    keyCode={KeyCode.Enter}
                                >
                                    {t('Dobrze')}
                                </KeyPressButton>
                            </Stack>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
