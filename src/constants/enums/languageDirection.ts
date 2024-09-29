import Language from '@/constants/enums/language';

enum LanguageDirection {
    PlToEn = `${Language.Pl}-to-${Language.En}`,
    EnToPl = `${Language.En}-to-${Language.Pl}`,
}

export default LanguageDirection;
