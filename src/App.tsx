import DatabaseProvider from '@/lib/DatabaseProvider';
import SettingsProvider from '@/lib/SettingsProvider';
import ThemeProvider from '@/lib/ThemeProvider';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Router from '@/lib/Router';
import '@/locales/config';

export default function App() {
    return (
        <DatabaseProvider>
            <SettingsProvider>
                <ThemeProvider>
                    <CssBaseline />
                    <Router />
                </ThemeProvider>
            </SettingsProvider>
        </DatabaseProvider>
    );
}
