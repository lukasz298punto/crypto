import DatabaseContext, { Context } from '@/constants/context/databaseContext';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { RxDBMigrationPlugin } from 'rxdb/plugins/migration-schema';
import { addRxPlugin, createRxDatabase, RxCollection } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { settingsSchema } from '@/constants/schema/settings';
import SettingsDbKey from '@/constants/enums/settingsDbKey';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { RxDBUpdatePlugin } from 'rxdb/plugins/update';
import { Settings } from '@/types/database';

addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBMigrationPlugin);

interface DatabaseCollections {
    settings: RxCollection<Settings>;
}

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
        });

        const existingDoc = await db.settings
            .findOne(SettingsDbKey.NativeLanguage)
            .exec();

        if (!existingDoc) {
            await db.settings.insert({
                key: SettingsDbKey.NativeLanguage,
                value: 'polish',
            });
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
            {children}
        </DatabaseContext.Provider>
    );
}

export default DatabaseProvider;
