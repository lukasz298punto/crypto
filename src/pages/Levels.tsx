import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import SettingsDbKey from '@/constants/enums/settingsDbKey';
import useSettingsDb from '@/hooks/useSettingsDb';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Progress from '@/components/Progress';
import Level from '@/constants/enums/level';
import { useMemo } from 'react';
import map from 'lodash/map';

export default function Levels() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { updateSettings } = useSettingsDb();

    const levels = useMemo(() => {
        return [
            {
                id: Level.Beginner,
                label: t('Początkujący'),
            },
            {
                id: Level.Intermediate,
                label: t('Średniozaawansowany'),
            },
            {
                id: Level.Advanced,
                label: t('Zaawansowany'),
            },
        ];
    }, [t]);

    return (
        <Stack gap={2}>
            <Typography
                variant="h3"
                className="text-center font-medium"
            >
                {t('Wybierz poziom nauki')}
            </Typography>
            <Divider />
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(levels, (level) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 3 }}
                        key={level.id}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() =>
                                    updateSettings({
                                        settings: {
                                            key: SettingsDbKey.Level,
                                            value: level.id,
                                        },
                                        onSuccess: () =>
                                            navigate('/categories'),
                                    })
                                }
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        className="mb-1 text-center font-medium"
                                    >
                                        {level.label}
                                    </Typography>
                                    <Progress />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
