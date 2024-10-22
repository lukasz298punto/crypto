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
import useDatabaseContext from '@/hooks/useDatabaseContext';
import { useEffect, useMemo, useState } from 'react';
import Category from '@/constants/enums/category';
import useSettingsDb from '@/hooks/useSettingsDb';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Progress from '@/components/Progress';
import map from 'lodash/map';

function CategoryCard({ id, label }: { id: Category; label: string }) {
    const navigate = useNavigate();
    const { language, level } = useSettingsDb();
    const db = useDatabaseContext();
    const [total, setTotal] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        db?.words
            .find({
                selector: {
                    languageId: language as string,
                    levelId: level as string,
                    categoryId: id,
                },
            })
            .exec()
            .then((res) => setTotal(res.length));

        db?.words
            .find({
                selector: {
                    languageId: language as string,
                    levelId: level as string,
                    isKnown: true,
                    categoryId: id,
                },
            })
            .exec()
            .then((res) => setValue(res.length));
    }, [db, id, language, level]);

    return (
        <Card>
            <CardActionArea onClick={() => navigate(`/${id}`)}>
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

export default function Categories() {
    const { t } = useTranslation();

    const categories = useMemo(() => {
        return [
            { id: Category.Verbs, label: t('Czasowniki') },
            { id: Category.Nouns, label: t('Rzeczowniki') },
            { id: Category.Adjectives, label: t('Przymiotniki') },
            { id: Category.Adverbs, label: t('Przysłówki') },
            { id: Category.Pronouns, label: t('Zaimki') },
            { id: Category.Prepositions, label: t('Przyimki') },
            { id: Category.Conjunctions, label: t('Spójniki') },
            { id: Category.PhrasalVerbs, label: t('Phrasal Verbs') },
            { id: Category.Idioms, label: t('Idiomy') },
            { id: Category.Phrases, label: t('Zwroty') },
            { id: Category.Sentences, label: t('Zdania') },
            { id: Category.PastSimple, label: t('Past Simple') },
            { id: Category.MostPopular, label: t('Najpopularniejsze') },
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
                        <CategoryCard
                            id={category.id}
                            label={category.label}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
