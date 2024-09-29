/* eslint-disable lodash/prefer-lodash-method */
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
import useDatabaseContext from '@/hooks/useDatabaseContext';
import { useEffect, useMemo, useState } from 'react';
import useSettingsDb from '@/hooks/useSettingsDb';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Progress from '@/components/Progress';
import Level from '@/constants/enums/level';
import map from 'lodash/map';

function LevelCard({ id, label }: { id: Level; label: string }) {
    const navigate = useNavigate();
    const { updateSettings, language } = useSettingsDb();
    const db = useDatabaseContext();
    const [total, setTotal] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        db?.words
            .find({
                selector: {
                    languageId: language as string,
                    levelId: id,
                },
            })
            .exec()
            .then((res) => setTotal(res.length));

        db?.words
            .find({
                selector: {
                    languageId: language as string,
                    levelId: id,
                    isKnown: true,
                },
            })
            .exec()
            .then((res) => setValue(res.length));
    }, [db, id, language]);

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
                        total={total}
                        value={value}
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
