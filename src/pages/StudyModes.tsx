import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import StudyMode from '@/constants/enums/studyMode';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import map from 'lodash/map';

export default function StudyModes() {
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
            <Divider />
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(modes, (mode) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 3 }}
                        key={mode.id}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() => navigate(`${mode.id}`)}
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
