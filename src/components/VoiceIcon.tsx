import KeyPressIconButton from '@/components/KeyPressIconButton';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Badge, Stack, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import useKeyCodeName from '@/hooks/useKeyCodeName';
import KeyCode from '@/constants/enums/keyCode';
import { useEffect, useState } from 'react';
import delay from 'lodash/delay';

interface VoiceIconProps {
    name: string;
    keyCode: KeyCode;
}

function VoiceIcon({ keyCode, name }: Readonly<VoiceIconProps>) {
    const [isPlaying, setIsPlaying] = useState(false);
    const { findLabelById } = useKeyCodeName();

    useEffect(() => {
        window.speechSynthesis.cancel();
        if (isPlaying) {
            delay(() => {
                const utterance = new SpeechSynthesisUtterance(name);
                utterance.lang = 'pl-PL';

                utterance.onend = () => {
                    setIsPlaying(false);
                };

                utterance.onerror = () => {
                    setIsPlaying(false);
                };

                window.speechSynthesis.speak(utterance);
            }, 50);
        }

        return () => {
            window.speechSynthesis.cancel();
        };
    }, [isPlaying, name]);

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Badge
                badgeContent={
                    <Typography variant="caption">
                        ({findLabelById(keyCode)})
                    </Typography>
                }
                sx={{ backgroundColor: 'transparent' }}
                overlap="circular"
            >
                <KeyPressIconButton
                    onClick={() => setIsPlaying(!isPlaying)}
                    keyCode={keyCode}
                >
                    {isPlaying ? <VolumeOffIcon /> : <VolumeUpIcon />}
                </KeyPressIconButton>
            </Badge>
        </Stack>
    );
}
export default VoiceIcon;
