import { For } from 'solid-js';
import { MAJOR_SCALE_PATTERNS } from '../../lib/major-scale-patterns';
import { noteToPtLabel } from '../../lib/note-labels';
import MajorScaleFretboard from './MajorScaleFretboard';
import { useMajorScaleExplorer } from './useMajorScaleExplorer';

export default function MajorScaleExplorer() {
	const explorer = useMajorScaleExplorer();

	return (
		<div class="w-full space-y-6 rounded-2xl border border-white/10 bg-music-surface/40 p-4 md:p-6">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p class="text-base font-medium text-music-muted md:text-lg">Desenho da escala maior</p>
					<p class="text-xl font-serif text-music-text md:text-2xl">
						Tônica: <span class="text-music-text">{noteToPtLabel(explorer.tonicName())}</span>{' '}
						maior
					</p>
				</div>
				<div class="inline-flex rounded-lg border border-white/10 bg-music-bg/50 p-1">
					<For each={Object.values(MAJOR_SCALE_PATTERNS)}>
						{(item) => (
							<button
								type="button"
								class="rounded-md px-4 py-2.5 text-base font-medium transition-colors md:text-lg"
								classList={{
									'bg-music-accent text-music-on-accent': explorer.patternId() === item.id,
									'text-music-muted hover:text-music-text': explorer.patternId() !== item.id,
								}}
								onClick={() => explorer.setPatternId(item.id)}
							>
								{item.label}
							</button>
						)}
					</For>
				</div>
			</div>

			<p class="text-base text-music-muted md:text-lg">{explorer.pattern().description}</p>
			<p class="text-base text-music-muted md:text-lg">
				Arraste o <span class="font-semibold text-music-text">grau 1</span> (dourado) ou
				clique em qualquer casa para encaixar o desenho sobre outra tônica.
			</p>

			<MajorScaleFretboard explorer={explorer} />
		</div>
	);
}
