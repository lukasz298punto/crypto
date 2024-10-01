import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
import NativeWord from '@/components/NativeWord';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import Finish from '@/components/Finish';
import useWord from '@/hooks/useWord';
import { useState } from 'react';
import clsx from 'clsx';

export default function Flashcards() {
    const { t } = useTranslation();
    const { currentWord, nextWord, skip, check, reset, lang, nativeLang } =
        useWord();
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    const handleCheck = () => {
        setIsAnswerChecked(true);
    };

    const handleCorrect = () => {
        check(currentWord.translation);
        setIsAnswerChecked(false);
        nextWord();
    };

    const handleIncorrect = () => {
        check(currentWord.translation + 'sss');
        setIsAnswerChecked(false);
        nextWord();
    };

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
                            <NativeWord word={currentWord?.word} />
                            <VoiceIcon
                                name={currentWord?.word}
                                keyCode={KeyCode.Three}
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
                                {currentWord?.translation}
                            </Typography>
                            {isAnswerChecked && (
                                <VoiceIcon
                                    name={currentWord?.translation}
                                    keyCode={KeyCode.Three}
                                    language={lang}
                                    autoPlay
                                />
                            )}
                        </Stack>

                        {!isAnswerChecked ? (
                            <KeyPressButton
                                className="w-full"
                                variant="contained"
                                onClick={handleCheck}
                                keyCode={KeyCode.Enter}
                            >
                                {t('Sprawdź')}
                            </KeyPressButton>
                        ) : (
                            <>
                                <Stack
                                    className="w-full flex-wrap"
                                    direction="row"
                                    gap={1}
                                >
                                    <KeyPressButton
                                        className="flex-1"
                                        color="error"
                                        variant="contained"
                                        onClick={handleIncorrect}
                                        keyCode={KeyCode.One}
                                    >
                                        {t('Źle')}
                                    </KeyPressButton>
                                    <KeyPressButton
                                        className="flex-1"
                                        color="success"
                                        variant="contained"
                                        onClick={handleCorrect}
                                        keyCode={KeyCode.Two}
                                    >
                                        {t('Dobrze')}
                                    </KeyPressButton>
                                </Stack>
                                <KeyPressButton
                                    className="mt-1 w-full"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        skip();
                                        setIsAnswerChecked(false);
                                    }}
                                    keyCode={KeyCode.Space}
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
