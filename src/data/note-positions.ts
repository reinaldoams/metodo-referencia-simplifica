export interface NotePosition {
	number: number;
	title: string;
	description: string;
	ps: string;
	diagram: 'octave-common' | 'c-position' | 'tuning' | 'tuning-2' | 'twelfth-fret';
}

export const NOTE_POSITIONS: NotePosition[] = [
	{
		number: 1,
		title: 'Oitavada comum',
		description:
			'Uma nota é tocada e a mesma nota se encontra 2 casas à frente e 2 cordas abaixo (em direção às cordas graves).',
		ps: 'Na guitarra/violão, quando o caminho cruza as cordas Si ou Mi agudo (afinação em terça entre Sol e Si), desloque 1 casa a mais para frente — ou seja, 3 casas à frente em vez de 2.',
		diagram: 'octave-common',
	},
	{
		number: 2,
		title: 'Posição do dó',
		description:
			'Uma nota é tocada e a mesma nota se encontra 2 casas atrás e 3 cordas abaixo.',
		ps: 'Na guitarra/violão, se a busca passar pelas cordas Si ou Mi agudo, desloque 1 casa a menos para trás — ou seja, 1 casa atrás em vez de 2.',
		diagram: 'c-position',
	},
	{
		number: 3,
		title: 'Posição da afinação',
		description:
			'Uma nota é tocada e a mesma nota está na corda imediatamente abaixo, 5 casas para trás — como ao afinar comparando a casa 5 com a corda solta de baixo.',
		ps: 'Na guitarra/violão, entre as cordas Sol e Si a distância de afinação é de 4 casas (e não 5). Use 4 casas para trás ao cruzar essas duas cordas.',
		diagram: 'tuning',
	},
	{
		number: 4,
		title: 'Posição afinação 2',
		description:
			'Uma nota é tocada e, na corda abaixo, encontra-se a mesma nota uma oitava acima, 7 casas à frente — como tocar a corda solta e a corda de baixo na 7ª casa.',
		ps: 'Na guitarra/violão, ao descer da corda Si ou Mi agudo para a corda imediatamente abaixo, use 6 casas à frente em vez de 7 para encontrar a oitava acima.',
		diagram: 'tuning-2',
	},
	{
		number: 5,
		title: '12 casas à frente',
		description:
			'A mesma nota se encontra 12 casas à frente, na mesma corda — a oitava exata no braço.',
		ps: 'Esta posição não é afetada pela diferença de afinação entre Sol e Si, pois permanece na mesma corda. Vale igualmente para baixo, guitarra e violão.',
		diagram: 'twelfth-fret',
	},
];
