import { For, Show, createEffect, createMemo, createSignal } from 'solid-js';
import { getTranslations, type Locale } from '../i18n';
import FretboardVisual from './FretboardVisual';
import {
	FRET_CELL_H,
	FRET_CELL_W,
	FRET_LABEL_COL,
} from '../lib/fretboard-layout';
import { noteToLabel } from '../lib/note-labels';
import {
	FRET_COUNT,
	INSTRUMENTS,
	type InstrumentId,
	getFretboardNotes,
	type NoteName,
} from '../lib/notes';

const LABEL_COL = FRET_LABEL_COL;
const CELL_W = FRET_CELL_W;
const CELL_H = FRET_CELL_H;

interface Props {
	instrumentId: InstrumentId;
	locale: Locale;
}

export default function NoteFinder(props: Props) {
	const t = () => getTranslations(props.locale);
	const nf = () => t().noteFinder as Record<string, string>;
	const [selected, setSelected] = createSignal<{ stringIndex: number; fret: number } | null>(null);

	const instrument = createMemo(() => INSTRUMENTS[props.instrumentId]);
	const fretboard = createMemo(() => getFretboardNotes(instrument()));
	const stringCount = createMemo(() => instrument().stringLabels.length);

	createEffect(() => {
		props.instrumentId;
		setSelected(null);
	});

	const selectedNote = createMemo<NoteName | null>(() => {
		const position = selected();
		if (!position) return null;
		return fretboard()[position.stringIndex][position.fret];
	});

	const gridColumns = createMemo(
		() => `${LABEL_COL} repeat(${FRET_COUNT + 1}, ${CELL_W})`,
	);

	function handleCellClick(stringIndex: number, fret: number) {
		const current = selected();
		if (current?.stringIndex === stringIndex && current.fret === fret) {
			setSelected(null);
			return;
		}
		setSelected({ stringIndex, fret });
	}

	function cellClass(stringIndex: number, fret: number, note: NoteName) {
		const position = selected();
		const isSelected =
			position?.stringIndex === stringIndex && position.fret === fret;
		const isMatch = selectedNote() === note && position !== null;

		if (isSelected) {
			return 'border-music-accent bg-music-accent text-music-on-accent shadow-lg shadow-music-accent/40 z-20';
		}
		if (isMatch) {
			return 'border-music-accent bg-music-accent-hover text-music-on-accent shadow-md shadow-music-accent/30 z-10';
		}
		if (position) {
			return 'border-white/5 bg-music-bg/55 text-music-muted/45';
		}
		return 'border-white/15 bg-music-bg/75 text-music-text backdrop-blur-sm hover:border-music-accent/50 hover:bg-music-accent/15';
	}

	return (
		<div class="space-y-8">
			<Show
				when={selectedNote()}
				fallback={<p class="text-sm text-music-muted">{nf().clickPrompt}</p>}
			>
				{(note) => (
					<p class="text-sm text-music-muted">
						{nf().selectedNote}{' '}
						<span class="font-semibold text-music-text">
							{noteToLabel(note(), props.locale)}
						</span>
						{' · '}
						<span class="text-music-muted">
							{nf().positionsOnNeck.replace(
								'{count}',
								String(countMatches(fretboard(), note())),
							)}
						</span>
					</p>
				)}
			</Show>

			<div class="overflow-x-auto rounded-xl border border-white/10 bg-music-surface/30 p-4 md:p-6">
				<div class="inline-block min-w-max">
					<div
						class="mb-2 grid"
						style={{ 'grid-template-columns': gridColumns() }}
					>
						<div />
						<For each={Array.from({ length: FRET_COUNT + 1 }, (_, i) => i)}>
							{(fret) => (
								<div class="flex items-end justify-center pb-1">
									<span class="text-[0.65rem] font-medium tracking-wide text-music-muted/80 uppercase">
										{fret === 0 ? t().common.openString : fret}
									</span>
								</div>
							)}
						</For>
					</div>

					<div
						class="relative"
						style={{ width: `calc(${LABEL_COL} + ${FRET_COUNT + 1} * ${CELL_W})` }}
					>
						<div
							class="pointer-events-none absolute top-0 rounded-md shadow-inner shadow-black/30"
							style={{
								left: LABEL_COL,
								width: `calc(${FRET_COUNT + 1} * ${CELL_W})`,
								height: `calc(${stringCount()} * ${CELL_H})`,
							}}
						>
							<FretboardVisual
								stringCount={stringCount()}
								fretCount={FRET_COUNT}
							/>
						</div>

						<div
							class="relative z-10 grid"
							style={{
								'grid-template-columns': gridColumns(),
								'grid-template-rows': `repeat(${stringCount()}, ${CELL_H})`,
							}}
						>
							<For each={fretboard()}>
								{(stringNotes, stringIndex) => (
									<div class="contents">
										<div class="flex h-full items-center justify-end pr-2 font-mono text-sm font-semibold text-music-text">
											{instrument().stringLabels[stringIndex()]}
										</div>
										<For each={stringNotes}>
											{(note, fret) => (
												<div class="relative flex h-full w-full items-center justify-center">
													<button
														type="button"
														class={`absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[0.7rem] font-semibold transition-all duration-150 md:size-11 md:text-xs ${cellClass(stringIndex(), fret(), note)}`}
														aria-label={nf()
															.ariaLabel.replace('{note}', noteToLabel(note, props.locale))
															.replace('{string}', instrument().stringLabels[stringIndex()])
															.replace('{fret}', String(fret()))}
														aria-pressed={
															selected()?.stringIndex === stringIndex() &&
															selected()?.fret === fret()
														}
														onClick={() => handleCellClick(stringIndex(), fret())}
													>
														{noteToLabel(note, props.locale)}
													</button>
												</div>
											)}
										</For>
									</div>
								)}
							</For>
						</div>
					</div>
				</div>
			</div>

			<p class="text-xs text-music-muted">
				{nf().tabConvention.replace('{fretCount}', String(FRET_COUNT))}
			</p>
		</div>
	);
}

function countMatches(fretboard: NoteName[][], note: NoteName): number {
	return fretboard.flat().filter((cell) => cell === note).length;
}
