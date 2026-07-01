import type { Translations } from './types';

function ordinalDegree(n: number): string {
	return `${n}.º grau`;
}

function ordinalMode(n: number): string {
	return `${n}.º modo grego`;
}

function positionNumber(n: number): string {
	return `Posição ${n}`;
}

export const pt: Translations = {
	htmlLang: 'pt-BR',
	siteName: 'Método Referência Simplifica',
	nav: {
		home: 'Início',
		noteFinder: 'Encontrador de notas',
		method: 'Método Referência Simplifica',
		scaleFinder: 'Encontrador de escalas do método',
	},
	lang: {
		toggle: 'Idioma',
		pt: 'Português',
		en: 'English',
	},
	footer: 'Método Referência Simplifica — site criado por {author}',
	author: {
		by: 'Por',
		methodAndSite: 'Método e site por',
		toolBy: 'Ferramenta por',
	},
	common: {
		major: 'maior',
		tonic: 'Tônica',
		tonicLabel: 'Tônica:',
		degree: 'grau',
		degree1: 'grau 1',
		degree1Golden: 'grau 1 (dourado)',
		ordinalDegree,
		ordinalMode,
		position: 'Posição',
		positionNumber,
		ps: 'PS:',
		openString: 'solta',
		instrument: 'Instrumento:',
		alsoKnownAs: 'Também conhecido como:',
		revealAnswer: 'Revelar resposta',
		access: 'Acessar',
		arrow: '→',
	},
	instruments: {
		guitar: 'Guitarra / Violão',
		bass: 'Baixo',
	},
	donation: {
		sectionTitle: 'Totalmente gratuito',
		freeBody:
			'Todo o conteúdo deste site é 100% gratuito. O MRS é um projeto sem fins lucrativos, criado por {author}, feito para ajudar quem quer aprender teoria musical de forma prática — sem paywall, sem cadastro, sem pegadinha.',
		gratitude: 'Se o material te ajudou e você quiser apoiar o projeto, ficarei muito grato.',
		supportPix: 'Apoiar o projeto via Pix',
		qrAlt: 'QR Code Pix para doação ao Método Referência Simplifica',
		scanHint: 'Escaneie no app do banco',
		keyLabel: 'Chave Pix (aleatória)',
		copy: 'Copiar chave Pix',
		copied: 'Copiado!',
		copiedSr: 'Chave Pix copiada.',
		voluntary: 'Doação voluntária — qualquer valor para apoiar {author}.',
	},
	home: {
		title: 'Início',
		hero: {
			eyebrow: 'Teoria musical · Abordagem prática',
			title: 'Método Referência Simplifica',
			byAuthor: 'Por {author}',
			tagline:
				'MRS — um caminho para aprender teoria musical com menos informação para decorar e mais clareza na hora de tocar.',
			subtitle:
				'Referências visuais, tablaturas e mapas de escala que aceleram a memorização até ela se tornar um instinto no instrumento.',
			ctaMethod: 'Conhecer o método',
			ctaNotes: 'Explorar notas no braço',
		},
		whatIs: {
			title: 'O que é o MRS?',
			body: 'O Método Referência Simplifica parte de uma ideia simples: em vez de acumular dezenas de regras isoladas, você aprende referências que funcionam como âncoras — pontos fixos a partir dos quais deduz o resto com rapidez.',
		},
		pillars: [
			{
				icon: '♩',
				title: 'Referências, não decoreba',
				description:
					'O MRS organiza a teoria em referências visuais e lógicas que reduzem o volume de informação a memorizar. Em vez de acumular regras soltas, você aprende atalhos que se conectam entre si.',
			},
			{
				icon: '⚡',
				title: 'Velocidade antes da perfeição',
				description:
					'A abordagem é não ortodoxa: o objetivo inicial é decorar rápido o suficiente para que, na prática, tudo se torne natural — no instrumento, na improvisação, na leitura.',
			},
			{
				icon: '🎸',
				title: 'Pensado para cordas',
				description:
					'Muitos exemplos aparecem em tablaturas de instrumentos de corda. Os desenhos de escala maior e o mapa de notas no braço foram pensados para quem aprende tocando.',
			},
		],
		practice: {
			title: 'Como funciona na prática',
			intro:
				'O método não segue a ordem tradicional dos conservatórios. A prioridade é decorar rápido o essencial — escalas, notas, intervalos — para que, depois, na execução, você não precise pensar: é só tocar.',
			tabsAndStrings: {
				title: 'Tablaturas e cordas',
				body: 'Grande parte dos exemplos usa tablaturas de instrumentos de corda — violão, baixo, cavaquinho e similares. Assim, cada conceito teórico já aparece onde você realmente vai usá-lo: nos trastes.',
			},
			majorScaleDrawings: {
				title: 'Desenhos de escala maior',
				body: 'Os padrões visuais da escala maior são uma das ferramentas centrais do MRS. Decorar o desenho no braço é mais rápido do que memorizar fórmulas abstratas — e funciona em qualquer tonalidade.',
			},
			noteFinder: {
				title: 'Encontrador de notas',
				body: 'Antes de avançar para escalas e harmonias, o MRS ensina a localizar notas no braço. A página Encontrador de notas ilustra esse processo passo a passo — é a base visual que direciona todo o restante do estudo.',
				link: 'Ir para o Encontrador de notas',
			},
		},
		map: {
			title: 'Como o site está organizado',
			intro:
				'Cada seção do site cobre uma parte do caminho. Comece pelo método completo ou vá direto às ferramentas — o MRS foi pensado para ser consultado na ordem que fizer mais sentido para você.',
			pages: [
				{
					href: '/metodo-referencia-simplifica',
					label: 'Método Referência Simplifica',
					tag: 'Leitura completa',
					description:
						'Um texto do início ao fim explicando todo o método: a lógica das referências, a ordem de estudo e como encaixar cada peça na sua prática diária.',
				},
				{
					href: '/encontrador-de-notas',
					label: 'Encontrador de notas',
					tag: 'Ferramenta visual',
					description:
						'Ilustrações interativas para localizar notas no braço do instrumento. É o ponto de partida que orienta como você vai navegar pelo braço usando o MRS.',
				},
				{
					href: '/encontrador-de-escalas-do-metodo',
					label: 'Encontrador de escalas do método',
					tag: 'Escalas com o MRS',
					description:
						'Como encontrar escalas com o método — com uma versão adaptada a instrumentos de corda e os modos gregos de cada tônica.',
				},
			],
		},
		cta: {
			title: 'Pronto para começar?',
			body: 'Leia o método do início ao fim ou explore as ferramentas visuais. O objetivo é o mesmo: fazer a teoria musical virar memória muscular o mais rápido possível.',
			button: 'Ler o método completo',
		},
	},
	method: {
		title: 'Método Referência Simplifica',
		intro: {
			beforeNotes:
				'Antes de começar a ler sobre o método, é interessante já saber encontrar as notas no braço do instrumento.',
			goToNoteFinder: 'Ir para o Encontrador de notas',
			foundation:
				'A base do MRS é a escala maior. O objetivo deste método é fazer você entender rapidamente como encontrar todos os modos gregos — e, portanto, a escala menor também, que é o sexto modo grego — a partir da escala maior, compreendendo que mudar qual nota você trata como tônica (o tom da música) altera o nome que essa mesma escala recebe.',
		},
		beforeNames: {
			title: 'Antes de dar nomes aos bois',
			subtitle: 'Chamemos os modos gregos de primeiro, segundo, terceiro… até o sétimo modo grego.',
			p1: 'Não precisamos decorar nomes como Dórico ou Mixolídio agora. O MRS prioriza referências visuais e a lógica dos graus. Primeiro você aprende onde estão as notas; os nomes vêm depois, quando já faz sentido.',
			p2: 'Para encontrar os modos gregos, precisamos dominar a escala maior no braço. A partir dela, cada modo é apenas uma mudança de referência — qual grau você trata como tônica.',
		},
		majorOnNeck: {
			title: 'A escala maior no braço',
			subtitle: 'Encaixe o desenho sobre uma nota e todas as demais notas da escala se revelam.',
			p1: 'A escala maior pode ser encontrada com os desenhos abaixo. Ao encaixar o padrão sobre uma nota — a tônica — você sabe imediatamente onde estão os outros graus no braço do instrumento.',
			p2: 'Alterne entre os dois desenhos e arraste o grau 1 para experimentar diferentes tonalidades. O braço abaixo inicia em Sol maior.',
			p3: 'Observe também como o desenho se altera nas duas cordas mais agudas — Si e Mi agudo — quando você arrasta a tônica para começar a escala a partir de cordas mais agudas. A afinação em terça entre Sol e Si exige esse ajuste de uma casa; é o mesmo detalhe que aparece no Encontrador de notas.',
		},
		degreeExamples: {
			title: 'Encontre os graus manualmente',
			subtitle:
				'Com o desenho da escala maior, você já consegue localizar qualquer grau em qualquer tonalidade.',
			intro:
				'Encorajamos você a praticar encaixando o desenho sobre notas diferentes e identificando os graus. Três exemplos para começar — tente resolver antes de revelar a resposta:',
			examples: [
				{
					note: 'Lá',
					result: 'Mi',
					degree: '5.º grau',
					description:
						'Encaixe o desenho na nota Lá. Encontre o 5.º grau no braço — a quinta justa da tonalidade.',
				},
				{
					note: 'Ré',
					result: 'Fá♯',
					degree: '3.º grau',
					description:
						'Encaixe o desenho na nota Ré. Localize o 3.º grau — a terça maior que define a sonoridade maior.',
				},
				{
					note: 'Dó',
					result: 'Si',
					degree: '7.º grau',
					description:
						'Encaixe o desenho na nota Dó. Onde está o 7.º grau? Pense na sétima maior, um semitom abaixo da tônica.',
				},
			],
			tonicPrefix: 'Tônica:',
			answerFormat: '{degree} = {result}',
		},
		degreeNames: {
			title: 'Dar nomes aos graus (opcional)',
			subtitle:
				'Na escala maior, cada grau tem um nome. Esses nomes mudam quando o intervalo se desvia do padrão maior.',
			tableHeaders: {
				degree: 'Grau',
				name: 'Nome',
				note: 'Observação',
			},
			degrees: [
				{ n: 1, name: 'Tônica', alt: 'Fundamental' },
				{ n: 2, name: 'Segundo grau', alt: 'Supertônica / Nona (na extensão)' },
				{ n: 3, name: 'Terça maior', alt: 'Define a modalidade maior' },
				{ n: 4, name: 'Quarta justa', alt: 'Subdominante' },
				{ n: 5, name: 'Quinta justa', alt: 'Dominante' },
				{ n: 6, name: 'Sexta maior', alt: 'Sexta maior' },
				{ n: 7, name: 'Sétima maior', alt: 'Um semitom abaixo da tônica' },
				{ n: 8, name: 'Oitava', alt: 'Tônica novamente' },
			],
			alterationsTitle: 'Quando o grau se desvia da escala maior',
			alterationsIntro:
				'Compare sempre com o intervalo que você encontraria na escala maior encaixada na mesma tônica. Uma casa a mais ou a menos altera o nome do grau:',
			alterationsHeaders: {
				degree: 'Grau',
				back: '1 casa atrás',
				forward: '1 casa à frente',
			},
			alterations: [
				{ degree: '2.º grau', back: 'Segunda menor / Nona menor', forward: 'Segunda aumentada / Nona maior' },
				{ degree: '3.º grau', back: 'Terça menor', forward: 'Terça aumentada' },
				{ degree: '4.º grau', back: 'Quarta diminuta', forward: 'Quarta aumentada' },
				{ degree: '5.º grau', back: 'Quinta diminuta', forward: 'Quinta aumentada' },
				{ degree: '6.º grau', back: 'Sexta menor', forward: 'Sexta aumentada' },
				{ degree: '7.º grau', back: 'Sétima menor', forward: 'Sétima aumentada' },
			],
		},
		greekModes: {
			title: 'Como encontrar os modos gregos',
			subtitle: 'O mesmo desenho da escala maior — apenas muda qual nota você trata como tônica.',
			p1: 'Até aqui usamos primeiro modo grego, segundo modo grego e assim por diante — sem nomes tradicionais. A ideia é simples: o desenho da escala maior no braço nunca muda de forma. O que muda é qual nota você escolhe como referência (tônica).',
			p2: 'Imagine a escala de Sol maior encaixada no braço. Se você tratar Sol como tônica, está no primeiro modo grego. Se tratar Lá (o segundo grau) como tônica, está no segundo modo grego — as mesmas notas, mas reorganizadas a partir de outra referência.',
			p3: 'Repita para cada grau: terceiro grau como tônica → terceiro modo grego; quarto grau como tônica → quarto modo grego; e assim sucessivamente até o sétimo grau. É por isso que, ao dominar um único desenho da escala maior, você acessa todos os modos — e a escala menor natural, que é o sexto modo grego.',
			visualSummaryTitle: 'Resumo visual',
			visualNotes: ['Sol', 'Lá', 'Si', 'Dó', 'Ré', 'Mi', 'Fá♯'],
			visualModeLabel: '{n}.º modo',
			visualCaption:
				'Em Sol maior: cada nota da escala, ao ser tratada como tônica, gera um modo grego diferente.',
			traditionalNamesTitle: 'Dar nomes aos bois',
			traditionalNamesIntro:
				'Quando estiver confortável com a numeração, estes são os nomes tradicionais de cada modo grego:',
			tonicOnDegree: 'Tônica sobre o {degree}',
		},
	},
	noteFinderPage: {
		title: 'Encontrador de notas',
		p1: 'Clique em qualquer nota no braço para destacar todas as outras posições onde ela aparece. Use o alternador para trocar entre baixo (4 cordas) e guitarra/violão (6 cordas).',
		p2: 'No braço você verá as letras A, B, C, D, E, F e G — em português: Lá, Si, Dó, Ré, Mi, Fá e Sol.',
		p3: 'Na afinação padrão de guitarra/violão (EADGBE), cada corda solta já começa com a nota da afinação: Mi grave, Lá, Ré, Sol, Si e Mi agudo. A casa 0 é a corda solta; a partir daí é só avançar casa por casa.',
		p4: 'Para nomear as casas seguintes, lembre: depois de Si (B) e de Mi (E) não há sustenido — a próxima casa já é Dó e Fá. Nas demais notas, a casa seguinte traz o sustenido (C♯, D♯, F♯, G♯, A♯).',
	},
	noteFinder: {
		clickPrompt: 'Clique em uma casa para ver todas as posições dessa nota no braço.',
		selectedNote: 'Nota selecionada:',
		positionsOnNeck: '{count} posições no braço',
		tabConvention:
			'Convenção de tablatura: corda mais aguda no topo. Casas de 0 (corda solta) a {fretCount}.',
		ariaLabel: '{note} na corda {string}, casa {fret}',
		guideTitle: 'Como encontrar as notas',
		guideIntro:
			'Além de localizar visualmente no braço, o MRS usa cinco posições de referência para encontrar a mesma nota em outro lugar. Pratique cada uma até se tornar automática.',
	},
	notePositions: [
		{
			number: 1,
			title: 'Oitavada comum',
			description:
				'Uma nota é tocada e a mesma nota se encontra 2 casas à frente e 2 cordas abaixo (em direção às cordas graves).',
			ps: 'Na guitarra/violão, quando o caminho cruza as cordas Si ou Mi agudo (afinação em terça entre Sol e Si), desloque uma casa a mais para frente — ou seja, 3 casas à frente em vez de 2.',
		},
		{
			number: 2,
			title: 'Posição do dó',
			description:
				'Uma nota é tocada e a mesma nota se encontra 2 casas atrás e 3 cordas abaixo.',
			ps: 'Na guitarra/violão, se a busca passar pelas cordas Si ou Mi agudo, desloque uma casa a menos para trás — ou seja, 1 casa atrás em vez de 2.',
		},
		{
			number: 3,
			title: 'Posição da afinação',
			description:
				'Uma nota é tocada e a mesma nota está na corda imediatamente abaixo, 5 casas para trás — como ao afinar, comparando a casa 5 com a corda solta da corda de baixo.',
			ps: 'Na guitarra/violão, entre as cordas Sol e Si a distância de afinação é de 4 casas (e não 5). Use 4 casas para trás ao cruzar essas duas cordas.',
		},
		{
			number: 4,
			title: 'Posição da afinação 2',
			description:
				'Uma nota é tocada e, na corda abaixo, você encontra a mesma nota uma oitava acima, 7 casas à frente — como tocar a corda solta e a corda de baixo na 7ª casa.',
			ps: 'Na guitarra/violão, ao descer da corda Si ou Mi agudo para a corda imediatamente abaixo, use 6 casas à frente em vez de 7 para encontrar a oitava acima.',
		},
		{
			number: 5,
			title: 'A 12 casas à frente',
			description:
				'A mesma nota se encontra 12 casas à frente, na mesma corda — a oitava exata no braço.',
			ps: 'Esta posição não é afetada pela diferença de afinação entre Sol e Si, pois permanece na mesma corda. Vale igualmente para baixo, guitarra e violão.',
		},
	],
	scaleFinderPage: {
		title: 'Encontrador de escalas do método',
		intro:
			'Encaixe o desenho da escala maior sobre qualquer tônica e veja, para cada grau, qual modo grego surge e como nomear o intervalo de cada nota em relação à nova referência.',
	},
	scaleExplorer: {
		patternLabel: 'Desenho da escala maior',
		tonicMajor: '{note} maior',
		dragHint:
			'Arraste o grau 1 (dourado) ou clique em qualquer casa para encaixar o desenho sobre outra tônica.',
	},
	scaleFinder: {
		patternLabel: 'Desenho da escala maior',
		tonicMajor: '{note} maior',
		dragHint:
			'Arraste o grau 1 ou clique em qualquer casa para encaixar o desenho. Abaixo, cada grau da escala como tônica revela um modo grego e seus intervalos.',
		modesTitle: 'Modos gregos desta escala',
		modesIntro: 'Mesmas notas de {note} maior — muda apenas qual grau você trata como tônica.',
		tonicDegreeInfo: '({degree}.º grau de {majorTonic} maior)',
	},
	greekModes: {
		modes: [
			{
				number: 1,
				name: 'Jônio',
				adjective: 'Jônio',
				ordinalLabel: 'primeiro modo grego',
				aliases: ['Escala maior', 'Modo maior', 'Ionian'],
				alias: 'Escala maior',
				description:
					'A tônica coincide com o primeiro grau da escala maior. É a referência de partida.',
			},
			{
				number: 2,
				name: 'Dórico',
				adjective: 'Dórico',
				ordinalLabel: 'segundo modo grego',
				aliases: ['Escala dórica', 'Dorian'],
				alias: 'Segundo modo grego',
				description:
					'A tônica cai sobre o segundo grau. Mesmas notas da escala maior, nova referência.',
			},
			{
				number: 3,
				name: 'Frígio',
				adjective: 'Frígio',
				ordinalLabel: 'terceiro modo grego',
				aliases: ['Escala frígia', 'Phrygian'],
				alias: 'Terceiro modo grego',
				description:
					'A tônica cai sobre o terceiro grau. O arranjo de tons e semitons muda a coloração.',
			},
			{
				number: 4,
				name: 'Lídio',
				adjective: 'Lídio',
				ordinalLabel: 'quarto modo grego',
				aliases: ['Escala lídia', 'Lydian'],
				alias: 'Quarto modo grego',
				description:
					'A tônica cai sobre o quarto grau. Brilho característico pela quarta aumentada implícita.',
			},
			{
				number: 5,
				name: 'Mixolídio',
				adjective: 'Mixolidiano',
				ordinalLabel: 'quinto modo grego',
				aliases: ['Escala mixolídia', 'Mixolydian'],
				alias: 'Quinto modo grego',
				description:
					'A tônica cai sobre o quinto grau. Sonoridade dominante, com sétima menor em relação à nova tônica.',
			},
			{
				number: 6,
				name: 'Eólio',
				adjective: 'Eólio',
				ordinalLabel: 'sexto modo grego',
				aliases: ['Escala menor natural', 'Escala menor eólia', 'Aeolian'],
				alias: 'Escala menor natural',
				description:
					'A tônica cai sobre o sexto grau — este é o sexto modo grego, também conhecido como escala menor natural.',
			},
			{
				number: 7,
				name: 'Lócrio',
				adjective: 'Lócrio',
				ordinalLabel: 'sétimo modo grego',
				aliases: ['Escala lócria', 'Locrian'],
				alias: 'Sétimo modo grego',
				description:
					'A tônica cai sobre o sétimo grau. O modo mais instável, raro como tonalidade principal.',
			},
		],
	},
	scalePatterns: {
		compact: {
			label: 'Desenho 1',
			description: 'Cordas 6, 5 e 4 — ideal para começar.',
		},
		extended: {
			label: 'Desenho 2',
			description: 'Cordas 6 a 1 — cobre mais o braço.',
		},
	},
	positionDiagrams: {
		guitar: {
			octaveCommon: {
				caption: 'Mi grave casa 3 → Ré casa 5 (mesma nota Sol, +2 casas, 2 cordas abaixo)',
				captionNote: 'Guitarra/violão — oitavada comum',
			},
			cPosition: {
				caption: 'Sol casa 5 → Mi grave casa 8 (−2 casas, 3 cordas abaixo)',
				captionNote: 'Guitarra/violão — posição do dó',
			},
			tuning: {
				caption: 'Sol solto → Ré casa 5 (afinação: −5 casas na corda abaixo)',
				captionNote: 'Como ao afinar: casa 5 = corda solta de cima',
			},
			tuning2: {
				caption: 'Lá solto → Ré casa 7 (oitava acima, +7 casas na corda abaixo)',
				captionNote: 'Corda solta e 7ª casa na corda imediatamente abaixo',
			},
			twelfthFret: {
				caption: 'Mi grave solto → Mi grave casa 12 (12 casas à frente, mesma corda)',
				captionNote: 'Guitarra/violão — oitava na mesma corda',
			},
		},
		bass: {
			octaveCommon: {
				caption: 'Mi grave casa 3 → Ré casa 5 (mesma nota Sol, +2 casas, 2 cordas abaixo)',
				captionNote: 'Baixo — oitavada comum',
			},
			cPosition: {
				caption: 'Sol casa 5 → Mi grave casa 8 (mesma nota Sol, −2 casas, 3 cordas abaixo)',
				captionNote: 'Baixo — posição do dó',
			},
			tuning: {
				caption: 'Sol solto → Ré casa 5 (afinação: −5 casas na corda abaixo)',
				captionNote: 'Como ao afinar: casa 5 = corda solta de baixo',
			},
			tuning2: {
				caption: 'Lá solto → Mi grave casa 5 (afinação: mesma nota na corda abaixo)',
				captionNote: 'Corda solta e casa 5 na corda imediatamente abaixo',
			},
			twelfthFret: {
				caption: 'Mi grave solto → Mi grave casa 12 (12 casas à frente, mesma corda)',
				captionNote: 'Baixo — oitava na mesma corda',
			},
		},
		bassPs: {
			1: 'No baixo, todas as cordas são afinadas em quartas — a regra se aplica de forma uniforme, sem ajuste.',
			2: 'No baixo, todas as cordas são afinadas em quartas — a regra se aplica de forma uniforme, sem ajuste.',
			3: 'No baixo, todas as cordas são afinadas em quartas — use sempre 5 casas para trás na corda abaixo.',
			4: 'No baixo, todas as cordas são afinadas em quartas — use 5 casas à frente na corda de baixo para a oitava acima (ou compare com a casa 5 na afinação).',
			5: 'Esta posição não depende da afinação entre cordas, pois permanece na mesma corda. Vale igualmente para baixo, guitarra e violão.',
		},
	},
	intervals: {
		tonic: 'Tônica',
		minor2: 'Segunda menor',
		major2: 'Segunda maior',
		minor3: 'Terça menor',
		major3: 'Terça maior',
		perfect4: 'Quarta justa',
		augmented4: 'Quarta aumentada',
		diminished5: 'Quinta diminuta',
		perfect5: 'Quinta justa',
		minor6: 'Sexta menor',
		major6: 'Sexta maior',
		minor7: 'Sétima menor',
		major7: 'Sétima maior',
	},
};
