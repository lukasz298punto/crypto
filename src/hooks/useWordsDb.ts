/* eslint-disable lodash/prefer-lodash-method */
import { useCallback, useEffect, useState } from 'react';
import useDatabaseContext from './useDatabaseContext';
import { MangoQuerySelector } from 'rxdb';
import { Word } from '@/types/database';
import { Maybe } from '@/types/common';
import isNil from 'lodash/isNil';
import map from 'lodash/map';

interface Props {
    categoryId?: Maybe<string>;
    levelId?: Maybe<string>;
    languageId?: Maybe<string>;
    usedWords?: string[];
    isKnown?: Maybe<boolean>;
}

export default function useWordsDb({
    categoryId,
    levelId,
    languageId,
    usedWords,
    isKnown,
}: Readonly<Props>) {
    const [words, setWords] = useState<Word[]>([]);
    const db = useDatabaseContext();

    useEffect(() => {
        const selector: MangoQuerySelector<Word> = {};

        if (!isNil(categoryId)) {
            selector.categoryId = { $eq: categoryId };
        }

        if (!isNil(levelId)) {
            selector.levelId = { $eq: levelId };
        }

        if (!isNil(languageId)) {
            selector.languageId = { $eq: languageId };
        }

        if (!isNil(usedWords)) {
            selector.id = { $nin: usedWords };
        }

        if (!isNil(isKnown)) {
            selector.isKnown = { $eq: isKnown };
        }

        console.log(
            {
                categoryId,
                levelId,
                languageId,
                usedWords,
                isKnown,
            },
            selector
        );

        const subscription = db?.words
            ?.find({
                selector,
            })
            .$.subscribe((wordsDocs) => {
                setWords(
                    map(wordsDocs, (settings) => settings.toJSON() as Word)
                );
            });

        return () => subscription?.unsubscribe();
    }, [categoryId, db, isKnown, languageId, levelId, usedWords]);

    const incrementCorrect = useCallback(
        async (wordId: string) => {
            if (!db) return;

            const wordDoc = await db.words
                .findOne({ selector: { id: wordId } })
                .exec();

            if (wordDoc) {
                await wordDoc.update({
                    $inc: {
                        correct: 1,
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
    };
}
