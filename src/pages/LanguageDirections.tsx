import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import LanguageDirection from '@/constants/enums/languageDirection';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import ikony strzałki
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import map from 'lodash/map';

export default function LanguageDirections() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const options = [
        {
            id: LanguageDirection.PlToEn,
            from: t('Polski'),
            to: t('Angielski'),
        },
        {
            id: LanguageDirection.EnToPl,
            from: t('Angielski'),
            to: t('Polski'),
        },
    ];

    return (
        <Stack gap={2}>
            <Typography
                variant="h3"
                className="text-center font-medium"
            >
                {t('Wybierz kierunek nauki')}
            </Typography>
            <Divider />
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(options, (option) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 3 }}
                        key={option.id}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() => navigate(`${option.id}`)}
                            >
                                <CardContent>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-around"
                                        alignItems="center"
                                    >
                                        <Typography
                                            className="font-medium"
                                            variant="h5"
                                        >
                                            {option.from}
                                        </Typography>
                                        <ArrowForwardIcon />
                                        <Typography
                                            className="font-medium"
                                            variant="h5"
                                        >
                                            {option.to}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
