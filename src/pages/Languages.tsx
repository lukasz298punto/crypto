import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import availableLanguages from '@/constants/availableLanguages';
import SettingsDbKey from '@/constants/enums/settingsDbKey';
import useSettingsDb from '@/hooks/useSettingsDb';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import map from 'lodash/map';

export default function Languages() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { updateSettings } = useSettingsDb();

    return (
        <Stack gap={2}>
            <Typography
                variant="h3"
                className="text-center font-medium"
            >
                {t('Wybierz język')}
            </Typography>
            <Divider />
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(availableLanguages, (tile) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 3 }}
                        key={tile.id}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() =>
                                    updateSettings({
                                        settings: {
                                            key: SettingsDbKey.Language,
                                            value: tile.id,
                                        },
                                        onSuccess: () => navigate('/levels'),
                                    })
                                }
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        className="text-center font-medium"
                                    >
                                        {tile.name}
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
