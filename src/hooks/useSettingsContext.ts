import settingsContext from '@/constants/context/settingsContext';
import { useContext } from 'react';

export default function useSettingsContext() {
    const context = useContext(settingsContext);

    if (!context) {
        throw new Error(
            'useSettingsContext should be used within settingsProvider'
        );
    }

    return context;
}
