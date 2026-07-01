import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js';
import type { Locale } from '../../i18n';
import { FRET_COUNT, INSTRUMENTS, getNoteAtFret } from '../../lib/notes';
import {
	DEFAULT_G_ROOT,
	getMajorScalePatterns,
	type ScalePatternId,
	getPatternDotsAtRoot,
	isDotInBounds,
} from '../../lib/major-scale-patterns';

export function useMajorScaleExplorer(locale: Locale) {
	const [patternId, setPatternId] = createSignal<ScalePatternId>('compact');
	const [root, setRoot] = createSignal(DEFAULT_G_ROOT);
	const [dragging, setDragging] = createSignal(false);
	const [didDrag, setDidDrag] = createSignal(false);

	const patterns = createMemo(() => getMajorScalePatterns(locale));
	const pattern = createMemo(() => patterns()[patternId()]);
	const scaleDots = createMemo(() => getPatternDotsAtRoot(pattern(), root()));

	const tonicName = createMemo(() => {
		const r = root();
		return getNoteAtFret(INSTRUMENTS.guitar.openMidi[r.stringIndex], r.fret);
	});

	function isScaleDot(stringIndex: number, fret: number) {
		return scaleDots().find(
			(d) => d.stringIndex === stringIndex && d.fret === fret && isDotInBounds(d, FRET_COUNT),
		);
	}

	function setRootFromCell(stringIndex: number, fret: number) {
		if (stringIndex < 0 || stringIndex > 5 || fret < 0 || fret > FRET_COUNT) return;
		setRoot({ stringIndex, fret });
	}

	function handlePointerDown(stringIndex: number, fret: number, e: PointerEvent) {
		const dot = isScaleDot(stringIndex, fret);
		if (!dot || dot.degree !== 1) return;
		e.preventDefault();
		setDragging(true);
		setDidDrag(false);
	}

	function handleCellClick(stringIndex: number, fret: number) {
		if (didDrag()) {
			setDidDrag(false);
			return;
		}
		setRootFromCell(stringIndex, fret);
	}

	createEffect(() => {
		if (!dragging()) return;

		const onPointerMove = (e: PointerEvent) => {
			const el = document.elementFromPoint(e.clientX, e.clientY);
			const cell = el?.closest<HTMLElement>('[data-fret-cell]');
			if (!cell) return;

			const s = Number(cell.dataset.string);
			const f = Number(cell.dataset.fret);
			if (Number.isNaN(s) || Number.isNaN(f)) return;

			setDidDrag(true);
			setRootFromCell(s, f);
		};

		const onPointerUp = () => {
			setDragging(false);
		};

		window.addEventListener('pointermove', onPointerMove);
		window.addEventListener('pointerup', onPointerUp);
		window.addEventListener('pointercancel', onPointerUp);

		onCleanup(() => {
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerup', onPointerUp);
			window.removeEventListener('pointercancel', onPointerUp);
		});
	});

	return {
		patternId,
		setPatternId,
		root,
		pattern,
		patterns,
		scaleDots,
		tonicName,
		dragging,
		isScaleDot,
		handlePointerDown,
		handleCellClick,
	};
}
