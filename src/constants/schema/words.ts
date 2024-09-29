import { Word } from '@/types/database';
import { RxJsonSchema } from 'rxdb';

export default {
    title: 'words',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 50,
        },
        word: {
            type: 'string',
            maxLength: 100,
        },
        translation: {
            type: 'string',
            maxLength: 100,
        },
        categoryId: {
            type: 'string',
            maxLength: 50,
        },
        levelId: {
            type: 'string',
            maxLength: 50,
        },
        languageId: {
            type: 'string',
            maxLength: 50,
        },
        nativeLanguageId: {
            type: 'string',
            maxLength: 50,
        },
        correct: {
            type: 'number',
            minimum: 0,
            default: 0,
        },
        incorrect: {
            type: 'number',
            minimum: 0,
            default: 0,
        },
        isKnown: {
            type: 'boolean',
            default: false,
        },
    },
    required: [
        'id',
        'word',
        'translation',
        'categoryId',
        'levelId',
        'languageId',
        'nativeLanguageId',
    ],
} satisfies RxJsonSchema<Word>;
