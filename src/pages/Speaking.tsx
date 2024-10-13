import {
    Alert,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Stack,
    Typography,
} from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
import { useCallback, useEffect, useState } from 'react';
import HighlightText from '@/components/HighlightText';
import Language from '@/constants/enums/language';
import useSettingsDb from '@/hooks/useSettingsDb';
import NativeWord from '@/components/NativeWord';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import Finish from '@/components/Finish';
import useWord from '@/hooks/useWord';
import clsx from 'clsx';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;

export default function Speaking() {
    const { t } = useTranslation();
    const [isRecording, setIsRecording] = useState(false);
    const [speechResult, setSpeechResult] = useState('');
    const { language } = useSettingsDb();
    const {
        currentWord,
        nextWord,
        skip,
        check,
        reset,
        lang,
        nativeLang,
        isCorrect,
    } = useWord();

    const startListening = useCallback(() => {
        recognition.start();
        recognition.lang = lang === Language.En ? 'en-US' : 'pl-PL';

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
    }, [lang]);

    useEffect(() => {
        return () => {
            recognition.stop();
        };
    }, []);

    useEffect(() => {
        if (speechResult) {
            check(speechResult);
        }
    }, [check, speechResult]);

    if (!currentWord) {
        return <Finish onReset={reset} />;
    }

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
                            <NativeWord
                                word={
                                    currentWord?.word +
                                    (currentWord?.wordDesc
                                        ? ` (${currentWord?.wordDesc})`
                                        : '')
                                }
                            />

                            <VoiceIcon
                                name={currentWord.word}
                                keyCode={KeyCode.One}
                                language={nativeLang}
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            className={clsx('mb-2 h-[45px]', {
                                'opacity-0': !speechResult,
                            })}
                        >
                            <Typography
                                variant="h5"
                                color="text.secondary"
                            >
                                {currentWord.translation}
                            </Typography>
                            {speechResult && (
                                <VoiceIcon
                                    name={currentWord.translation}
                                    keyCode={KeyCode.Two}
                                    language={lang}
                                    autoPlay
                                />
                            )}
                        </Stack>
                        {speechResult && (
                            <>
                                <Alert
                                    severity={isCorrect ? 'success' : 'error'}
                                    className="h-[56px] w-full xy-center"
                                >
                                    {speechResult}
                                </Alert>
                            </>
                        )}
                        {!speechResult && (
                            <Stack
                                gap={1}
                                direction="row"
                                alignItems="center"
                                className={clsx('h-[56px]', {
                                    'opacity-0': !isRecording,
                                })}
                            >
                                <CircularProgress size={20} />
                                <Typography>
                                    {t('Trwa nagrywanie dźwięku...')}
                                </Typography>
                            </Stack>
                        )}
                        <Box
                            className={clsx({
                                'opacity-0': !speechResult,
                            })}
                        >
                            {currentWord?.exampleUsedTranslation && (
                                <Stack
                                    className="mt-1"
                                    direction="row"
                                    alignItems="center"
                                >
                                    <HighlightText
                                        text={
                                            currentWord?.exampleUsedTranslation
                                        }
                                        trans={
                                            language === lang
                                                ? currentWord.translation
                                                : currentWord.word
                                        }
                                    />
                                    <VoiceIcon
                                        name={
                                            currentWord?.exampleUsedTranslation
                                        }
                                        keyCode={KeyCode.Four}
                                        language={lang}
                                    />
                                </Stack>
                            )}
                        </Box>
                        {currentWord?.exampleUsed && (
                            <Typography
                                className="mb-2"
                                color="text.secondary"
                                variant="body2"
                                align="center"
                            >
                                {currentWord?.exampleUsed}
                            </Typography>
                        )}
                        {!speechResult ? (
                            <Stack
                                className="w-full"
                                direction="row"
                                gap={1}
                            >
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
                            <>
                                <KeyPressButton
                                    keyCode={KeyCode.Enter}
                                    className="w-full flex-1"
                                    variant="contained"
                                    onClick={() => {
                                        nextWord();
                                        setSpeechResult('');
                                    }}
                                >
                                    {t('Następne słowo')}
                                </KeyPressButton>
                                <KeyPressButton
                                    className="mt-1 w-full"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        skip();
                                        setSpeechResult('');
                                    }}
                                    keyCode={KeyCode.S}
                                >
                                    {t('Znam to')}
                                </KeyPressButton>
                            </>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
