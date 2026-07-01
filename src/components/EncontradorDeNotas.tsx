import { For, Show, createMemo, createSignal } from 'solid-js';
import { getTranslations, type Locale } from '../i18n';
import { getInstruments, type InstrumentId } from '../lib/notes';
import NoteFinder from './NoteFinder';
import NotePositionsGuide from './note-positions/NotePositionsGuide';

const INSTRUMENT_IDS: InstrumentId[] = ['guitar', 'bass'];

interface Props {
	locale: Locale;
}

export default function EncontradorDeNotas(props: Props) {
	const t = () => getTranslations(props.locale);
	const instrumentLabels = createMemo(() => {
		const instruments = getInstruments(props.locale);
		return {
			guitar: instruments.guitar.label,
			bass: instruments.bass.label,
		};
	});
	const [instrumentId, setInstrumentId] = createSignal<InstrumentId>('guitar');

	return (
		<div class="space-y-0">
			<div class="relative z-20 mb-8 flex flex-wrap items-center gap-3">
				<span class="text-sm font-medium text-music-muted">{t().common.instrument}</span>
				<div class="inline-flex rounded-lg border border-white/10 bg-music-surface p-1">
					<For each={INSTRUMENT_IDS}>
						{(id) => (
							<button
								type="button"
								class="shrink-0 rounded-md px-4 py-2 text-sm font-medium transition-colors"
								classList={{
									'bg-music-accent text-music-on-accent': instrumentId() === id,
									'text-music-muted hover:text-music-text': instrumentId() !== id,
								}}
								aria-pressed={instrumentId() === id}
								onClick={() => setInstrumentId(id)}
							>
								{instrumentLabels()[id]}
							</button>
						)}
					</For>
				</div>
			</div>

			<Show when={instrumentId()} keyed>
				{(id) => (
					<>
						<NoteFinder instrumentId={id} locale={props.locale} />
						<NotePositionsGuide instrumentId={id} locale={props.locale} />
					</>
				)}
			</Show>
		</div>
	);
}
