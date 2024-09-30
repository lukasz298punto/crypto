import KeyCode from '@/constants/enums/keyCode';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import find from 'lodash/find';

export default function useKeyCodeName() {
    const { t } = useTranslation();

    const values = useMemo(() => {
        return [
            { id: KeyCode.S, label: t('S') },
            { id: KeyCode.R, label: t('R') },
            { id: KeyCode.Enter, label: t('Enter') },
            { id: KeyCode.Space, label: t('Spacja') },
            { id: KeyCode.One, label: '1' },
            { id: KeyCode.Two, label: '2' },
            { id: KeyCode.Three, label: '3' },
        ];
    }, [t]);

    const findLabelById = useCallback(
        (id: KeyCode) => {
            const found = find(values, { id });

            return found ? found.label : '';
        },
        [values]
    );

    return { values, findLabelById };
}
