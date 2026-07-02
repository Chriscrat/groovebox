import type { StylePreset } from '../../types/audio';

import { nightRain } from './night-rain';

export const LOFI_PRESETS: StylePreset = {
    id: 'lo-fi',
    name: 'Lo-fi',
    bpm: 80,
    effects: { reverbWet: 0.5, delayWet: 0.6 },
    ambiances: [
        nightRain,
    ],
};
