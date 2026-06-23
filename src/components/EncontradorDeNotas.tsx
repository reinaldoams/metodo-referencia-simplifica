import { For, createSignal } from 'solid-js';
import NoteFinder from './NoteFinder';
import NotePositionsGuide from './note-positions/NotePositionsGuide';
import { INSTRUMENTS, type InstrumentId } from '../lib/notes';

export default function EncontradorDeNotas() {
	const [instrumentId, setInstrumentId] = createSignal<InstrumentId>('guitar');

	function handleInstrumentChange(id: InstrumentId) {
		setInstrumentId(id);
	}

	return (
		<div class="space-y-0">
			<div class="mb-8 flex flex-wrap items-center gap-3">
				<span class="text-sm font-medium text-music-muted">Instrumento:</span>
				<div class="inline-flex rounded-lg border border-white/10 bg-music-surface p-1">
					<For each={Object.values(INSTRUMENTS)}>
						{(item) => (
							<button
								type="button"
								class="rounded-md px-4 py-2 text-sm font-medium transition-colors"
								classList={{
									'bg-music-accent text-music-on-accent': instrumentId() === item.id,
									'text-music-muted hover:text-music-text': instrumentId() !== item.id,
								}}
								onClick={() => handleInstrumentChange(item.id)}
							>
								{item.label}
							</button>
						)}
					</For>
				</div>
			</div>

			<NoteFinder instrumentId={instrumentId()} />

			<NotePositionsGuide instrumentId={instrumentId()} />
		</div>
	);
}
