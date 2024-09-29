import themeModeContext from '@/constants/context/themeModeContext';
import { useContext } from 'react';

export default function useThemeModeContext() {
    const context = useContext(themeModeContext);

    if (!context) {
        throw new Error(
            'useThemeModeContext should be used within themeProvider'
        );
    }

    return context;
}
