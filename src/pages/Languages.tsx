import {
    Card,
    CardActionArea,
    CardContent,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import availableLanguages from '@/constants/availableLanguages';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import map from 'lodash/map';

export default function Languages() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Stack gap={2}>
            <Typography
                variant="h3"
                className="text-center font-medium"
            >
                {t('Wybierz język')}
            </Typography>
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(availableLanguages, (tile) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 2 }}
                        key={tile.id}
                    >
                        <Card elevation={3}>
                            <CardActionArea
                                onClick={() => navigate('/study-modes')}
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
