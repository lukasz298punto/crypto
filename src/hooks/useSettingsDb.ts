/* eslint-disable lodash/prefer-lodash-method */
import { useCallback, useEffect, useState } from 'react';
import useDatabaseContext from './useDatabaseContext';
import { Settings } from '@/types/database';
import map from 'lodash/map';

interface UpdateSettingsArgs {
    settings: Settings;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

export default function useSettingsDb() {
    const [settings, setSettings] = useState<Settings[]>([]);
    const db = useDatabaseContext();

    useEffect(() => {
        const subscription = db?.settings
            ?.find()
            .$.subscribe((settingsDocs) => {
                setSettings(
                    map(
                        settingsDocs,
                        (settings) => settings.toJSON() as Settings
                    )
                );
            });

        return () => subscription?.unsubscribe();
    }, [db]);

    const updateSettings = useCallback(
        async ({ settings, onSuccess, onError }: UpdateSettingsArgs) => {
            try {
                const doc = await db?.settings.findOne(settings.key).exec();

                if (doc) {
                    doc.update({
                        $set: {
                            value: settings.value,
                        },
                    })
                        .then(() => {
                            if (onSuccess) onSuccess();
                        })
                        .catch((error) => {
                            if (onError) onError(error);
                        });
                } else {
                    db?.settings
                        .insert({
                            key: settings.key,
                            value: settings.value,
                        })
                        .then(() => {
                            if (onSuccess) onSuccess();
                        })
                        .catch((error) => {
                            if (onError) onError(error);
                        });
                }
            } catch (error) {
                if (onError) onError(error as Error);
            }
        },
        [db]
    );

    return { settings, updateSettings };
}
