import useSettingsDb from '@/hooks/useSettingsDb';
import { Navigate } from 'react-router-dom';

export default function Home() {
    const { language, level } = useSettingsDb();

    if (!language) {
        return <Navigate to="/languages" />;
    }

    if (!level) {
        return <Navigate to="/levels" />;
    }

    return <Navigate to="/categories" />;
}
