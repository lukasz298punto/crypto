import databaseContext from '@/constants/context/databaseContext';
import { useContext } from 'react';

export default function useDatabaseContext() {
    const context = useContext(databaseContext);

    if (!context) {
        throw new Error(
            'useDatabaseContext should be used within databaseProvider'
        );
    }

    return context;
}
