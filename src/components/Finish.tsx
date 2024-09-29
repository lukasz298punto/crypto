import { Card, Container, Stack, Typography } from '@mui/material';
import KeyCode from '@/constants/enums/keyCode';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import KeyPressButton from './KeyPressButton';
import { Fn } from '@/types/common';

interface FinishProps {
    onReset: Fn;
}

function Finish({ onReset }: Readonly<FinishProps>) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Card className="p-2">
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                    >
                        {t('Sesja zakończona')}
                    </Typography>
                    <Typography gutterBottom>
                        {t('Gratulacje! Ukończyłeś wszystko z tej sesji')}
                    </Typography>
                    <Stack
                        className="mt-3 w-full"
                        direction="row"
                        gap={1}
                    >
                        <KeyPressButton
                            className="flex-1"
                            variant="contained"
                            color="error"
                            onClick={onReset}
                            keyCode={KeyCode.Space}
                        >
                            {t('Zresetuj sesję')}
                        </KeyPressButton>
                        <KeyPressButton
                            className="flex-1"
                            variant="contained"
                            onClick={() => {
                                navigate(`/`);
                            }}
                            keyCode={KeyCode.Enter}
                        >
                            {t('Rozpocznij nową sesję')}
                        </KeyPressButton>
                    </Stack>
                </Stack>
            </Card>
        </Container>
    );
}

export default Finish;
