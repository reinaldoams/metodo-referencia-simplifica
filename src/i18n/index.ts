import type { Locale, Translations } from './types';
import { en } from './en';
import { pt } from './pt';

export type { Locale, Translations } from './types';
export { DEFAULT_LOCALE, LOCALES } from './types';

const translations: Record<Locale, Translations> = { pt, en };

export function getTranslations(locale: string | undefined): Translations {
	if (locale === 'en') return en;
	return pt;
}

export function localePath(path: string, locale: Locale): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const clean = normalized.replace(/^\/en(?=\/|$)/, '') || '/';
	const suffix = clean === '/' ? '' : clean;
	return locale === 'en' ? `/en${suffix}` : suffix || '/';
}

export function switchLocalePath(pathname: string, target: Locale): string {
	const clean = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
	return localePath(clean, target);
}

export function pathWithoutLocale(pathname: string): string {
	const clean = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
	return clean === '/' ? '' : clean.slice(1);
}
