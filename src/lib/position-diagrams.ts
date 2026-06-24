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

const DIAGRAMS: Record<InstrumentId, Record<DiagramType, PositionDiagramConfig>> = {
	guitar: {
		'octave-common': {
			frets: 8,
			start: { s: 5, f: 3, label: '1' },
			end: { s: 3, f: 5, label: '2' },
			caption: 'Mi grave casa 3 → Ré casa 5 (mesma nota Sol, +2 casas, 2 cordas abaixo)',
			captionNote: 'Guitarra/violão — oitavada comum',
		},
		'c-position': {
			frets: 10,
			start: { s: 2, f: 5, label: '1' },
			end: { s: 5, f: 8, label: '2' },
			caption: 'Sol casa 5 → Mi grave casa 8 (−2 casas, 3 cordas abaixo)',
			captionNote: 'Guitarra/violão — posição do dó',
		},
		tuning: {
			frets: 8,
			start: { s: 2, f: 0, label: '1' },
			end: { s: 3, f: 5, label: '2' },
			caption: 'Sol solto → Ré casa 5 (afinação: −5 casas na corda abaixo)',
			captionNote: 'Como ao afinar: casa 5 = corda solta de cima',
		},
		'tuning-2': {
			frets: 9,
			start: { s: 4, f: 0, label: '1' },
			end: { s: 3, f: 7, label: '2' },
			caption: 'Lá solto → Ré casa 7 (oitava acima, +7 casas na corda abaixo)',
			captionNote: 'Corda solta e 7ª casa na corda imediatamente abaixo',
		},
		'twelfth-fret': {
			frets: 13,
			start: { s: 5, f: 0, label: '1' },
			end: { s: 5, f: 12, label: '2' },
			caption: 'Mi grave solto → Mi grave casa 12 (12 casas à frente, mesma corda)',
			captionNote: 'Guitarra/violão — oitava na mesma corda',
		},
	},
	bass: {
		'octave-common': {
			frets: 8,
			start: { s: 3, f: 3, label: '1' },
			end: { s: 1, f: 5, label: '2' },
			caption: 'Mi grave casa 3 → Ré casa 5 (mesma nota Sol, +2 casas, 2 cordas abaixo)',
			captionNote: 'Baixo — oitavada comum',
		},
		'c-position': {
			frets: 10,
			start: { s: 0, f: 5, label: '1' },
			end: { s: 3, f: 8, label: '2' },
			caption: 'Sol casa 5 → Mi grave casa 8 (mesma nota Sol, −2 casas, 3 cordas abaixo)',
			captionNote: 'Baixo — posição do dó',
		},
		tuning: {
			frets: 8,
			start: { s: 0, f: 0, label: '1' },
			end: { s: 1, f: 5, label: '2' },
			caption: 'Sol solto → Ré casa 5 (afinação: −5 casas na corda abaixo)',
			captionNote: 'Como ao afinar: casa 5 = corda solta de baixo',
		},
		'tuning-2': {
			frets: 9,
			start: { s: 2, f: 0, label: '1' },
			end: { s: 3, f: 5, label: '2' },
			caption: 'Lá solto → Mi grave casa 5 (afinação: mesma nota na corda abaixo)',
			captionNote: 'Corda solta e casa 5 na corda imediatamente abaixo',
		},
		'twelfth-fret': {
			frets: 13,
			start: { s: 3, f: 0, label: '1' },
			end: { s: 3, f: 12, label: '2' },
			caption: 'Mi grave solto → Mi grave casa 12 (12 casas à frente, mesma corda)',
			captionNote: 'Baixo — oitava na mesma corda',
		},
	},
};

export function getPositionDiagramConfig(
	type: DiagramType,
	instrumentId: InstrumentId,
): PositionDiagramConfig & { strings: string[] } {
	return {
		...DIAGRAMS[instrumentId][type],
		strings: INSTRUMENTS[instrumentId].stringLabels,
	};
}

export function getPositionPs(
	positionNumber: number,
	instrumentId: InstrumentId,
	guitarPs: string,
): string {
	if (instrumentId === 'bass') {
		const bassPs: Record<number, string> = {
			1: 'No baixo, todas as cordas são afinadas em quartas — a regra se aplica de forma uniforme, sem ajuste.',
			2: 'No baixo, todas as cordas são afinadas em quartas — a regra se aplica de forma uniforme, sem ajuste.',
			3: 'No baixo, todas as cordas são afinadas em quartas — use sempre 5 casas para trás na corda abaixo.',
			4: 'No baixo, todas as cordas são afinadas em quartas — use 5 casas à frente na corda de baixo para a oitava acima (ou compare com a casa 5 na afinação).',
			5: 'Esta posição não depende da afinação entre cordas, pois permanece na mesma corda. Vale igualmente para baixo, guitarra e violão.',
		};
		return bassPs[positionNumber] ?? guitarPs;
	}
	return guitarPs;
}
