import { getTranslations, type Locale } from '../i18n';
import { INSTRUMENTS, type InstrumentId } from './notes';

export type DiagramType =
	| 'octave-common'
	| 'c-position'
	| 'tuning'
	| 'tuning-2'
	| 'twelfth-fret';

export interface DiagramPoint {
	s: number;
	f: number;
	label: string;
}

export interface PositionDiagramConfig {
	frets: number;
	start: DiagramPoint;
	end: DiagramPoint;
	caption: string;
	captionNote: string;
}

const DIAGRAM_GEOMETRY: Record<
	InstrumentId,
	Record<DiagramType, Omit<PositionDiagramConfig, 'caption' | 'captionNote'>>
> = {
	guitar: {
		'octave-common': {
			frets: 8,
			start: { s: 5, f: 3, label: '1' },
			end: { s: 3, f: 5, label: '2' },
		},
		'c-position': {
			frets: 10,
			start: { s: 4, f: 7, label: '1' },
			end: { s: 1, f: 5, label: '2' },
		},
		tuning: {
			frets: 8,
			start: { s: 2, f: 0, label: '1' },
			end: { s: 3, f: 5, label: '2' },
		},
		'tuning-2': {
			frets: 9,
			start: { s: 4, f: 0, label: '1' },
			end: { s: 3, f: 7, label: '2' },
		},
		'twelfth-fret': {
			frets: 13,
			start: { s: 5, f: 0, label: '1' },
			end: { s: 5, f: 12, label: '2' },
		},
	},
	bass: {
		'octave-common': {
			frets: 8,
			start: { s: 3, f: 3, label: '1' },
			end: { s: 1, f: 5, label: '2' },
		},
		'c-position': {
			frets: 10,
			start: { s: 2, f: 5, label: '1' },
			end: { s: 1, f: 3, label: '2' },
		},
		tuning: {
			frets: 8,
			start: { s: 0, f: 0, label: '1' },
			end: { s: 1, f: 5, label: '2' },
		},
		'tuning-2': {
			frets: 9,
			start: { s: 2, f: 0, label: '1' },
			end: { s: 3, f: 5, label: '2' },
		},
		'twelfth-fret': {
			frets: 13,
			start: { s: 3, f: 0, label: '1' },
			end: { s: 3, f: 12, label: '2' },
		},
	},
};

const DIAGRAM_I18N_KEYS: Record<
	DiagramType,
	'octaveCommon' | 'cPosition' | 'tuning' | 'tuning2' | 'twelfthFret'
> = {
	'octave-common': 'octaveCommon',
	'c-position': 'cPosition',
	tuning: 'tuning',
	'tuning-2': 'tuning2',
	'twelfth-fret': 'twelfthFret',
};

export function getPositionDiagramConfig(
	type: DiagramType,
	instrumentId: InstrumentId,
	locale: Locale,
): PositionDiagramConfig & { strings: string[] } {
	const t = getTranslations(locale);
	const pd = t.positionDiagrams as {
		guitar: Record<string, { caption: string; captionNote: string }>;
		bass: Record<string, { caption: string; captionNote: string }>;
	};
	const key = DIAGRAM_I18N_KEYS[type];
	const text = pd[instrumentId][key];
	return {
		...DIAGRAM_GEOMETRY[instrumentId][type],
		...text,
		strings: INSTRUMENTS[instrumentId].stringLabels,
	};
}

export function getPositionPs(
	positionNumber: number,
	instrumentId: InstrumentId,
	guitarPs: string,
	locale: Locale,
): string {
	if (instrumentId === 'bass') {
		const t = getTranslations(locale);
		const bassPs = (t.positionDiagrams as { bassPs: Record<number, string> }).bassPs;
		return bassPs[positionNumber] ?? guitarPs;
	}
	return guitarPs;
}
