import { createContext, Dispatch, SetStateAction } from 'react';
import ThemeMode from '@/constants/enums/themeMode';

export interface ThemeModeContext {
    mode: ThemeMode | undefined;
    setMode: Dispatch<SetStateAction<ThemeMode | undefined>>;
}

export default createContext<ThemeModeContext | null>(null);
