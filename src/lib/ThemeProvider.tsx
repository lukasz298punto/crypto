import { createTheme, ThemeProvider as Provider } from '@mui/material/styles';
import ThemeModeContext from '@/constants/context/themeModeContext';
import { PropsWithChildren, useEffect, useMemo } from 'react';
import ThemeMode from '@/constants/enums/themeMode';
import { useLocalStorage } from 'react-use';

function ThemeProvider({ children }: Readonly<PropsWithChildren>) {
    const [mode, setMode] = useLocalStorage<ThemeMode>(
        'themeMode',
        ThemeMode.Light
    );

    useEffect(() => {
        const htmlElement = document.documentElement;

        if (mode === ThemeMode.Dark) {
            htmlElement.style.colorScheme = 'dark';
        } else {
            htmlElement.style.colorScheme = 'light';
        }
    }, [mode]);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    const value = useMemo(() => ({ mode, setMode }), [mode, setMode]);

    console.log(theme, 'theme');

    return (
        <ThemeModeContext.Provider value={value}>
            <Provider theme={theme}>{children}</Provider>
        </ThemeModeContext.Provider>
    );
}
export default ThemeProvider;
