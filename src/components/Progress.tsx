import { LinearProgress, Stack, Typography } from '@mui/material';
import { Maybe } from '@/types/common';

interface Progress {
    total: Maybe<number>;
    value: Maybe<number>;
}

export default function Progress({ total, value }: Readonly<Progress>) {
    const safeTotal = total ?? 0;
    const safeValue = value ?? 0;

    const progressValue = safeTotal > 0 ? (safeValue / safeTotal) * 100 : 0;

    return (
        <Stack
            gap={1}
            alignItems="center"
            direction="row"
        >
            <LinearProgress
                className="flex-1"
                variant="determinate"
                value={progressValue}
                color={progressValue === 100 ? 'success' : 'warning'}
            />
            <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
            >{`${value || 0}/${total || 0}`}</Typography>
        </Stack>
    );
}
