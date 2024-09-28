import { LinearProgress, Stack, Typography } from '@mui/material';

export default function Progress() {
    return (
        <Stack
            gap={1}
            alignItems="center"
            direction="row"
        >
            <LinearProgress
                className="flex-1"
                variant="determinate"
                value={50}
            />
            <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
            >{`1/100`}</Typography>
        </Stack>
    );
}
