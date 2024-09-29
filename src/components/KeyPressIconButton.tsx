import { IconButton, IconButtonProps } from '@mui/material';
import { memo, MouseEvent, useEffect } from 'react';
import KeyCode from '@/constants/enums/keyCode';
import { useKeyPress } from 'react-use';

interface KeyPressIconButtonProps extends IconButtonProps {
    keyCode: KeyCode;
}

function KeyPressIconButton({
    keyCode,
    onClick,
    ...props
}: Readonly<KeyPressIconButtonProps>) {
    const [isKeyPress] = useKeyPress(keyCode);

    useEffect(() => {
        if (isKeyPress) {
            onClick?.(
                {} as MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isKeyPress]);

    return (
        <IconButton
            {...props}
            onClick={onClick}
        />
    );
}

export default memo(KeyPressIconButton);
