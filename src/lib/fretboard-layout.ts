export const FRET_CELL_W = '4.25rem';
export const FRET_CELL_H = '3rem';
export const FRET_CELL_W_PX = 68;
export const FRET_CELL_H_PX = 48;
export const FRET_LABEL_COL = '2.75rem';
export const FRET_NUT_W_PX = 7;

/** Horizontal center of a fret cell (0 = open string). */
export function fretCenterX(fret: number): number {
	return (fret + 0.5) * FRET_CELL_W_PX;
}

/** Vertical center of a string row (0 = highest string in tab). */
export function stringCenterY(stringIndex: number): number {
	return stringIndex * FRET_CELL_H_PX + FRET_CELL_H_PX / 2;
}
