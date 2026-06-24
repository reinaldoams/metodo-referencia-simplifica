import type { NoteName } from './notes';
import { NOTE_NAMES } from './notes';
import { noteToPtLabel } from './note-labels';

export interface GreekModeDefinition {
	number: number;
	name: string;
	/** Forma adjetiva para título, ex.: Mixolidiano, Lócrio. */
	adjective: string;
	ordinalLabel: string;
	aliases: string[];
	/** Semitons a partir da tônica para os graus 1–7. */
	intervals: readonly [number, number, number, number, number, number, number];
}

export interface ModeDegreeInfo {
	degree: number;
	note: NoteName;
	noteLabel: string;
	intervalName: string;
}

export interface ModeBreakdown {
	mode: GreekModeDefinition;
	tonicNote: NoteName;
	tonicLabel: string;
	majorScaleDegree: number;
	degrees: ModeDegreeInfo[];
}

export const GREEK_MODES: readonly GreekModeDefinition[] = [
	{
		number: 1,
		name: 'Jônio',
		adjective: 'Jônio',
		ordinalLabel: 'primeiro modo grego',
		aliases: ['Escala maior', 'Modo maior', 'Ionian'],
		intervals: [0, 2, 4, 5, 7, 9, 11],
	},
	{
		number: 2,
		name: 'Dórico',
		adjective: 'Dórico',
		ordinalLabel: 'segundo modo grego',
		aliases: ['Escala dórica', 'Dorian'],
		intervals: [0, 2, 3, 5, 7, 9, 10],
	},
	{
		number: 3,
		name: 'Frígio',
		adjective: 'Frígio',
		ordinalLabel: 'terceiro modo grego',
		aliases: ['Escala frígia', 'Phrygian'],
		intervals: [0, 1, 3, 5, 7, 8, 10],
	},
	{
		number: 4,
		name: 'Lídio',
		adjective: 'Lídio',
		ordinalLabel: 'quarto modo grego',
		aliases: ['Escala lídia', 'Lydian'],
		intervals: [0, 2, 4, 6, 7, 9, 11],
	},
	{
		number: 5,
		name: 'Mixolídio',
		adjective: 'Mixolidiano',
		ordinalLabel: 'quinto modo grego',
		aliases: ['Escala mixolídia', 'Mixolydian'],
		intervals: [0, 2, 4, 5, 7, 9, 10],
	},
	{
		number: 6,
		name: 'Eólio',
		adjective: 'Eólio',
		ordinalLabel: 'sexto modo grego',
		aliases: ['Escala menor natural', 'Escala menor eólia', 'Aeolian'],
		intervals: [0, 2, 3, 5, 7, 8, 10],
	},
	{
		number: 7,
		name: 'Lócrio',
		adjective: 'Lócrio',
		ordinalLabel: 'sétimo modo grego',
		aliases: ['Escala lócria', 'Locrian'],
		intervals: [0, 1, 3, 5, 6, 8, 10],
	},
] as const;

const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11] as const;

function pitchClass(note: NoteName): number {
	return NOTE_NAMES.indexOf(note);
}

function noteFromPitchClass(pc: number): NoteName {
	return NOTE_NAMES[((pc % 12) + 12) % 12];
}

function intervalName(semitones: number, degree: number): string {
	switch (semitones) {
		case 0:
			return 'Tônica';
		case 1:
			return 'Segunda menor';
		case 2:
			return 'Segunda maior';
		case 3:
			return 'Terça menor';
		case 4:
			return 'Terça maior';
		case 5:
			return 'Quarta justa';
		case 6:
			return degree === 4 ? 'Quarta aumentada' : 'Quinta diminuta';
		case 7:
			return 'Quinta justa';
		case 8:
			return 'Sexta menor';
		case 9:
			return 'Sexta maior';
		case 10:
			return 'Sétima menor';
		case 11:
			return 'Sétima maior';
		default:
			return '';
	}
}

function majorScaleNotes(tonic: NoteName): NoteName[] {
	const rootPc = pitchClass(tonic);
	return MAJOR_INTERVALS.map((interval) => noteFromPitchClass(rootPc + interval));
}

export function getModeBreakdown(majorTonic: NoteName, modeNumber: number): ModeBreakdown {
	const mode = GREEK_MODES[modeNumber - 1];
	const scaleNotes = majorScaleNotes(majorTonic);
	const tonicNote = scaleNotes[modeNumber - 1];
	const reordered = [...scaleNotes.slice(modeNumber - 1), ...scaleNotes.slice(0, modeNumber - 1)];

	const degrees = reordered.map((note, index) => {
		const degree = index + 1;
		const semitones = mode.intervals[index];
		return {
			degree,
			note,
			noteLabel: noteToPtLabel(note),
			intervalName: intervalName(semitones, degree),
		};
	});

	return {
		mode,
		tonicNote,
		tonicLabel: noteToPtLabel(tonicNote),
		majorScaleDegree: modeNumber,
		degrees,
	};
}

export function formatModeTitle(tonicLabel: string, mode: GreekModeDefinition): string {
	return `${tonicLabel} ${mode.adjective}`;
}

export function getAllModeBreakdowns(majorTonic: NoteName): ModeBreakdown[] {
	return GREEK_MODES.map((mode) => getModeBreakdown(majorTonic, mode.number));
}
