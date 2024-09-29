import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
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
                            <Typography
                                variant="h2"
                                className="font-medium"
                            >
                                {currentWord?.word}
                            </Typography>
                            <VoiceIcon
                                name={currentWord?.word}
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
                                {currentWord?.translation}
                            </Typography>
                            {isAnswerChecked && (
                                <VoiceIcon
                                    name={currentWord?.translation}
                                    keyCode={KeyCode.One}
                                    language={lang}
                                    autoPlay
                                />
                            )}
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
                                    onClick={() => {
                                        skip();
                                    }}
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
