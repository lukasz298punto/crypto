import { Settings } from '@/types/database';
import { RxJsonSchema } from 'rxdb';

export const settingsSchema: RxJsonSchema<Settings> = {
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
};
