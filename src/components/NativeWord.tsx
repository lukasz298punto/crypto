import { Typography, useMediaQuery, useTheme } from '@mui/material';

function NativeWord({ word }: Readonly<{ word: string }>) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Typography
            variant={isDesktop ? 'h2' : 'h3'}
            sx={{ wordBreak: 'break-all' }}
            className="font-medium"
        >
            {word}
        </Typography>
    );
}
export default NativeWord;
