/* eslint-disable lodash/prefer-lodash-method */
import { useCallback, useEffect, useState } from 'react';
import useDatabaseContext from './useDatabaseContext';
import { MangoQuerySelector } from 'rxdb';
import { Word } from '@/types/database';
import map from 'lodash/map';

interface Props {
    selector?: MangoQuerySelector<Word>;
}

export default function useWordsDb({ selector }: Readonly<Props>) {
    const [words, setWords] = useState<Word[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const db = useDatabaseContext();

    useEffect(() => {
        setIsLoading(true);
        const subscription = db?.words
            ?.find({
                selector,
            })
            .$.subscribe(
                (wordsDocs) => {
                    setWords(map(wordsDocs, (doc) => doc.toJSON() as Word));
                    setIsLoading(false);
                },
                () => {
                    setIsLoading(false);
                }
            );

        return () => subscription?.unsubscribe();
    }, [db, selector]);

    const incrementCorrect = useCallback(
        async (wordId: string) => {
            if (!db) return;

            const wordDoc = await db.words
                .findOne({ selector: { id: wordId } })
                .exec();

            if (wordDoc) {
                await wordDoc.update({
                    $set: {
                        correct: wordDoc.correct + 1,
                        lastCorrectHit: new Date().toISOString(),
                    },
                });
            }
        },
        [db]
    );

    const incrementIncorrect = useCallback(
        async (wordId: string) => {
            if (!db) return;

            const wordDoc = await db.words
                .findOne({ selector: { id: wordId } })
                .exec();

            if (wordDoc) {
                await wordDoc.update({
                    $inc: {
                        incorrect: 1,
                    },
                });
            }
        },
        [db]
    );

    const setWordAsKnown = useCallback(
        async (wordId: string) => {
            const wordDoc = await db?.words
                .findOne({ selector: { id: wordId } })
                .exec();

            if (wordDoc) {
                await wordDoc.update({
                    $set: {
                        isKnown: true,
                    },
                });
            }
        },
        [db]
    );

    const findWordById = useCallback(
        async (wordId: string) => {
            if (!db) return null;

            const wordDoc = await db.words
                .findOne({ selector: { id: wordId } })
                .exec();

            return wordDoc ? (wordDoc.toJSON() as Word) : null;
        },
        [db]
    );

    return {
        words,
        incrementCorrect,
        setWordAsKnown,
        incrementIncorrect,
        findWordById,
        isLoading,
    };
}
