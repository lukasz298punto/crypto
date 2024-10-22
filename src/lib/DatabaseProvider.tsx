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
import CentralLoading from '@/components/CentralLoading';
import settingsSchema from '@/constants/schema/settings';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { addRxPlugin, createRxDatabase } from 'rxdb';
import wordsSchema from '@/constants/schema/words';
import Category from '@/constants/enums/category';
import Language from '@/constants/enums/language';
import { Word } from '@/types/database';
import flatMap from 'lodash/flatMap';
import modules from '@/data/modules';
import forEach from 'lodash/forEach';
import { v4 as uuidv4 } from 'uuid';
import find from 'lodash/find';
import map from 'lodash/map';

addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBMigrationPlugin);

const migrations = {
    words: {
        1: (oldDoc: typeof wordsSchema.properties) => {
            const newDoc = {
                ...oldDoc,
                exampleUsed: '',
                exampleUsedTranslation: '',
            };
            return newDoc;
        },
        2: (oldDoc: typeof wordsSchema.properties) => {
            const newDoc = {
                ...oldDoc,
                wordDesc: '',
            };
            return newDoc;
        },
        3: (oldDoc: typeof wordsSchema.properties) => {
            const newDoc = {
                ...oldDoc,
                lastCorrectHit: null,
            };
            return newDoc;
        },
    },
};

const activeVersion: string = '2';

export default function DatabaseProvider({
    children,
}: Readonly<PropsWithChildren>) {
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
            words: {
                schema: wordsSchema,
                migrationStrategies: migrations.words,
            },
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
                    id: Category.Phrases,
                    name: 'Phrases',
                    languageId: Language.En,
                },
                {
                    id: Category.Sentences,
                    name: 'Sentences',
                    languageId: Language.En,
                },
                {
                    id: Category.PastSimple,
                    name: 'PastSimple',
                    languageId: Language.En,
                },
                {
                    id: Category.MostPopular,
                    name: 'MostPopular',
                    languageId: Language.En,
                },
            ]);
        }

        const wordVersion = await db.settings
            .findOne(SettingsDbKey.WordsVersion)
            .exec();

        const dbWordVersion = wordVersion?.toJSON()?.value;

        if (!dbWordVersion) {
            forEach(modules, ([category, level, content]) => {
                db.words.bulkInsert(
                    map(
                        flatMap(content, 'words') as Word[],
                        (verb) =>
                            ({
                                id: uuidv4(),
                                exampleUsed: verb.exampleUsed || '',
                                exampleUsedTranslation:
                                    verb.exampleUsedTranslation || '',
                                wordDesc: verb.wordDesc || '',
                                word: verb.word,
                                translation: verb.translation,
                                lastCorrectHit: null,
                                categoryId: category,
                                levelId: level,
                                languageId: Language.En,
                                nativeLanguageId: Language.Pl,
                                correct: 0,
                                incorrect: 0,
                                isKnown: false,
                            }) satisfies Word
                    )
                );
            });
            await db.settings.insert({
                key: SettingsDbKey.WordsVersion,
                value: activeVersion,
            });
        }

        console.log(dbWordVersion, 'dbWordVersion');

        if (dbWordVersion && dbWordVersion !== activeVersion) {
            forEach(modules, ([category, level, content]) => {
                db.words.bulkInsert(
                    map(
                        find(content, { version: activeVersion })
                            ?.words as Word[],
                        (verb) =>
                            ({
                                id: uuidv4(),
                                exampleUsed: verb.exampleUsed || '',
                                exampleUsedTranslation:
                                    verb.exampleUsedTranslation || '',
                                wordDesc: verb.wordDesc || '',
                                word: verb.word,
                                translation: verb.translation,
                                lastCorrectHit: null,
                                categoryId: category,
                                levelId: level,
                                languageId: Language.En,
                                nativeLanguageId: Language.Pl,
                                correct: 0,
                                incorrect: 0,
                                isKnown: false,
                            }) satisfies Word
                    )
                );
            });

            const doc = await db?.settings
                .findOne(SettingsDbKey.WordsVersion)
                .exec();

            await doc?.update({
                $set: {
                    value: activeVersion,
                },
            });

            // await db.settings.insert({
            //     key: SettingsDbKey.WordsVersion,
            //     value: activeVersion,
            // });
        }

        // const existingWords = await db.words.find().exec();
        // if (existingWords.length === 0) {
        //     await db.settings.insert({
        //         key: SettingsDbKey.WordsVersion,
        //         value: activeVersion,
        //     });
        // forEach(modules, ([category, level, content]) => {
        //     db.words.bulkInsert(
        //         map(
        //             content as Word[],
        //             (verb) =>
        //                 ({
        //                     id: uuidv4(),
        //                     exampleUsed: verb.exampleUsed || '',
        //                     exampleUsedTranslation:
        //                         verb.exampleUsedTranslation || '',
        //                     wordDesc: verb.wordDesc || '',
        //                     word: verb.word,
        //                     translation: verb.translation,
        //                     lastCorrectHit: null,
        //                     categoryId: category,
        //                     levelId: level,
        //                     languageId: Language.En,
        //                     nativeLanguageId: Language.Pl,
        //                     correct: 0,
        //                     incorrect: 0,
        //                     isKnown: false,
        //                 }) satisfies Word
        //         )
        //     );
        // });
        // }

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
            {database ? children : <CentralLoading />}
        </DatabaseContext.Provider>
    );
}
