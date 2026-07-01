import { getTranslations, type Locale } from '../i18n';

/** Corda 1 = Mi agudo (index 0) … corda 6 = Mi grave (index 5). */
export type ScalePatternId = 'compact' | 'extended';

export interface PatternDot {
	stringIndex: number;
	fret: number;
	degree: number;
}

export interface ScalePattern {
	id: ScalePatternId;
	label: string;
	description: string;
	/** Posição padrão da tônica (grau 1) em Sol maior. */
	defaultRoot: { stringIndex: number; fret: number };
	dots: PatternDot[];
}

function returnFrets(initialFret: number, initialString: 1 | 2 | 3 | 4 | 5 | 6): number[][] {
	const pattern = [
		[0, 2, 4],
		[0, 2, 4],
		[1, 2, 4],
		[1, 2, 4],
		[1, 3, 4],
		[1, 3, 4],
	];
	const frets: number[][] = [];
	for (let i = 6; i > 0; i--) {
		if (i === 2 && initialString > 2) {
			initialFret++;
		}
		if (i > initialString) {
			frets.push([]);
		} else {
			frets.push(pattern[initialString - i].map((n) => n + initialFret));
		}
	}
	return frets;
}

/** stringIndex 0 = corda 1 (Mi agudo) … stringIndex 5 = corda 6 (Mi grave). */
function stringNumberFromIndex(stringIndex: number): 1 | 2 | 3 | 4 | 5 | 6 {
	return (stringIndex + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

/** `returnFrets` yields corda 6 … corda 1; map entry i → stringIndex 5 − i. */
function fretsToDots(fretsByString: number[][]): Omit<PatternDot, 'degree'>[] {
	const dots: Omit<PatternDot, 'degree'>[] = [];
	for (let i = 0; i < fretsByString.length; i++) {
		const stringIndex = 5 - i;
		for (const fret of fretsByString[i]) {
			dots.push({ stringIndex, fret });
		}
	}
	return dots;
}

const DEFAULT_ROOT = { stringIndex: 5, fret: 3 };

const OPEN_MIDI = [64, 59, 55, 50, 45, 40];
const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11];

function pitchClassFromPosition(stringIndex: number, fret: number): number {
	return ((OPEN_MIDI[stringIndex] + fret) % 12 + 12) % 12;
}

function intervalFromRoot(
	stringIndex: number,
	fret: number,
	root: { stringIndex: number; fret: number },
): number {
	const notePc = pitchClassFromPosition(stringIndex, fret);
	const rootPc = pitchClassFromPosition(root.stringIndex, root.fret);
	return (notePc - rootPc + 12) % 12;
}

function assignScaleDegrees(
	dots: Omit<PatternDot, 'degree'>[],
	root: { stringIndex: number; fret: number },
): PatternDot[] {
	return dots.map((dot) => {
		const interval = intervalFromRoot(dot.stringIndex, dot.fret, root);
		const degreeIndex = MAJOR_INTERVALS.indexOf(interval);
		const degree = degreeIndex >= 0 ? degreeIndex + 1 : 0;
		return { ...dot, degree: degree === 0 ? 8 : degree };
	});
}

function buildPatternDots(
	root: { stringIndex: number; fret: number },
	maxStrings?: number,
): PatternDot[] {
	const initialString = stringNumberFromIndex(root.stringIndex);
	const frets = returnFrets(root.fret, initialString);
	const dots: Omit<PatternDot, 'degree'>[] = [];
	let stringsAdded = 0;

	for (let i = 0; i < frets.length; i++) {
		const stringFrets = frets[i];
		if (stringFrets.length === 0) continue;
		if (maxStrings !== undefined && stringsAdded >= maxStrings) break;

		const stringIndex = 5 - i;
		for (const fret of stringFrets) {
			dots.push({ stringIndex, fret });
		}
		stringsAdded++;
	}

	return assignScaleDegrees(dots, root);
}

const BASE_PATTERNS: Record<ScalePatternId, Omit<ScalePattern, 'label' | 'description'>> = {
	compact: {
		id: 'compact',
		defaultRoot: DEFAULT_ROOT,
		dots: buildPatternDots(DEFAULT_ROOT, 3),
	},
	extended: {
		id: 'extended',
		defaultRoot: DEFAULT_ROOT,
		dots: buildPatternDots(DEFAULT_ROOT),
	},
};

export const MAJOR_SCALE_PATTERNS: Record<ScalePatternId, ScalePattern> = {
	compact: {
		...BASE_PATTERNS.compact,
		label: 'Desenho 1',
		description: 'Cordas 6, 5 e 4 — ideal para começar.',
	},
	extended: {
		...BASE_PATTERNS.extended,
		label: 'Desenho 2',
		description: 'Cordas 6 a 1 — cobre mais o braço.',
	},
};

export function getMajorScalePatterns(locale: Locale): Record<ScalePatternId, ScalePattern> {
	const t = getTranslations(locale);
	const sp = t.scalePatterns as Record<
		ScalePatternId,
		{ label: string; description: string }
	>;
	return {
		compact: { ...BASE_PATTERNS.compact, ...sp.compact },
		extended: { ...BASE_PATTERNS.extended, ...sp.extended },
	};
}

export function getPatternDotsAtRoot(
	pattern: ScalePattern,
	root: { stringIndex: number; fret: number },
): PatternDot[] {
	const maxStrings = pattern.id === 'compact' ? 3 : undefined;
	return buildPatternDots(root, maxStrings);
}

export function isDotInBounds(
	dot: { stringIndex: number; fret: number },
	fretCount: number,
): boolean {
	return (
		dot.stringIndex >= 0 &&
		dot.stringIndex <= 5 &&
		dot.fret >= 0 &&
		dot.fret <= fretCount
	);
}

export const DEFAULT_G_ROOT = DEFAULT_ROOT;
