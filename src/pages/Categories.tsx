import {
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Grid2 as Grid,
    Stack,
    Typography,
} from '@mui/material';
import Category from '@/constants/enums/category';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Progress from '@/components/Progress';
import { useMemo } from 'react';
import map from 'lodash/map';

export default function Categories() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const categories = useMemo(() => {
        return [
            { id: Category.Verbs, label: t('Czasowniki') },
            { id: Category.Nouns, label: t('Rzeczowniki') },
            { id: Category.Adjectives, label: t('Przymiotniki') },
            { id: Category.Adverbs, label: t('Przysłówki') },
            { id: Category.Pronouns, label: t('Zaimki') },
            { id: Category.Prepositions, label: t('Przyimki') },
            { id: Category.Conjunctions, label: t('Spójniki') },
            { id: Category.Articles, label: t('Rodzajniki') },
            { id: Category.Interjections, label: t('Wykrzykniki') },
            { id: Category.PhrasalVerbs, label: t('Phrasal Verbs') },
            { id: Category.Idioms, label: t('Idiomy') },
            { id: Category.Synonyms, label: t('Synonimy') },
            { id: Category.Antonyms, label: t('Antonimy') },
            { id: Category.Phrases, label: t('Zwroty') },
            { id: Category.Sentences, label: t('Zdania') },
        ];
    }, [t]);

    return (
        <Stack gap={2}>
            <Typography
                variant="h3"
                className="text-center font-medium"
            >
                {t('Wybierz kategorię')}
            </Typography>
            <Divider />
            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                {map(categories, (category) => (
                    <Grid
                        size={{ xs: 12, md: 4, lg: 3 }}
                        key={category.id}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() => navigate(`/${category.id}`)}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        className="mb-1 text-center font-medium"
                                    >
                                        {category.label}
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
