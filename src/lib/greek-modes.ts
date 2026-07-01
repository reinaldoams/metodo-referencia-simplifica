import { getTranslations, type Locale } from '../i18n';
import type { NoteName } from './notes';
import { NOTE_NAMES } from './notes';
import { noteToLabel } from './note-labels';

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

const MODE_INTERVALS: Record<number, readonly [number, number, number, number, number, number, number]> = {
	1: [0, 2, 4, 5, 7, 9, 11],
	2: [0, 2, 3, 5, 7, 9, 10],
	3: [0, 1, 3, 5, 7, 8, 10],
	4: [0, 2, 4, 6, 7, 9, 11],
	5: [0, 2, 4, 5, 7, 9, 10],
	6: [0, 2, 3, 5, 7, 8, 10],
	7: [0, 1, 3, 5, 6, 8, 10],
};

export function getGreekModes(locale: Locale): GreekModeDefinition[] {
	const t = getTranslations(locale);
	const modes = (t.greekModes as { modes: Array<Omit<GreekModeDefinition, 'intervals'>> }).modes;
	return modes.map((mode) => ({
		...mode,
		intervals: MODE_INTERVALS[mode.number],
	}));
}

/** @deprecated Use getGreekModes(locale) */
export const GREEK_MODES: readonly GreekModeDefinition[] = getGreekModes('pt');

const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11] as const;

function pitchClass(note: NoteName): number {
	return NOTE_NAMES.indexOf(note);
}

function noteFromPitchClass(pc: number): NoteName {
	return NOTE_NAMES[((pc % 12) + 12) % 12];
}

function intervalName(
	semitones: number,
	degree: number,
	intervals: Record<string, string>,
): string {
	switch (semitones) {
		case 0:
			return intervals.tonic;
		case 1:
			return intervals.minor2;
		case 2:
			return intervals.major2;
		case 3:
			return intervals.minor3;
		case 4:
			return intervals.major3;
		case 5:
			return intervals.perfect4;
		case 6:
			return degree === 4 ? intervals.augmented4 : intervals.diminished5;
		case 7:
			return intervals.perfect5;
		case 8:
			return intervals.minor6;
		case 9:
			return intervals.major6;
		case 10:
			return intervals.minor7;
		case 11:
			return intervals.major7;
		default:
			return '';
	}
}

function majorScaleNotes(tonic: NoteName): NoteName[] {
	const rootPc = pitchClass(tonic);
	return MAJOR_INTERVALS.map((interval) => noteFromPitchClass(rootPc + interval));
}

export function getModeBreakdown(
	majorTonic: NoteName,
	modeNumber: number,
	locale: Locale,
): ModeBreakdown {
	const t = getTranslations(locale);
	const modes = getGreekModes(locale);
	const mode = modes[modeNumber - 1];
	const scaleNotes = majorScaleNotes(majorTonic);
	const tonicNote = scaleNotes[modeNumber - 1];
	const reordered = [...scaleNotes.slice(modeNumber - 1), ...scaleNotes.slice(0, modeNumber - 1)];

	const degrees = reordered.map((note, index) => {
		const degree = index + 1;
		const semitones = mode.intervals[index];
		return {
			degree,
			note,
			noteLabel: noteToLabel(note, locale),
			intervalName: intervalName(semitones, degree, t.intervals),
		};
	});

	return {
		mode,
		tonicNote,
		tonicLabel: noteToLabel(tonicNote, locale),
		majorScaleDegree: modeNumber,
		degrees,
	};
}

export function formatModeTitle(tonicLabel: string, mode: GreekModeDefinition): string {
	return `${tonicLabel} ${mode.adjective}`;
}

export function getAllModeBreakdowns(majorTonic: NoteName, locale: Locale): ModeBreakdown[] {
	return getGreekModes(locale).map((mode) => getModeBreakdown(majorTonic, mode.number, locale));
}
