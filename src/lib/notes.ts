export const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;

export type NoteName = (typeof NOTE_NAMES)[number];
export type InstrumentId = 'guitar' | 'bass';

export interface InstrumentConfig {
	id: InstrumentId;
	label: string;
	stringLabels: string[];
	openMidi: number[];
}

export const INSTRUMENTS: Record<InstrumentId, InstrumentConfig> = {
	guitar: {
		id: 'guitar',
		label: 'Guitarra / Violão',
		stringLabels: ['E', 'B', 'G', 'D', 'A', 'E'],
		openMidi: [64, 59, 55, 50, 45, 40],
	},
	bass: {
		id: 'bass',
		label: 'Baixo',
		stringLabels: ['G', 'D', 'A', 'E'],
		openMidi: [43, 38, 33, 28],
	},
};

export const FRET_COUNT = 12;

export function midiToNoteName(midi: number): NoteName {
	return NOTE_NAMES[((midi % 12) + 12) % 12];
}

export function getNoteAtFret(openMidi: number, fret: number): NoteName {
	return midiToNoteName(openMidi + fret);
}

export function getFretboardNotes(instrument: InstrumentConfig): NoteName[][] {
	return instrument.openMidi.map((openMidi) =>
		Array.from({ length: FRET_COUNT + 1 }, (_, fret) => getNoteAtFret(openMidi, fret)),
	);
}
