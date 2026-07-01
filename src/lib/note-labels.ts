import type { Locale } from '../i18n/types';
import type { NoteName } from './notes';

export const NOTE_PT_LABELS: Record<NoteName, string> = {
	C: 'Dó',
	'C#': 'Dó♯',
	D: 'Ré',
	'D#': 'Ré♯',
	E: 'Mi',
	F: 'Fá',
	'F#': 'Fá♯',
	G: 'Sol',
	'G#': 'Sol♯',
	A: 'Lá',
	'A#': 'Lá♯',
	B: 'Si',
};

export const NOTE_EN_LABELS: Record<NoteName, string> = {
	C: 'C',
	'C#': 'C♯',
	D: 'D',
	'D#': 'D♯',
	E: 'E',
	F: 'F',
	'F#': 'F♯',
	G: 'G',
	'G#': 'G♯',
	A: 'A',
	'A#': 'A♯',
	B: 'B',
};

export function noteToLabel(note: NoteName, locale: Locale = 'pt'): string {
	return locale === 'en' ? NOTE_EN_LABELS[note] : NOTE_PT_LABELS[note];
}

export function noteToPtLabel(note: NoteName): string {
	return noteToLabel(note, 'pt');
}
