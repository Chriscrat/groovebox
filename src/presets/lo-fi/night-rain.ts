import type { Ambiance, Instrument, Track } from '../../types/audio';

// INSTRUMENTS
const accent: Instrument<'accent'>  = {
    id: 'accent',
    image: '/instruments/accent.png',
    samples: {
        'F4': '/samples/lo-fi/night-rain/texture/accent/Motown Vocal Chops E Minor.wav'
    },
    defaultNote: 'F4',
    retrigger: false,
    maxDuration: '8n',
    volume: -3,
};

const lead: Instrument<'lead'>  = {
    id: 'lead',
    image: '/instruments/lead.png',
    samples: {
        'A#1': '/samples/lo-fi/night-rain/lead/Night Train One Shot.wav'
    },
    defaultNote: 'A#1',
    retrigger: false,
    maxDuration: '8n',
    volume: -3,
};

const chords: Instrument<'chords', 'B3' | 'C4'>  = {
    id: 'chords',
    image: '/instruments/piano.png',
    samples: {
        B3: '/samples/lo-fi/night-rain/harmony/chords/Rhodes Chord B Major Loop.wav',
        C4: '/samples/lo-fi/night-rain/harmony/chords/Rhodes Chord C Minor Loop.wav',
    },
    defaultNote: 'B3',
    retrigger: false,
    maxDuration: '8n',
    volume: -3,
};

const kick: Instrument<'kick'> = {
    id: 'kick',
    image: '/instruments/kick.png',
    samples: {
        'C#2': '/samples/lo-fi/night-rain/rythm/kick/Lo Fi Kick C Major.wav',
    },
    defaultNote: 'C#2',
    retrigger: true,
    maxDuration: '8n',
    volume: -3,
};

const snare: Instrument<'snare'> = {
    id: 'snare',
    image: '/instruments/snare.png',
    samples: {
        'F#5': '/samples/lo-fi/night-rain/rythm/snare/Lo Fi Snare.wav',
    },
    defaultNote: 'F#5',
    retrigger: true,
    maxDuration: '8n',
    volume: -3,
};

const openHat: Instrument<'open-hat'> = {
    id: 'open-hat',
    image: '/instruments/hi-hats.png',
    samples: {
        'B-1': '/samples/lo-fi/night-rain/rythm/hi-hats/Lo-Fi Open Hi-Hat.wav'
    },
    defaultNote: 'B-1',
    retrigger: true,
    maxDuration: '8n',
    volume: 1,
};

const closedHat: Instrument<'closed-hat'> = {
    id: 'closed-hat',
    image: '/instruments/hi-hats.png',
    samples: {
        D8: '/samples/lo-fi/night-rain/rythm/hi-hats/Lo-Fi Closed Hi-Hat C Major.wav'
    },
    defaultNote: 'D8',
    retrigger: true,
    maxDuration: '8n',
    volume: 1,
};

// TRACKS
const accentTrack: Track<'accent'> = {
    instrument: accent,
    name: 'Vocal',
    muted: false,
    solo: false,
    events: [
        { step: 15 },
    ],
    volume: -15,
    decay: 1
};

const leadTrack: Track<'lead'> = {
    instrument: lead,
    name: 'Lead',
    muted: false,
    solo: false,
    events: [
        { step: 0 },
        { step: 4 },
        { step: 8 },
        { step: 12 },
    ],
    volume: -15,
    decay: 1
};

const chordsTrack: Track<'chords'> = {
    instrument: chords,
    name: 'Chords',
    muted: false,
    solo: false,
    events: [
        { step: 2, note: 'B3' },
        { step: 4, note: 'B3' },
        { step: 6, note: 'B3' },
        { step: 9, note: 'C4' },
        { step: 10, note: 'C4' },
        { step: 12, note: 'B3' },
        { step: 13, note: 'C4' },
    ],
    volume: -10
};

const snareTrack: Track<'snare'> = {
    instrument: snare,
    name: 'Snare',
    muted: false,
    solo: false,
    events: [{ step: 4 }, { step: 12 }],
};

const kickTrack: Track<'kick'> = {
    instrument: kick,
    name: 'Kick',
    muted: false,
    solo: false,
    events: [
        { step: 0 },
        { step: 8 },
        { step: 15 }
    ],
};

const openHatTrack: Track<'open-hat'> = {
    instrument: openHat,
    name: 'Open hat',
    muted: false,
    solo: false,
    events: [
        { step: 5 },
        { step: 13 },
    ],
};

const closedHatTrack: Track<'closed-hat'> = {
    instrument: closedHat,
    name: 'Closed hat',
    muted: false,
    solo: false,
    events: [
        { step: 0 },
        { step: 2 },
        { step: 4 },
        { step: 6 },
        { step: 8 },
        { step: 10 },
        { step: 12 },
        { step: 14 },
    ],
};

// 'Night rain' lo-fi's ambiance composition
export const nightRain: Ambiance = {
    id: 'night-rain',
    name: 'Night rain',
    steps: 16,
    tracks: [
        accentTrack,
        leadTrack,
        chordsTrack,
        kickTrack,
        snareTrack,
        openHatTrack,
        closedHatTrack
    ],
};
