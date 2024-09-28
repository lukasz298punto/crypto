import { Badge, IconButton, Stack, Typography } from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Fn } from '@/types/common';

interface VoiceIconProps {
    isPlaying: boolean;
    onPlay: Fn;
}

function VoiceIcon({ isPlaying, onPlay }: Readonly<VoiceIconProps>) {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Badge
                badgeContent={<Typography variant="caption">(3)</Typography>}
                sx={{ backgroundColor: 'transparent' }}
                overlap="circular"
            >
                <IconButton onClick={onPlay}>
                    {isPlaying ? <VolumeOffIcon /> : <VolumeUpIcon />}
                </IconButton>
            </Badge>
        </Stack>
    );
}
export default VoiceIcon;
