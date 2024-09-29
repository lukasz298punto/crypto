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
import Language from '@/constants/enums/language';
import KeyCode from '@/constants/enums/keyCode';
import VoiceIcon from '@/components/VoiceIcon';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import clsx from 'clsx';

export default function Writing() {
    const [inputValue, setInputValue] = useState('');
    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

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
                                keyCode={KeyCode.One}
                                language={Language.Pl}
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
                                name="dupa111111111111111111111111111111"
                                keyCode={KeyCode.Two}
                                language={Language.En}
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
                                autoFocus
                                className="mb-2 w-full"
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyUpCapture={(e) => e.stopPropagation()}
                                onKeyUp={(e) => e.stopPropagation()}
                                onKeyDown={(e) => e.stopPropagation()}
                                onKeyDownCapture={(e) => e.stopPropagation()}
                            />
                        )}
                        {!isAnswerChecked ? (
                            <Stack
                                className="w-full"
                                direction="row"
                                gap={1}
                            >
                                <KeyPressButton
                                    keyCode={KeyCode.Space}
                                    className="flex-1"
                                    color="error"
                                    variant="contained"
                                    onClick={() =>
                                        navigate('/' + Date.now()?.toString())
                                    }
                                >
                                    {t('Pomiń')}
                                </KeyPressButton>
                                <KeyPressButton
                                    keyCode={KeyCode.Enter}
                                    className="flex-1"
                                    variant="contained"
                                    onClick={handleCheck}
                                >
                                    {t('Sprawdź')}
                                </KeyPressButton>
                            </Stack>
                        ) : (
                            <KeyPressButton
                                keyCode={KeyCode.Enter}
                                className="w-full"
                                variant="contained"
                                onClick={() =>
                                    navigate('/' + Date.now()?.toString())
                                }
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
