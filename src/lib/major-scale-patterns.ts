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

/** Desenho compacto — cordas 6, 5 e 4. */
const COMPACT_SHAPE: Record<number, number[]> = {
	5: [3, 5],
	4: [2, 3, 5],
	3: [2, 4, 5],
};

/** Desenho estendido — cordas 6 a 1. Si: casa 3 (não 4) por causa da afinação Sol→Si. */
const EXTENDED_SHAPE: Record<number, number[]> = {
	5: [3, 5, 7],
	4: [3, 5, 7],
	3: [4, 5, 7],
	2: [4, 5, 7],
	1: [3, 7, 8],
	0: [5, 7, 8],
};

const DEFAULT_ROOT = { stringIndex: 5, fret: 3 };
const G_STRING = 2;
const B_STRING = 1;

const OPEN_MIDI = [64, 59, 55, 50, 45, 40];
const MAJOR_INTERVALS = [0, 2, 4, 5, 7, 9, 11];

export const MAJOR_SCALE_PATTERNS: Record<ScalePatternId, ScalePattern> = {
	compact: {
		id: 'compact',
		label: 'Desenho 1',
		description: 'Cordas 6, 5 e 4 — ideal para começar.',
		defaultRoot: DEFAULT_ROOT,
		dots: assignScaleDegrees(buildDots(COMPACT_SHAPE), DEFAULT_ROOT),
	},
	extended: {
		id: 'extended',
		label: 'Desenho 2',
		description: 'Cordas 6 a 1 — cobre mais o braço.',
		defaultRoot: DEFAULT_ROOT,
		dots: assignScaleDegrees(buildDots(EXTENDED_SHAPE), DEFAULT_ROOT),
	},
};

function buildDots(shape: Record<number, number[]>): Omit<PatternDot, 'degree'>[] {
	const dots: Omit<PatternDot, 'degree'>[] = [];
	for (let s = 5; s >= 0; s--) {
		for (const f of shape[s] ?? []) {
			dots.push({ stringIndex: s, fret: f });
		}
	}
	return dots;
}

/**
 * Ajuste de 1 casa ao cruzar a região Sol→Si (afinação em terça).
 * Cordas com índice ≤ 1 = Si e Mi agudo.
 */
function gBCrossingFretAdjustment(fromString: number, toString: number): number {
	if (fromString === toString) return 0;

	const step = fromString < toString ? 1 : -1;
	let adjustment = 0;

	for (let s = fromString; s !== toString; s += step) {
		const next = s + step;
		if (step === -1 && s === G_STRING && next === B_STRING) {
			adjustment += 1;
		}
		if (step === 1 && s === B_STRING && next === G_STRING) {
			adjustment -= 1;
		}
	}

	return adjustment;
}

function pitchClassFromPosition(stringIndex: number, fret: number): number {
	return ((OPEN_MIDI[stringIndex] + fret) % 12 + 12) % 12;
}

function intervalFromRoot(stringIndex: number, fret: number, root: { stringIndex: number; fret: number }): number {
	const notePc = pitchClassFromPosition(stringIndex, fret);
	const rootPc = pitchClassFromPosition(root.stringIndex, root.fret);
	return (notePc - rootPc + 12) % 12;
}

/** Garante que casas em Si/Mi agudo pertencem à escala maior da tônica. */
function snapFretToScale(
	stringIndex: number,
	fret: number,
	root: { stringIndex: number; fret: number },
): number {
	for (const delta of [0, -1, 1, -2, 2]) {
		const candidate = fret + delta;
		if (candidate < 0 || candidate > 12) continue;
		if (MAJOR_INTERVALS.includes(intervalFromRoot(stringIndex, candidate, root))) {
			return candidate;
		}
	}
	return fret;
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

export function getPatternDotsAtRoot(
	pattern: ScalePattern,
	root: { stringIndex: number; fret: number },
): PatternDot[] {
	const dString = root.stringIndex - pattern.defaultRoot.stringIndex;
	const dFret = root.fret - pattern.defaultRoot.fret;

	const moved = pattern.dots.map((dot) => {
		const newString = dot.stringIndex + dString;
		const crossingAdj = gBCrossingFretAdjustment(dot.stringIndex, newString);
		let newFret = dot.fret + dFret + crossingAdj;

		if (newString <= B_STRING) {
			newFret = snapFretToScale(newString, newFret, root);
		}

		return {
			stringIndex: newString,
			fret: newFret,
		};
	});

	return assignScaleDegrees(moved, root);
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
