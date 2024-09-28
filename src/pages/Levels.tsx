import {
    Card,
    CardActionArea,
    CardContent,
    Container,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import availableLanguages from '@/constants/availableLanguages';
import { Navigate, useNavigate } from 'react-router-dom';
import StudyMode from '@/constants/enums/studyMode';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { map } from 'lodash';

export default function Levels() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const modes = useMemo(() => {
        return [
            {
                id: StudyMode.Flashcards,
                label: t('Fiszki'),
            },
            {
                id: StudyMode.Writing,
                label: t('Pisanie'),
            },
            {
                id: StudyMode.Speaking,
                label: t('Mówienie'),
            },
        ];
    }, [t]);

    return (
        <Stack gap={2}>
            <Typography
                variant="h3"
                className="text-center font-medium"
            >
                {t('Wybierz tryb nauki')}
            </Typography>
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(modes, (mode) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 2 }}
                        key={mode.id}
                    >
                        <Card elevation={3}>
                            <CardActionArea
                                onClick={() => navigate('/learning-mode')}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        className="text-center font-medium"
                                    >
                                        {mode.label}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
