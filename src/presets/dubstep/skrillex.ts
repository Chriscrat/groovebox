import type { Ambiance, Instrument, Track } from '../../types/audio';

// INSTRUMENTS
const lead: Instrument<'lead', 'D#5' | 'A#4'> = {
    id: 'lead',
    image: '/instruments/lead.png',
    samples: {
        'D#5': '/samples/dubstep/skrillex/lead/Woop Sound - Dsharp5.wav',
        'A#4': '/samples/dubstep/skrillex/lead/Skrillex Clean Voice.wav',
    },
    defaultNote: 'D#5',
    retrigger: true,
    maxDuration: '1n',
    volume: 0,
};

const growl: Instrument<'accent'> = {
    id: 'accent',
    image: '/instruments/growl.png',
    samples: {
        'G#1': '/samples/dubstep/skrillex/accent/Dubstep Growl - Gsharp1.wav',
    },
    defaultNote: 'G#1',
    retrigger: true,
    maxDuration: '4n',
    volume: -3,
};

const bass: Instrument<'bass'> = {
    id: 'bass',
    image: '/instruments/bass.png',
    samples: {
        'F#2': '/samples/dubstep/skrillex/bass/Cymatics - Mothership Bass One Shot 12 - Fsharp.wav',
    },
    defaultNote: 'F#2',
    retrigger: true,
    maxDuration: '4n',
    volume: 0,
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
const leadTrack: Track<'lead'> = {
    instrument: lead,
    name: 'Vocal',
    muted: false,
    solo: false,
    events: [
        {
            step: 2,
            note: 'D#5'
        },
        {
            step: 3,
            note: 'A#4'
        },
        {
            step: 6,
            note: 'D#5'
        },
        {
            step: 7,
            note: 'D#5'
        },
        {
            step: 11,
            note: 'D#5'
        },
        {
            step: 12,
            note: 'D#5'
        },
        {
            step: 14,
            note: 'D#5'
        }
    ],
};

const bassTrack: Track<'bass'> = {
    instrument: bass,
    name: 'Bass',
    muted: false,
    solo: false,
    events: [
        { step: 5 },
        { step: 8 },
        { step: 11 }
    ],
};

const growlTrack: Track<'accent'> = {
    instrument: growl,
    name: 'Growl',
    muted: false,
    solo: false,
    events: [
        { step: 2 },
        { step: 10 }
    ],
};

const kickTrack: Track<'kick'> = {
    instrument: kick,
    name: 'Kick',
    muted: false,
    solo: false,
    events: [
        { step: 0 },
        { step: 8 },
        { step: 15 },
    ],
};

const snareTrack: Track<'snare'> = {
    instrument: snare,
    name: 'Snare',
    muted: false,
    solo: false,
    events: [
        { step: 4 },
        { step: 12 },
    ],
};

const openHatTrack: Track<'open-hat'> = {
    instrument: openHat,
    name: 'Open hat',
    muted: false,
    solo: false,
    events: [
        { step: 1 },
        { step: 3 },
        { step: 5 },
        { step: 7 },
        { step: 9 },
        { step: 11 },
        { step: 13 },
        { step: 15 },
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

export const skrillex: Ambiance = {
    id: 'skrillex',
    name: 'Skrillex',
    steps: 16,
    tracks: [
        leadTrack,
        growlTrack,
        bassTrack,
        kickTrack,
        snareTrack,
        openHatTrack,
        closedHatTrack
    ],
};
