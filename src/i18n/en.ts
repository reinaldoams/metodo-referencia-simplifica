import type { Translations } from './types';

function ordinalSuffix(n: number): string {
	const v = n % 100;
	if (v >= 11 && v <= 13) return 'th';
	switch (n % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}

function ordinalDegree(n: number): string {
	return `${n}${ordinalSuffix(n)} degree`;
}

function ordinalMode(n: number): string {
	return `${n}${ordinalSuffix(n)} Greek mode`;
}

function positionNumber(n: number): string {
	return `Position ${n}`;
}

export const en: Translations = {
	htmlLang: 'en',
	siteName: 'Reference Method Simplified',
	nav: {
		home: 'Home',
		noteFinder: 'Note Finder',
		method: 'Reference Method Simplified',
		scaleFinder: 'Method Scale Finder',
	},
	lang: {
		toggle: 'Language',
		pt: 'Português',
		en: 'English',
	},
	footer: 'Reference Method Simplified — site created by {author}',
	author: {
		by: 'By',
		methodAndSite: 'Method and site by',
		toolBy: 'Tool by',
	},
	common: {
		major: 'major',
		tonic: 'Tonic',
		tonicLabel: 'Tonic:',
		degree: 'degree',
		degree1: 'degree 1',
		degree1Golden: 'degree 1 (gold)',
		ordinalDegree,
		ordinalMode,
		position: 'Position',
		positionNumber,
		ps: 'Note:',
		openString: 'open',
		instrument: 'Instrument:',
		alsoKnownAs: 'Also known as:',
		revealAnswer: 'Reveal answer',
		access: 'Open',
		arrow: '→',
	},
	instruments: {
		guitar: 'Guitar',
		bass: 'Bass',
	},
	donation: {
		sectionTitle: 'Completely free',
		freeBody:
			'All content on this site is 100% free. RMS is a non-profit project created by {author}, built to help anyone learn music theory in a practical way — no paywall, no sign-up, no catch.',
		gratitude: 'If this material helped you and you would like to support the project, I would be very grateful.',
		supportPix: 'Support the project via Pix',
		qrAlt: 'Pix QR code to donate to Reference Method Simplified',
		scanHint: 'Scan in your banking app',
		keyLabel: 'Pix key (random)',
		copy: 'Copy Pix key',
		copied: 'Copied!',
		copiedSr: 'Pix key copied.',
		voluntary: 'Voluntary donation — any amount to support {author}.',
	},
	home: {
		title: 'Home',
		hero: {
			eyebrow: 'Music theory · Practical approach',
			title: 'Reference Method Simplified',
			byAuthor: 'By {author}',
			tagline:
				'RMS — a path to learning music theory with less to memorize and more clarity when you play.',
			subtitle:
				'Visual references, tablature, and scale maps that speed up memorization until it becomes instinct on your instrument.',
			ctaMethod: 'Explore the method',
			ctaNotes: 'Explore notes on the neck',
		},
		whatIs: {
			title: 'What is RMS?',
			body: 'Reference Method Simplified starts from a simple idea: instead of piling up dozens of isolated rules, you learn reference points that work as anchors — fixed landmarks from which you can deduce the rest quickly.',
		},
		pillars: [
			{
				icon: '♩',
				title: 'References, not rote memorization',
				description:
					'RMS organizes theory into visual and logical references that reduce how much you need to memorize. Instead of scattered rules, you learn shortcuts that connect to each other.',
			},
			{
				icon: '⚡',
				title: 'Speed before perfection',
				description:
					'The approach is unorthodox: the initial goal is to memorize fast enough that, in practice, everything becomes natural — on your instrument, in improvisation, in reading.',
			},
			{
				icon: '🎸',
				title: 'Built for strings',
				description:
					'Many examples use string-instrument tablature. The major-scale shapes and neck note map are designed for people who learn by playing.',
			},
		],
		practice: {
			title: 'How it works in practice',
			intro:
				'The method does not follow the traditional conservatory order. The priority is to memorize the essentials quickly — scales, notes, intervals — so that later, when you play, you do not have to think: you just play.',
			tabsAndStrings: {
				title: 'Tablature and strings',
				body: 'Most examples use string-instrument tablature — guitar, bass, cavaquinho, and similar. Each theoretical concept appears where you will actually use it: on the frets.',
			},
			majorScaleDrawings: {
				title: 'Major scale shapes',
				body: 'Visual major-scale patterns are one of the central RMS tools. Memorizing the shape on the neck is faster than abstract formulas — and it works in every key.',
			},
			noteFinder: {
				title: 'Note Finder',
				body: 'Before moving on to scales and harmony, RMS teaches you to locate notes on the neck. The Note Finder page illustrates that process step by step — the visual foundation for the rest of your study.',
				link: 'Go to the Note Finder',
			},
		},
		map: {
			title: 'How the site is organized',
			intro:
				'Each section covers part of the path. Start with the full method or jump straight to the tools — RMS is meant to be used in whatever order makes sense for you.',
			pages: [
				{
					href: '/metodo-referencia-simplifica',
					label: 'Reference Method Simplified',
					tag: 'Full read',
					description:
						'A start-to-finish explanation of the whole method: how the references work, the study order, and how each piece fits into your daily practice.',
				},
				{
					href: '/encontrador-de-notas',
					label: 'Note Finder',
					tag: 'Visual tool',
					description:
						'Interactive illustrations to locate notes on the instrument neck. This is the starting point for navigating the neck with RMS.',
				},
				{
					href: '/encontrador-de-escalas-do-metodo',
					label: 'Method Scale Finder',
					tag: 'Scales with RMS',
					description:
						'How to find scales with the method — adapted for string instruments, with the Greek modes of each tonic.',
				},
			],
		},
		cta: {
			title: 'Ready to begin?',
			body: 'Read the method from start to finish or explore the visual tools. The goal is the same: turn music theory into muscle memory as quickly as possible.',
			button: 'Read the full method',
		},
	},
	method: {
		title: 'Reference Method Simplified',
		intro: {
			beforeNotes:
				'Before reading about the method, it helps to already know how to find notes on the instrument neck.',
			goToNoteFinder: 'Go to the Note Finder',
			foundation:
				'The foundation of RMS is the major scale. The goal is to help you quickly understand how to find all the Greek modes — and therefore the natural minor scale too, which is the 6th Greek mode — from the major scale, seeing that changing which note you treat as the tonic (the key center) changes the name that same collection of notes receives.',
		},
		beforeNames: {
			title: 'Before naming the modes',
			subtitle: 'Let us call the Greek modes first, second, third… through the seventh Greek mode.',
			p1: 'We do not need to memorize names like Dorian or Mixolydian yet. RMS prioritizes visual references and the logic of scale degrees. First you learn where the notes are; the names come later, when they already make sense.',
			p2: 'To find the Greek modes, we need to master the major scale on the neck. From there, each mode is just a change of reference — which degree you treat as the tonic.',
		},
		majorOnNeck: {
			title: 'The major scale on the neck',
			subtitle: 'Fit the shape over one note and every other scale tone is revealed.',
			p1: 'The major scale can be found with the shapes below. When you place the pattern over a note — the tonic — you immediately know where the other degrees lie on the neck.',
			p2: 'Switch between the two shapes and drag degree 1 to try different keys. The neck below starts in G major.',
			p3: 'Notice how the shape shifts on the two highest strings — B and high E — when you drag the tonic to start the scale from higher strings. The major third between G and B requires that one-fret adjustment; it is the same detail that appears in the Note Finder.',
		},
		degreeExamples: {
			title: 'Find the degrees by hand',
			subtitle: 'With the major-scale shape, you can already locate any degree in any key.',
			intro:
				'We encourage you to practice fitting the shape over different notes and identifying the degrees. Three examples to start — try to solve them before revealing the answer:',
			examples: [
				{
					note: 'A',
					result: 'E',
					degree: '5th degree',
					description:
						'Fit the shape on A. Find the 5th degree on the neck — the perfect fifth of the key.',
				},
				{
					note: 'D',
					result: 'F♯',
					degree: '3rd degree',
					description:
						'Fit the shape on D. Locate the 3rd degree — the major third that defines the major sound.',
				},
				{
					note: 'C',
					result: 'B',
					degree: '7th degree',
					description:
						'Fit the shape on C. Where is the 7th degree? Think of the major seventh, one semitone below the tonic.',
				},
			],
			tonicPrefix: 'Tonic:',
			answerFormat: '{degree} = {result}',
		},
		degreeNames: {
			title: 'Naming the degrees (optional)',
			subtitle:
				'In the major scale, each degree has a name. Those names change when the interval departs from the major pattern.',
			tableHeaders: {
				degree: 'Degree',
				name: 'Name',
				note: 'Note',
			},
			degrees: [
				{ n: 1, name: 'Tonic', alt: 'Root' },
				{ n: 2, name: 'Supertonic', alt: '2nd degree / 9th (in extension)' },
				{ n: 3, name: 'Major third', alt: 'Defines the major quality' },
				{ n: 4, name: 'Perfect fourth', alt: 'Subdominant' },
				{ n: 5, name: 'Perfect fifth', alt: 'Dominant' },
				{ n: 6, name: 'Major sixth', alt: 'Major sixth' },
				{ n: 7, name: 'Major seventh', alt: 'One semitone below the tonic' },
				{ n: 8, name: 'Octave', alt: 'Tonic again' },
			],
			alterationsTitle: 'When a degree departs from the major scale',
			alterationsIntro:
				'Always compare with the interval you would find in the major scale built on the same tonic. One fret higher or lower changes the degree name:',
			alterationsHeaders: {
				degree: 'Degree',
				back: '1 fret lower',
				forward: '1 fret higher',
			},
			alterations: [
				{ degree: '2nd degree', back: 'Minor second / minor 9th', forward: 'Augmented second / major 9th' },
				{ degree: '3rd degree', back: 'Minor third', forward: 'Augmented third' },
				{ degree: '4th degree', back: 'Diminished fourth', forward: 'Augmented fourth' },
				{ degree: '5th degree', back: 'Diminished fifth', forward: 'Augmented fifth' },
				{ degree: '6th degree', back: 'Minor sixth', forward: 'Augmented sixth' },
				{ degree: '7th degree', back: 'Minor seventh', forward: 'Augmented seventh' },
			],
		},
		greekModes: {
			title: 'How to find the Greek modes',
			subtitle: 'The same major-scale shape — only the note you treat as tonic changes.',
			p1: 'So far we have used first Greek mode, second Greek mode, and so on — without traditional names. The idea is simple: the major-scale shape on the neck never changes form. What changes is which note you choose as the reference (tonic).',
			p2: 'Imagine a G major scale fitted on the neck. If you treat G as the tonic, you are in the first Greek mode. If you treat A (the second degree) as the tonic, you are in the second Greek mode — the same notes, reorganized from a different reference.',
			p3: 'Repeat for each degree: third degree as tonic → third Greek mode; fourth degree as tonic → fourth Greek mode; and so on through the seventh degree. That is why mastering one major-scale shape gives you access to every mode — including natural minor, which is the 6th Greek mode.',
			visualSummaryTitle: 'Visual summary',
			visualNotes: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
			visualModeLabel: '{n} mode',
			visualCaption:
				'In G major: each scale tone, when treated as the tonic, produces a different Greek mode.',
			traditionalNamesTitle: 'Traditional names',
			traditionalNamesIntro:
				'When you are comfortable with the numbering, these are the traditional names of each Greek mode:',
			tonicOnDegree: 'Tonic on the {degree}',
		},
	},
	noteFinderPage: {
		title: 'Note Finder',
		p1: 'Click any note on the neck to highlight every other position where it appears. Use the switcher to move between bass (4 strings) and guitar (6 strings).',
		p2: 'On the neck you will see the letters A, B, C, D, E, F, and G.',
		p3: 'In standard guitar tuning (EADGBE), each open string starts on its tuning note: low E, A, D, G, B, and high E. Fret 0 is the open string; from there, move up one fret at a time.',
		p4: 'To name the following frets, remember: after B and E there is no sharp — the next fret is C and F. On the other notes, the next fret is the sharp (C♯, D♯, F♯, G♯, A♯).',
	},
	noteFinder: {
		clickPrompt: 'Click a fret to see every position of that note on the neck.',
		selectedNote: 'Selected note:',
		positionsOnNeck: '{count} positions on the neck',
		tabConvention:
			'Tab convention: highest string at the top. Frets from 0 (open string) to {fretCount}.',
		ariaLabel: '{note} on string {string}, fret {fret}',
		guideTitle: 'How to find notes',
		guideIntro:
			'Beyond locating notes visually on the neck, RMS uses five reference positions to find the same note elsewhere. Practice each one until it becomes automatic.',
	},
	notePositions: [
		{
			number: 1,
			title: 'Common octave',
			description:
				'Play a note and find the same note 2 frets higher and 2 strings lower (toward the bass strings).',
			ps: 'On guitar, when the path crosses the B or high E strings (major third tuning between G and B), shift one extra fret forward — 3 frets ahead instead of 2.',
		},
		{
			number: 2,
			title: 'C-shape position',
			description:
				'Play a note and find the same note 2 frets lower and 3 strings lower.',
			ps: 'On guitar, if the search crosses the B or high E strings, shift one fret less backward — 1 fret back instead of 2.',
		},
		{
			number: 3,
			title: 'Tuning position',
			description:
				'Play a note and find the same note on the next lower string, 5 frets back — as when tuning, comparing fret 5 with the open string below.',
			ps: 'On guitar, between the G and B strings the tuning distance is 4 frets (not 5). Use 4 frets back when crossing those two strings.',
		},
		{
			number: 4,
			title: 'Tuning position 2',
			description:
				'Play a note and, on the string below, find the same note one octave higher, 7 frets ahead — like the open string and fret 7 on the next string down.',
			ps: 'On guitar, when moving down from the B or high E string to the string immediately below, use 6 frets ahead instead of 7 to find the octave above.',
		},
		{
			number: 5,
			title: '12 frets ahead',
			description:
				'The same note appears 12 frets ahead on the same string — the exact octave on the neck.',
			ps: 'This position is not affected by the G–B tuning difference because it stays on the same string. It works the same on bass, guitar, and similar instruments.',
		},
	],
	scaleFinderPage: {
		title: 'Method Scale Finder',
		intro:
			'Fit the major-scale shape over any tonic and see, for each degree, which Greek mode appears and how to name each note’s interval relative to the new reference.',
	},
	scaleExplorer: {
		patternLabel: 'Major scale shape',
		tonicMajor: '{note} major',
		dragHint:
			'Drag degree 1 (gold) or click any fret to fit the shape over another tonic.',
	},
	scaleFinder: {
		patternLabel: 'Major scale shape',
		tonicMajor: '{note} major',
		dragHint:
			'Drag degree 1 or click any fret to fit the shape. Below, each scale degree as tonic reveals a Greek mode and its intervals.',
		modesTitle: 'Greek modes of this scale',
		modesIntro: 'Same notes as {note} major — only which degree you treat as tonic changes.',
		tonicDegreeInfo: '({degree} degree of {majorTonic} major)',
	},
	greekModes: {
		modes: [
			{
				number: 1,
				name: 'Ionian',
				adjective: 'Ionian',
				ordinalLabel: 'first Greek mode',
				aliases: ['Major scale', 'Major mode', 'Ionian'],
				alias: 'Major scale',
				description:
					'The tonic coincides with the first degree of the major scale. This is the starting reference.',
			},
			{
				number: 2,
				name: 'Dorian',
				adjective: 'Dorian',
				ordinalLabel: 'second Greek mode',
				aliases: ['Dorian scale', 'Dorian'],
				alias: 'Second Greek mode',
				description:
					'The tonic falls on the second degree. Same major-scale notes, new reference.',
			},
			{
				number: 3,
				name: 'Phrygian',
				adjective: 'Phrygian',
				ordinalLabel: 'third Greek mode',
				aliases: ['Phrygian scale', 'Phrygian'],
				alias: 'Third Greek mode',
				description:
					'The tonic falls on the third degree. The whole- and half-step arrangement changes the color.',
			},
			{
				number: 4,
				name: 'Lydian',
				adjective: 'Lydian',
				ordinalLabel: 'fourth Greek mode',
				aliases: ['Lydian scale', 'Lydian'],
				alias: 'Fourth Greek mode',
				description:
					'The tonic falls on the fourth degree. Characteristic brightness from the implied augmented fourth.',
			},
			{
				number: 5,
				name: 'Mixolydian',
				adjective: 'Mixolydian',
				ordinalLabel: 'fifth Greek mode',
				aliases: ['Mixolydian scale', 'Mixolydian'],
				alias: 'Fifth Greek mode',
				description:
					'The tonic falls on the fifth degree. Dominant color, with a minor seventh relative to the new tonic.',
			},
			{
				number: 6,
				name: 'Aeolian',
				adjective: 'Aeolian',
				ordinalLabel: 'sixth Greek mode',
				aliases: ['Natural minor scale', 'Aeolian minor scale', 'Aeolian'],
				alias: 'Natural minor scale',
				description:
					'The tonic falls on the sixth degree — the sixth Greek mode, also known as the natural minor scale.',
			},
			{
				number: 7,
				name: 'Locrian',
				adjective: 'Locrian',
				ordinalLabel: 'seventh Greek mode',
				aliases: ['Locrian scale', 'Locrian'],
				alias: 'Seventh Greek mode',
				description:
					'The tonic falls on the seventh degree. The most unstable mode, rarely used as a main key center.',
			},
		],
	},
	scalePatterns: {
		compact: {
			label: 'Shape 1',
			description: 'Strings 6, 5, and 4 — ideal to start.',
		},
		extended: {
			label: 'Shape 2',
			description: 'Strings 6 through 1 — covers more of the neck.',
		},
	},
	positionDiagrams: {
		guitar: {
			octaveCommon: {
				caption: 'Low E fret 3 → D fret 5 (same pitch G, +2 frets, 2 strings lower)',
				captionNote: 'Guitar — common octave',
			},
			cPosition: {
				caption: 'G fret 5 → low E fret 8 (−2 frets, 3 strings lower)',
				captionNote: 'Guitar — C-shape position',
			},
			tuning: {
				caption: 'Open G → D fret 5 (tuning: −5 frets on the string below)',
				captionNote: 'Like tuning: fret 5 = open string above',
			},
			tuning2: {
				caption: 'Open A → D fret 7 (octave above, +7 frets on the string below)',
				captionNote: 'Open string and 7th fret on the next string down',
			},
			twelfthFret: {
				caption: 'Open low E → low E fret 12 (12 frets ahead, same string)',
				captionNote: 'Guitar — octave on the same string',
			},
		},
		bass: {
			octaveCommon: {
				caption: 'Low E fret 3 → D fret 5 (same pitch G, +2 frets, 2 strings lower)',
				captionNote: 'Bass — common octave',
			},
			cPosition: {
				caption: 'G fret 5 → low E fret 8 (same pitch G, −2 frets, 3 strings lower)',
				captionNote: 'Bass — C-shape position',
			},
			tuning: {
				caption: 'Open G → D fret 5 (tuning: −5 frets on the string below)',
				captionNote: 'Like tuning: fret 5 = open string below',
			},
			tuning2: {
				caption: 'Open A → low E fret 5 (tuning: same note on the string below)',
				captionNote: 'Open string and fret 5 on the next string down',
			},
			twelfthFret: {
				caption: 'Open low E → low E fret 12 (12 frets ahead, same string)',
				captionNote: 'Bass — octave on the same string',
			},
		},
		bassPs: {
			1: 'On bass, every string is tuned in fourths — the rule applies uniformly, with no adjustment.',
			2: 'On bass, every string is tuned in fourths — the rule applies uniformly, with no adjustment.',
			3: 'On bass, every string is tuned in fourths — always use 5 frets back on the string below.',
			4: 'On bass, every string is tuned in fourths — use 5 frets ahead on the lower string for the octave above (or compare with fret 5 in tuning).',
			5: 'This position does not depend on inter-string tuning because it stays on the same string. It works the same on bass, guitar, and similar instruments.',
		},
	},
	intervals: {
		tonic: 'Tonic',
		minor2: 'Minor second',
		major2: 'Major second',
		minor3: 'Minor third',
		major3: 'Major third',
		perfect4: 'Perfect fourth',
		augmented4: 'Augmented fourth',
		diminished5: 'Diminished fifth',
		perfect5: 'Perfect fifth',
		minor6: 'Minor sixth',
		major6: 'Major sixth',
		minor7: 'Minor seventh',
		major7: 'Major seventh',
	},
};
