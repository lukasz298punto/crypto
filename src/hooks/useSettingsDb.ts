/* eslint-disable lodash/prefer-lodash-method */
import SettingsDbKey from '@/constants/enums/settingsDbKey';
import useDatabaseContext from './useDatabaseContext';
import useSettingsContext from './useSettingsContext';
import { useCallback, useMemo } from 'react';
import { Settings } from '@/types/database';
import find from 'lodash/find';

interface UpdateSettingsArgs {
    settings: Settings;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

export default function useSettingsDb() {
    const settings = useSettingsContext();
    const db = useDatabaseContext();

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

    const language = useMemo(
        () => find(settings, { key: SettingsDbKey.Language })?.value,
        [settings]
    );

    const level = useMemo(
        () => find(settings, { key: SettingsDbKey.Level })?.value,
        [settings]
    );

    const nativeLanguage = useMemo(
        () => find(settings, { key: SettingsDbKey.NativeLanguage })?.value,
        [settings]
    );

    return {
        settings,
        updateSettings,
        language,
        level,
        nativeLanguage,
    };
}
