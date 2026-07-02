import type { Ambiance, Instrument, Track } from '../../types/audio';

// INSTRUMENTS
const lead: Instrument<'lead', 'D#6' | 'G#2'>  = {
    id: 'lead',
    image: '/instruments/growl.png',
    samples: {
        'D#6': '/samples/dubstep/raptor/lead/Cymatics - Titan Synth One Shot 17 - Dsharp6.wav',
        'G#2': '/samples/dubstep/raptor/lead/Cymatics - Titan Synth One Shot 71 - Gsharp2.wav',
    },
    defaultNote: 'D#6',
    retrigger: true,
    maxDuration: '4n',
    volume: -3,
};

const bass: Instrument<'bass', 'D#4' | 'F3' | 'F#2' | 'G#2'> = {
    id: 'bass',
    image: '/instruments/bass.png',
    samples: {
        'D#4': '/samples/dubstep/raptor/bass/Cymatics - Raptor Bass One Shot 12 - Dsharp4.wav',
        F3: '/samples/dubstep/raptor/bass/Cymatics - Raptor Bass One Shot 39 - F3.wav',
        'F#2': '/samples/dubstep/raptor/bass/Brostep Bass Growl - Fsharp2 Minor.wav',
        'G#2': '/samples/dubstep/raptor/bass/Distorted Tearout High Growl - Gsharp2.wav',
    },
    defaultNote: 'D#4',
    retrigger: true,
    maxDuration: '4n',
    volume: -3,
};

const sub: Instrument<'sub-bass', 'F#2' | 'G#5'> = {
    id: 'sub-bass',
    image: '/instruments/sub.png',
    samples: {
        'F#2': '/samples/dubstep/raptor/sub/Cymatics - Bass One Shot 51 - Fsharp2.wav',
        'G#5': '/samples/dubstep/raptor/sub/Cymatics - Bass One Shot 60 - Gsharp5.wav',
    },
    defaultNote: 'F#2',
    retrigger: true,
    maxDuration: '4n',
    volume: -3,
};

const kick: Instrument<'kick'> = {
    id: 'kick',
    image: '/instruments/kick.png',
    samples: {
        'D#4': '/samples/dubstep/raptor/kick/Dubstep Kick 3 Mellow.wav',
    },
    defaultNote: 'D#4',
    retrigger: true,
    maxDuration: '8n',
    volume: -3,
};

const snare: Instrument<'snare'> = {
    id: 'snare',
    image: '/instruments/snare.png',
    samples: {
        'G#3': '/samples/dubstep/raptor/snare/Electronic Snare Drum 3 by IanStarGem  - Gsharp3.wav',
    },
    defaultNote: 'G#3',
    retrigger: true,
    maxDuration: '8n',
    volume: -3,
};

const openHat: Instrument<'open-hat'> = {
    id: 'open-hat',
    image: '/instruments/hi-hats.png',
    samples: {
        F8: '/samples/dubstep/raptor/hi-hats/open-hat - F8.wav',
    },
    defaultNote: 'F8',
    retrigger: true,
    maxDuration: '8n',
    volume: 1,
};

const closedHat: Instrument<'closed-hat'> = {
    id: 'closed-hat',
    image: '/instruments/hi-hats.png',
    samples: {
        'F#9': '/samples/dubstep/raptor/hi-hats/closed-hat - Fsharp9.wav',
    },
    defaultNote: 'F#9',
    retrigger: true,
    maxDuration: '8n',
    volume: 1,
};

// TRACKS
const leadMelodyTrack: Track<'lead'> = {
    instrument: lead,
    name: 'Lead melody',
    muted: false,
    solo: false,
    events: [
        { step: 4, note: 'D#4' },
        { step: 6, note: 'D#6' },
        { step: 7, note: 'D#6' },
        { step: 9, note: 'D#6' },
        { step: 12, note: 'D#6' },
    ],
};

const leadGrowlTrack: Track<'lead'> = {
    instrument: lead,
    name: 'Lead growl',
    muted: false,
    solo: false,
    events: [
        { step: 4, note: 'G#2' },
        { step: 12, note: 'G#2' },
        { step: 14, note: 'F#2' },
        { step: 15, note: 'D#6' },
    ],
};

const bassTrack: Track<'bass'> = {
    instrument: bass,
    name: 'Reece',
    muted: false,
    solo: false,
    events: [
        { step: 0, note: 'D#4' },
        { step: 4, note: 'F#2' },
        { step: 9, note: 'G#2' },
        { step: 12, note: 'F3' },
        { step: 13, note: 'F3' },
        { step: 14, note: 'F3' },
    ],
};

const subTrack: Track<'sub-bass'> = {
    instrument: sub,
    name: 'Sub',
    muted: false,
    solo: false,
    events: [
        { step: 0, note: 'F#2' },
        { step: 1, note: 'F#2' },
        { step: 2, note: 'G#5' },
        { step: 8, note: 'F#2' },
        { step: 9, note: 'G#5' },
        { step: 10, note: 'G#5' },
    ],
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
    events: [{ step: 0 }, { step: 8 }, { step: 15 }],
};

const openHatTrack: Track<'open-hat'> = {
    instrument: openHat,
    name: 'Open hat',
    muted: false,
    solo: false,
    events: [{ step: 1 }, { step: 5 }, { step: 9 }, { step: 13 }],
};

const closedHatTrack: Track<'closed-hat'> = {
    instrument: closedHat,
    name: 'Closed hat',
    muted: false,
    solo: false,
    events: [{ step: 0 }, { step: 2 }, { step: 4 }, { step: 6 }, { step: 8 }, { step: 10 }, { step: 12 }, { step: 14 }],
};

// 'Raptor' dubstep's ambiance composition
export const raptor: Ambiance = {
    id: 'raptor',
    name: 'Raptor',
    steps: 16,
    tracks: [
        leadMelodyTrack,
        leadGrowlTrack,
        subTrack,
        bassTrack,
        kickTrack,
        snareTrack,
        openHatTrack,
        closedHatTrack
    ],
};
