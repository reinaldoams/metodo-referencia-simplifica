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

export function noteToPtLabel(note: NoteName): string {
	return NOTE_PT_LABELS[note];
}
