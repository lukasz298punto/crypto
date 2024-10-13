export type Settings = {
    key: string;
    value: string | null;
};

export interface Word {
    id: string;
    word: string;
    exampleUsed?: string;
    wordDesc?: string;
    translation: string;
    exampleUsedTranslation: string;
    categoryId: string;
    levelId: string;
    languageId: string;
    nativeLanguageId: string;
    lastCorrectHit: string | null;
    correct: number;
    incorrect: number;
    isKnown: boolean;
}

export interface Category {
    id: string;
    name: string;
    languageId: string;
}
