/* eslint-disable lodash/prefer-lodash-method */
import DatabaseContext, {
    Context,
    DatabaseCollections,
} from '@/constants/context/databaseContext';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration-schema';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import categoriesSchema from '@/constants/schema/categories';
import SettingsDbKey from '@/constants/enums/settingsDbKey';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import settingsSchema from '@/constants/schema/settings';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { addRxPlugin, createRxDatabase } from 'rxdb';
import wordsSchema from '@/constants/schema/words';
import Category from '@/constants/enums/category';
import Language from '@/constants/enums/language';
import { CircularProgress } from '@mui/material';
import Level from '@/constants/enums/level';
import { v4 as uuidv4 } from 'uuid';

addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBMigrationPlugin);

function DatabaseProvider({ children }: Readonly<PropsWithChildren>) {
    const [database, setDatabase] = useState<Context>(null);

    const initDatabase = useCallback(async () => {
        const db = await createRxDatabase<DatabaseCollections>({
            name: 'master_of_lang',
            storage: getRxStorageDexie(),
            ignoreDuplicate: true,
        });

        await db.addCollections({
            settings: {
                schema: settingsSchema,
            },
            words: { schema: wordsSchema },
            categories: { schema: categoriesSchema },
        });

        const existingDoc = await db.settings
            .findOne(SettingsDbKey.NativeLanguage)
            .exec();

        if (!existingDoc) {
            await db.settings.insert({
                key: SettingsDbKey.NativeLanguage,
                value: Language.Pl,
            });
        }

        const existingCategories = await db.categories.find().exec();
        if (existingCategories.length === 0) {
            await db.categories.bulkInsert([
                { id: Category.Verbs, name: 'Verbs', languageId: Language.En },
                { id: Category.Nouns, name: 'Nouns', languageId: Language.En },
                {
                    id: Category.Adjectives,
                    name: 'Adjectives',
                    languageId: Language.En,
                },
                {
                    id: Category.Adverbs,
                    name: 'Adverbs',
                    languageId: Language.En,
                },
                {
                    id: Category.Pronouns,
                    name: 'Pronouns',
                    languageId: Language.En,
                },
                {
                    id: Category.Prepositions,
                    name: 'Prepositions',
                    languageId: Language.En,
                },
                {
                    id: Category.Conjunctions,
                    name: 'Conjunctions',
                    languageId: Language.En,
                },
                {
                    id: Category.Articles,
                    name: 'Articles',
                    languageId: Language.En,
                },
                {
                    id: Category.Interjections,
                    name: 'Interjections',
                    languageId: Language.En,
                },
                {
                    id: Category.PhrasalVerbs,
                    name: 'Phrasal Verbs',
                    languageId: Language.En,
                },
                {
                    id: Category.Idioms,
                    name: 'Idioms',
                    languageId: Language.En,
                },
                {
                    id: Category.Synonyms,
                    name: 'Synonyms',
                    languageId: Language.En,
                },
                {
                    id: Category.Antonyms,
                    name: 'Antonyms',
                    languageId: Language.En,
                },
                {
                    id: Category.Phrases,
                    name: 'Phrases',
                    languageId: Language.En,
                },
                {
                    id: Category.Sentences,
                    name: 'Sentences',
                    languageId: Language.En,
                },
            ]);
        }

        const existingWords = await db.words.find().exec();
        if (existingWords.length === 0) {
            await db.words.bulkInsert([
                {
                    id: uuidv4(),
                    word: 'piękny',
                    translation: 'beautiful',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'szybki',
                    translation: 'fast',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'duży',
                    translation: 'big',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'mały',
                    translation: 'small',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'mądry',
                    translation: 'smart',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'leniwy',
                    translation: 'lazy',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'silny',
                    translation: 'strong',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'słaby',
                    translation: 'weak',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'młody',
                    translation: 'young',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
                {
                    id: uuidv4(),
                    word: 'stary',
                    translation: 'old',
                    categoryId: Category.Adjectives,
                    levelId: Level.Beginner,
                    languageId: Language.En,
                    nativeLanguageId: Language.Pl,
                },
            ]);
        }

        setDatabase(db);
    }, []);

    useEffect(() => {
        if (database === null) {
            initDatabase();
        }
    }, [initDatabase, database]);

    console.log(database, 'database');

    return (
        <DatabaseContext.Provider value={database}>
            {database ? children : <CircularProgress />}
        </DatabaseContext.Provider>
    );
}

export default DatabaseProvider;
