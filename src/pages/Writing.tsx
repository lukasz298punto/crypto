import {
    Alert,
    Card,
    CardContent,
    Container,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import Finish from '@/components/Finish';
import { useRef, useState } from 'react';
import useWord from '@/hooks/useWord';
import clsx from 'clsx';

export default function Writing() {
    const [inputValue, setInputValue] = useState('');
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);
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
                            <Typography
                                variant="h2"
                                className="font-medium"
                            >
                                {currentWord.word}
                            </Typography>
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
                                'opacity-0': !isAnswerChecked,
                            })}
                        >
                            <Typography
                                variant="h5"
                                color="text.secondary"
                            >
                                {currentWord.translation}
                            </Typography>
                            {isAnswerChecked && (
                                <VoiceIcon
                                    name={currentWord.translation}
                                    keyCode={KeyCode.Two}
                                    language={lang}
                                    autoPlay
                                />
                            )}
                        </Stack>
                        {isAnswerChecked && (
                            <>
                                <Alert
                                    severity={isCorrect ? 'success' : 'error'}
                                    className="mb-2 h-[56px] w-full xy-center"
                                >
                                    {inputValue}
                                </Alert>
                            </>
                        )}
                        {!isAnswerChecked && (
                            <TextField
                                autoComplete="off"
                                autoFocus
                                className="mb-2 w-full"
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyUpCapture={(e) => {
                                    if (e.key !== 'Enter' && e.key !== '1') {
                                        e.stopPropagation();
                                    }
                                }}
                                onKeyUp={(e) => {
                                    if (e.key !== 'Enter' && e.key !== '1') {
                                        e.stopPropagation();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key !== 'Enter' && e.key !== '1') {
                                        e.stopPropagation();
                                    }
                                }}
                                onKeyDownCapture={(e) => {
                                    if (e.key !== 'Enter' && e.key !== '1') {
                                        e.stopPropagation();
                                    }
                                }}
                            />
                        )}
                        {!isAnswerChecked ? (
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
                                    onClick={skip}
                                >
                                    {t('Pomiń')}
                                </KeyPressButton>
                                <KeyPressButton
                                    keyCode={KeyCode.Enter}
                                    className="flex-1"
                                    variant="contained"
                                    onClick={() => {
                                        check(inputValue);
                                        setIsAnswerChecked(true);
                                    }}
                                >
                                    {t('Sprawdź')}
                                </KeyPressButton>
                            </Stack>
                        ) : (
                            <KeyPressButton
                                keyCode={KeyCode.Enter}
                                className="w-full"
                                variant="contained"
                                onClick={() => {
                                    nextWord();
                                    setIsAnswerChecked(false);
                                    setInputValue('');
                                }}
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
