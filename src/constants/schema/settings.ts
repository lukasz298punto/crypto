import { Settings } from '@/types/database';
import { RxJsonSchema } from 'rxdb';

export default {
    title: 'settings',
    version: 0,
    primaryKey: 'key',
    type: 'object',
    properties: {
        key: {
            type: 'string',
            maxLength: 20,
        },
        value: {
            type: ['null', 'string'],
        },
    },
    required: ['key', 'value'],
} satisfies RxJsonSchema<Settings>;
