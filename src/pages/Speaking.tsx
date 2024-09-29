import {
    Alert,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Stack,
    Typography,
} from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
import { useCallback, useEffect, useState } from 'react';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;

export default function Speaking() {
    const { t } = useTranslation();

    // Przykładowe dane fiszki
    const flashcard = {
        wordPolish: 'Dom',
        wordEnglish: 'House',
        pronunciation: 'house',
    };

    // Stan do kontrolowania, czy użytkownik sprawdził odpowiedź
    const [isRecording, setIsRecording] = useState(false);
    const [speechResult, setSpeechResult] = useState('');

    const handleCheck = () => {
        recognition.stop();
    };

    console.log(recognition, 'recognition');

    const startListening = useCallback(() => {
        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSpeechResult(transcript);
        };
        recognition.onend = () => {
            setIsRecording(false);
        };
        recognition.onerror = () => {
            setIsRecording(false);
        };
        recognition.onstart = () => {
            setIsRecording(true);
        };
    }, []);

    useEffect(() => {
        return () => {
            recognition.stop();
        };
    }, []);

    const handleCorrect = () => {
        // Logika dla odpowiedzi poprawnej
        console.log('Użytkownik zaznaczył odpowiedź jako poprawną');
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
                                'opacity-0': !speechResult,
                            })}
                        >
                            <Typography
                                variant="h5"
                                color="text.secondary"
                            >
                                {flashcard.wordEnglish}
                            </Typography>
                            <VoiceIcon
                                name="dupa111111111111111111111111111111"
                                keyCode={KeyCode.Two}
                            />
                        </Stack>
                        {speechResult && (
                            <>
                                <Alert
                                    severity={
                                        flashcard?.wordEnglish === speechResult
                                            ? 'success'
                                            : 'error'
                                    }
                                    className="mb-2 h-[56px] w-full xy-center"
                                >
                                    {speechResult}
                                </Alert>
                            </>
                        )}
                        {isRecording && (
                            <Stack
                                gap={1}
                                direction="row"
                                alignItems="center"
                                className="mb-2 h-[56px]"
                            >
                                <CircularProgress size={20} />
                                <Typography>
                                    {t('Trwa nagrywanie dźwięku...')}
                                </Typography>
                            </Stack>
                        )}
                        {!speechResult ? (
                            <Stack
                                className="w-full"
                                direction="row"
                                gap={1}
                            >
                                <KeyPressButton
                                    keyCode={KeyCode.One}
                                    className="flex-1"
                                    color="error"
                                    variant="contained"
                                    onClick={handleCheck}
                                >
                                    {t('Pomiń')}
                                </KeyPressButton>
                                <KeyPressButton
                                    disabled={isRecording}
                                    keyCode={KeyCode.Enter}
                                    className="flex-1"
                                    variant="contained"
                                    onClick={startListening}
                                >
                                    {t('Nagraj')}
                                </KeyPressButton>
                            </Stack>
                        ) : (
                            <KeyPressButton
                                keyCode={KeyCode.Enter}
                                className="w-full flex-1"
                                variant="contained"
                                onClick={handleCorrect}
                            >
                                {t('Następne słowo')}
                            </KeyPressButton>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
