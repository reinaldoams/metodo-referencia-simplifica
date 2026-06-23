import { For, Show } from 'solid-js';
import FretboardVisual from '../FretboardVisual';
import {
	FRET_CELL_H,
	FRET_CELL_W,
	FRET_LABEL_COL,
} from '../../lib/fretboard-layout';
import { FRET_COUNT, INSTRUMENTS, getFretboardNotes, getNoteAtFret } from '../../lib/notes';
import { isDotInBounds } from '../../lib/major-scale-patterns';
import type { useMajorScaleExplorer } from './useMajorScaleExplorer';

type Explorer = ReturnType<typeof useMajorScaleExplorer>;

interface Props {
	explorer: Explorer;
	showDegreeLegend?: boolean;
}

const LABEL_COL = FRET_LABEL_COL;
const CELL_W = FRET_CELL_W;
const CELL_H = FRET_CELL_H;
const STRING_COUNT = 6;

export default function MajorScaleFretboard(props: Props) {
	const fretboard = () => getFretboardNotes(INSTRUMENTS.guitar);
	const gridColumns = () => `${LABEL_COL} repeat(${FRET_COUNT + 1}, ${CELL_W})`;

	return (
		<>
			<div class="overflow-x-auto rounded-xl border border-white/10 bg-music-surface/30 p-4">
				<div class="inline-block min-w-max">
					<div class="mb-2 grid" style={{ 'grid-template-columns': gridColumns() }}>
						<div />
						<For each={Array.from({ length: FRET_COUNT + 1 }, (_, i) => i)}>
							{(fret) => (
								<div class="flex items-end justify-center pb-1">
									<span class="text-xs font-medium tracking-wide text-music-muted/80 uppercase md:text-sm">
										{fret === 0 ? 'solta' : fret}
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
								height: `calc(${STRING_COUNT} * ${CELL_H})`,
							}}
						>
							<FretboardVisual stringCount={STRING_COUNT} fretCount={FRET_COUNT} />
						</div>

						<div
							class="relative z-10 grid select-none"
							classList={{
								'cursor-grabbing': props.explorer.dragging(),
								'cursor-grab': !props.explorer.dragging(),
							}}
							style={{
								'grid-template-columns': gridColumns(),
								'grid-template-rows': `repeat(${STRING_COUNT}, ${CELL_H})`,
							}}
						>
							<For each={fretboard()}>
								{(stringNotes, stringIndex) => (
									<div class="contents">
										<div class="flex h-full items-center justify-end pr-2 font-mono text-base font-semibold text-music-text md:text-lg">
											{INSTRUMENTS.guitar.stringLabels[stringIndex()]}
										</div>
										<For each={stringNotes}>
											{(note, fret) => {
												const dot = () =>
													props.explorer.isScaleDot(stringIndex(), fret());

												return (
													<div
														class="relative flex h-full w-full items-center justify-center"
														data-fret-cell
														data-string={stringIndex()}
														data-fret={fret()}
													>
														<button
															type="button"
															class={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border font-semibold transition-all duration-100 ${
																dot()
																	? dot()!.degree === 1
																		? 'z-20 size-11 touch-none border-music-accent bg-music-accent text-music-on-accent md:size-12'
																		: 'z-10 size-10 border-music-accent/70 bg-music-accent-hover text-music-on-accent md:size-11'
																	: 'z-0 size-9 border-white/5 bg-music-bg/40 text-xs text-music-muted/40 md:size-10 md:text-sm'
															}`}
															onPointerDown={(e) =>
																props.explorer.handlePointerDown(
																	stringIndex(),
																	fret(),
																	e,
																)
															}
															onClick={() =>
																props.explorer.handleCellClick(stringIndex(), fret())
															}
															aria-label={
																dot()
																	? `Grau ${dot()!.degree}: ${note}`
																	: note
															}
														>
															<Show when={dot()} fallback={note}>
																<span class="pointer-events-none text-sm md:text-base">
																	{dot()!.degree}
																</span>
															</Show>
														</button>
													</div>
												);
											}}
										</For>
									</div>
								)}
							</For>
						</div>
					</div>
				</div>
			</div>

			<Show when={props.showDegreeLegend !== false}>
				<div class="flex flex-wrap gap-2">
					<For
						each={props.explorer
							.scaleDots()
							.filter((d) => isDotInBounds(d, FRET_COUNT))}
					>
						{(dot) => (
							<span class="rounded-full bg-music-accent/15 px-3 py-1.5 text-sm text-music-text md:text-base">
								{dot.degree} ={' '}
								{getNoteAtFret(
									INSTRUMENTS.guitar.openMidi[dot.stringIndex],
									dot.fret,
								)}
							</span>
						)}
					</For>
				</div>
			</Show>
		</>
	);
}
