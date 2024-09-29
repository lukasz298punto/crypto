import { RxCollection, RxDatabase } from 'rxdb';
import { Settings } from '@/types/database';
import { createContext } from 'react';

interface DatabaseCollections {
    settings: RxCollection<Settings>;
}

export type Context = RxDatabase<DatabaseCollections> | null;

export default createContext<Context | null>(null);
