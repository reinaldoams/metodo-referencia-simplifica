export type Locale = 'pt' | 'en';

export const LOCALES: Locale[] = ['pt', 'en'];

export const DEFAULT_LOCALE: Locale = 'pt';

export interface NavTranslations {
	home: string;
	noteFinder: string;
	method: string;
	scaleFinder: string;
}

export interface Translations {
	htmlLang: string;
	siteName: string;
	nav: NavTranslations;
	lang: { toggle: string; pt: string; en: string };
	footer: string;
	author: { by: string; methodAndSite: string; toolBy: string };
	common: {
		major: string;
		tonic: string;
		tonicLabel: string;
		degree: string;
		degree1: string;
		degree1Golden: string;
		ordinalDegree: (n: number) => string;
		ordinalMode: (n: number) => string;
		position: string;
		positionNumber: (n: number) => string;
		ps: string;
		openString: string;
		instrument: string;
		alsoKnownAs: string;
		revealAnswer: string;
		access: string;
		arrow: string;
	};
	instruments: { guitar: string; bass: string };
	donation: {
		sectionTitle: string;
		freeBody: string;
		gratitude: string;
		supportPix: string;
		qrAlt: string;
		scanHint: string;
		keyLabel: string;
		copy: string;
		copied: string;
		copiedSr: string;
		voluntary: string;
	};
	home: Record<string, unknown>;
	method: Record<string, unknown>;
	noteFinderPage: Record<string, unknown>;
	noteFinder: Record<string, unknown>;
	notePositions: Record<string, unknown>;
	scaleFinderPage: Record<string, unknown>;
	scaleExplorer: Record<string, unknown>;
	scaleFinder: Record<string, unknown>;
	greekModes: Record<string, unknown>;
	scalePatterns: Record<string, unknown>;
	positionDiagrams: Record<string, unknown>;
	intervals: Record<string, string>;
}
