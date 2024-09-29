import { Category } from '@/types/database';
import { RxJsonSchema } from 'rxdb';

export default {
    title: 'categories',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            maxLength: 50,
        },
        name: {
            type: 'string',
            maxLength: 100,
        },
        languageId: {
            type: 'string',
            maxLength: 50,
        },
    },
    required: ['id', 'name'],
} satisfies RxJsonSchema<Category>;
