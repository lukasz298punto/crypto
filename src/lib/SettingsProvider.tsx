/* eslint-disable lodash/prefer-lodash-method */
import SettingsContext from '@/constants/context/settingsContext';
import { PropsWithChildren, useEffect, useState } from 'react';
import useDatabaseContext from '@/hooks/useDatabaseContext';
import { Settings } from '@/types/database';
import map from 'lodash/map';

function SettingsProvider({ children }: Readonly<PropsWithChildren>) {
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

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsProvider;
