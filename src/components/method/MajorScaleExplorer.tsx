import { For } from 'solid-js';
import { getTranslations, type Locale } from '../../i18n';
import { noteToLabel } from '../../lib/note-labels';
import MajorScaleFretboard from './MajorScaleFretboard';
import { useMajorScaleExplorer } from './useMajorScaleExplorer';

interface Props {
	locale: Locale;
}

export default function MajorScaleExplorer(props: Props) {
	const t = () => getTranslations(props.locale);
	const explorer = useMajorScaleExplorer(props.locale);

	return (
		<div class="w-full space-y-6 rounded-2xl border border-white/10 bg-music-surface/40 p-4 md:p-6">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p class="text-base font-medium text-music-muted md:text-lg">
						{(t().scaleExplorer as { patternLabel: string }).patternLabel}
					</p>
					<p class="text-xl font-serif text-music-text md:text-2xl">
						{t().common.tonicLabel}{' '}
						<span class="text-music-text">{noteToLabel(explorer.tonicName(), props.locale)}</span>{' '}
						{t().common.major}
					</p>
				</div>
				<div class="inline-flex rounded-lg border border-white/10 bg-music-bg/50 p-1">
					<For each={Object.values(explorer.patterns())}>
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
				{(t().scaleExplorer as { dragHint: string }).dragHint}
			</p>

			<MajorScaleFretboard explorer={explorer} locale={props.locale} />
		</div>
	);
}
