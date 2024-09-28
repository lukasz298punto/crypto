import Language from '@/constants/enums/language';
import { initReactI18next } from 'react-i18next';
import i18n, { Resource } from 'i18next';
import en from './en.json';
import pl from './pl.json';

const resources: Record<Language, Resource> = {
    en: {
        translation: en,
    },
    pl: {
        translation: pl,
    },
};

i18n.use(initReactI18next).init({
    resources,
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
    lng: 'pl',
    returnEmptyString: false,
});

export default i18n;
