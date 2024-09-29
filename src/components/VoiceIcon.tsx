import { useCallback, useEffect, useMemo, useState } from 'react';
import KeyPressIconButton from '@/components/KeyPressIconButton';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Badge, Stack, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import useKeyCodeName from '@/hooks/useKeyCodeName';
import Language from '@/constants/enums/language';
import useSettingsDb from '@/hooks/useSettingsDb';
import KeyCode from '@/constants/enums/keyCode';

interface VoiceIconProps {
    name: string;
    keyCode: KeyCode;
    language: Language;
    autoPlay?: boolean;
}

function VoiceIcon({
    keyCode,
    name,
    language,
    autoPlay = false,
}: Readonly<VoiceIconProps>) {
    const [isPlaying, setIsPlaying] = useState(false);
    const { findLabelById } = useKeyCodeName();
    const { getNativeLanguage } = useSettingsDb();

    const nativeLang = getNativeLanguage();

    const utterance = useMemo(() => {
        const utt = new SpeechSynthesisUtterance(name);
        utt.lang = language === Language.En ? 'en-US' : 'pl-PL';

        return utt;
    }, [name, language]);

    const startSpeaking = useCallback(() => {
        window.speechSynthesis.cancel();

        if (!isPlaying) {
            window.speechSynthesis.speak(utterance);
        }
    }, [isPlaying, utterance]);

    useEffect(() => {
        const handleStart = () => setIsPlaying(true);
        const handleEnd = () => setIsPlaying(false);
        const handleError = () => setIsPlaying(false);

        utterance.addEventListener('start', handleStart);
        utterance.addEventListener('end', handleEnd);
        utterance.addEventListener('error', handleError);

        return () => {
            utterance.removeEventListener('start', handleStart);
            utterance.removeEventListener('end', handleEnd);
            utterance.removeEventListener('error', handleError);
        };
    }, [utterance]);

    useEffect(() => {
        return () => {
            setIsPlaying(false);
            window.speechSynthesis.cancel();
        };
    }, [name]);

    useEffect(() => {
        if (autoPlay) {
            startSpeaking();
        }
    }, [autoPlay, name]);

    if (nativeLang === language) {
        return null;
    }

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
                    onClick={startSpeaking}
                    keyCode={keyCode}
                >
                    {isPlaying ? <VolumeOffIcon /> : <VolumeUpIcon />}
                </KeyPressIconButton>
            </Badge>
        </Stack>
    );
}
export default VoiceIcon;
