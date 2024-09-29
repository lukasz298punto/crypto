export type Settings = {
    key: string;
    value: string | null;
};

export interface Word {
    id: string;
    word: string;
    translation: string;
    categoryId: string;
    levelId: string;
    languageId: string;
    nativeLanguageId: string;
    correct: number;
    incorrect: number;
    isKnown: boolean;
}

export interface Category {
    id: string;
    name: string;
    languageId: string;
}
