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
import useWordsDb from '@/hooks/useWordsDb';
import { useMemo } from 'react';
import { size } from 'lodash';
import map from 'lodash/map';

function LevelCard({ id, label }: { id: Level; label: string }) {
    const navigate = useNavigate();
    const { updateSettings, getLanguage } = useSettingsDb();
    const { words } = useWordsDb({
        languageId: getLanguage(),
        levelId: id,
    });
    const { words: knownWords } = useWordsDb({
        languageId: getLanguage(),
        levelId: id,
        isKnown: true,
    });

    return (
        <Card>
            <CardActionArea
                onClick={() =>
                    updateSettings({
                        settings: {
                            key: SettingsDbKey.Level,
                            value: id,
                        },
                        onSuccess: () => navigate('/categories'),
                    })
                }
            >
                <CardContent>
                    <Typography
                        variant="h5"
                        className="mb-1 text-center font-medium"
                    >
                        {label}
                    </Typography>
                    <Progress
                        total={size(words)}
                        value={size(knownWords)}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default function Levels() {
    const { t } = useTranslation();

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
                        <LevelCard
                            id={level.id}
                            label={level.label}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
