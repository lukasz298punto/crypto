import { Category, Settings, Word } from '@/types/database';
import { RxCollection, RxDatabase } from 'rxdb';
import { createContext } from 'react';

export interface DatabaseCollections {
    settings: RxCollection<Settings>;
    categories: RxCollection<Category>;
    words: RxCollection<Word>;
}

export type Context = RxDatabase<DatabaseCollections> | null;

export default createContext<Context | null>(null);
