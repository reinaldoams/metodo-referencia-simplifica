import { For } from 'solid-js';
import { NOTE_POSITIONS } from '../../data/note-positions';
import { getPositionPs } from '../../lib/position-diagrams';
import type { InstrumentId } from '../../lib/notes';
import PositionDiagram from './PositionDiagram';

interface Props {
	instrumentId: InstrumentId;
}

export default function NotePositionsGuide(props: Props) {
	return (
		<section class="mt-20 border-t border-white/10 pt-16">
			<div class="mb-12 max-w-3xl">
				<h2 class="text-2xl md:text-3xl">
					Como encontrar as notas
				</h2>
				<p class="mt-4 text-music-muted">
					Além de localizar visualmente no braço, o MRS usa cinco posições de referência para
					encontrar a mesma nota em outro lugar. Pratique cada uma até se tornar automática.
				</p>
			</div>

			<div class="space-y-12">
				<For each={NOTE_POSITIONS}>
					{(position) => (
						<article class="overflow-hidden rounded-2xl border border-white/10 bg-music-surface/40">
							<div class="grid gap-0 md:grid-cols-2">
								<div class="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
									<span class="mb-2 inline-block rounded-full bg-music-accent/15 px-3 py-1 text-xs font-medium tracking-wide text-music-text uppercase">
										Posição {position.number}
									</span>
									<h3 class="mb-3 text-xl">{position.title}</h3>
									<p class="leading-relaxed text-music-muted">{position.description}</p>
									<div class="mt-5 rounded-lg border border-music-accent/25 bg-music-accent/5 px-4 py-3">
										<p class="text-sm leading-relaxed text-music-text">
											<span class="font-semibold text-music-text">PS:</span>{' '}
											{getPositionPs(position.number, props.instrumentId, position.ps)}
										</p>
									</div>
								</div>
								<div class="w-full min-w-0 self-stretch bg-music-bg/30 p-4 md:p-6">
									<PositionDiagram
										type={position.diagram}
										instrumentId={props.instrumentId}
									/>
								</div>
							</div>
						</article>
					)}
				</For>
			</div>
		</section>
	);
}
