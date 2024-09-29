import { Settings } from '@/types/database';
import { createContext } from 'react';

export type Context = Settings[];

export default createContext<Context | null>([]);
