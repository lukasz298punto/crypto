import {
    generatePath,
    Navigate,
    useNavigate,
    useParams,
} from 'react-router-dom';
import { Card, CardContent, Container, Stack, Typography } from '@mui/material';
import KeyPressButton from '@/components/KeyPressButton';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useTranslation } from 'react-i18next';
import useWordsDb from '@/hooks/useWordsDb';
import { WordParams } from '@/types/common';
import Finish from '@/components/Finish';
import useWord from '@/hooks/useWord';
import { useState } from 'react';
import { concat } from 'lodash';
import clsx from 'clsx';

export default function Flashcards() {
    const { t } = useTranslation();
    const { currentWord, nextWord, skip, check } = useWord();
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

    console.log(currentWord, 'currentWord');

    if (!currentWord) {
        return <Finish />;
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
                                keyCode={KeyCode.Two}
                                language="pl-PL"
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
                                {currentWord?.translation}
                            </Typography>
                            <VoiceIcon
                                name={currentWord?.translation}
                                keyCode={KeyCode.One}
                                language="en-GB"
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
