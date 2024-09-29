import useKeyCodeName from '@/hooks/useKeyCodeName';
import { Button, ButtonProps } from '@mui/material';
import { memo, MouseEvent, useEffect } from 'react';
import KeyCode from '@/constants/enums/keyCode';
import { useKeyPress } from 'react-use';

interface KeyPressButtonProps extends ButtonProps {
    keyCode: KeyCode;
}

function KeyPressButton({
    keyCode,
    onClick,
    children,
    disabled,
    ...props
}: Readonly<KeyPressButtonProps>) {
    const [isKeyPress, event] = useKeyPress(keyCode);
    const { findLabelById } = useKeyCodeName();

    useEffect(() => {
        if (isKeyPress && !disabled) {
            event?.preventDefault();
            event?.stopPropagation();
            onClick?.(
                {} as MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isKeyPress]);

    return (
        <Button
            {...props}
            disabled={disabled}
            onClick={onClick}
        >
            {children} ({findLabelById(keyCode)})
        </Button>
    );
}

export default memo(KeyPressButton);
