import type { Ambiance, Instrument, Track } from '../../types/audio';

// INSTRUMENTS
const accent: Instrument<'accent'>  = {
    id: 'accent',
    image: '/instruments/growl.png',
    samples: {
        'A#1': '/samples/lo-fi/night-rain/lead/Night Train One Shot.wav'
    },
    defaultNote: 'A#1',
    retrigger: false,
    maxDuration: '8n',
    volume: -3,
};

// const bass: Instrument<'bass'> = {
//     id: 'bass',
//     image: '/instruments/bass.png',
//     samples: {
//     },
//     defaultNote: '',
//     retrigger: true,
//     maxDuration: '4n',
//     volume: -3,
// };

// const sub: Instrument<'sub-bass'> = {
//     id: 'sub-bass',
//     image: '/instruments/bass.png',
//     samples: {
//     },
//     defaultNote: '',
//     retrigger: true,
//     maxDuration: '4n',
//     volume: -3,
// };

// const growl: Instrument<'accent'> = {
//     id: 'accent',
//     image: '/instruments/growl.png',
//     samples: {
//     },
//     defaultNote: '',
//     retrigger: true,
//     maxDuration: '4n',
//     volume: -1,
// };

const kick: Instrument<'kick'> = {
    id: 'kick',
    image: '/instruments/kick.png',
    samples: {
        'C#2': '/samples/lo-fi/night-rain/kick/Lo Fi Kick C Major.wav',
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
        'F#5': '/samples/lo-fi/night-rain/snare/Lo Fi Snare.wav',
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
        'B-1': '/samples/lo-fi/night-rain/hi-hats/Lo-Fi Open Hi-Hat.wav'
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
        D8: '/samples/lo-fi/night-rain/hi-hats/Lo-Fi Closed Hi-Hat C Major.wav'
    },
    defaultNote: 'D8',
    retrigger: true,
    maxDuration: '8n',
    volume: 1,
};

// TRACKS
const accentTrack: Track<'accent'> = {
    instrument: accent,
    name: 'Ambient',
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
    volume: -15,
    decay: 1
};

// const bassTrack: Track<'bass'> = {
//     instrument: bass,
//     name: 'Electric bass',
//     muted: false,
//     solo: false,
//     events: [],
// };

// const subTrack: Track<'sub-bass'> = {
//     instrument: sub,
//     name: 'Sub',
//     muted: false,
//     solo: false,
//     events: [],
// };

// const growlTrack: Track<'accent'> = {
//     instrument: growl,
//     name: 'Vinyl',
//     muted: false,
//     solo: false,
//     events: [],
// };

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
    events: [{ step: 0 }, { step: 8 }],
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
    tracks: [accentTrack, kickTrack, snareTrack, openHatTrack, closedHatTrack],
};
