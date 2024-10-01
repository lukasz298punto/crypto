import { Button, ButtonProps, Typography } from '@mui/material';
import useKeyCodeName from '@/hooks/useKeyCodeName';
import { memo, MouseEvent, useEffect } from 'react';
import KeyCode from '@/constants/enums/keyCode';
import { useKeyPress } from 'react-use';
import clsx from 'clsx';

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
            className={clsx('flex align-baseline', props.className)}
        >
            {children}
            <Typography
                variant="caption"
                className="ml-0.5 hidden md:inline"
            >
                ({findLabelById(keyCode)})
            </Typography>
        </Button>
    );
}

export default memo(KeyPressButton);
