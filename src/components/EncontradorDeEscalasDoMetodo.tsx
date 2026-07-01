import { For, createMemo } from 'solid-js';
import { getTranslations, type Locale } from '../i18n';
import { formatModeTitle, getAllModeBreakdowns } from '../lib/greek-modes';
import { noteToLabel } from '../lib/note-labels';
import MajorScaleFretboard from './method/MajorScaleFretboard';
import { useMajorScaleExplorer } from './method/useMajorScaleExplorer';

interface Props {
	locale: Locale;
}

export default function EncontradorDeEscalasDoMetodo(props: Props) {
	const t = () => getTranslations(props.locale);
	const sf = () => t().scaleFinder as Record<string, string>;
	const explorer = useMajorScaleExplorer(props.locale);
	const modeBreakdowns = createMemo(() =>
		getAllModeBreakdowns(explorer.tonicName(), props.locale),
	);

	const tonicLabel = () => noteToLabel(explorer.tonicName(), props.locale);

	return (
		<div class="w-full space-y-6 rounded-2xl border border-white/10 bg-music-surface/40 p-4 md:p-6">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p class="text-base font-medium text-music-muted md:text-lg">{sf().patternLabel}</p>
					<p class="text-xl font-serif text-music-text md:text-2xl">
						{t().common.tonicLabel}{' '}
						<span class="text-music-text">{tonicLabel()}</span> {t().common.major}
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
			<p class="text-base text-music-muted md:text-lg">{sf().dragHint}</p>

			<MajorScaleFretboard explorer={explorer} locale={props.locale} showDegreeLegend={false} />

			<div class="border-t border-white/10 pt-8">
				<h2 class="mb-2 text-2xl md:text-3xl">{sf().modesTitle}</h2>
				<p class="mb-8 text-base text-music-muted md:text-lg">
					{sf().modesIntro.replace('{note}', tonicLabel())}
				</p>

				<div class="grid gap-5 lg:grid-cols-2">
					<For each={modeBreakdowns()}>
						{(breakdown) => (
							<article class="rounded-xl border border-white/10 bg-music-bg/30 p-5 md:p-6">
								<h3 class="text-xl md:text-2xl">
									{formatModeTitle(breakdown.tonicLabel, breakdown.mode)}{' '}
									<span class="text-base font-normal text-music-muted md:text-lg">
										({breakdown.mode.ordinalLabel})
									</span>
								</h3>
								<p class="mt-2 text-sm leading-relaxed text-music-muted md:text-base">
									{t().common.alsoKnownAs} {breakdown.mode.aliases.join(', ')}
								</p>
								<p class="mt-3 text-sm text-music-muted md:text-base">
									{t().common.tonicLabel}{' '}
									<span class="font-medium text-music-text">{breakdown.tonicLabel}</span>{' '}
									{sf()
										.tonicDegreeInfo.replace('{degree}', String(breakdown.majorScaleDegree))
										.replace('{majorTonic}', tonicLabel())}
								</p>

								<ol class="mt-5 space-y-2.5">
									<For each={breakdown.degrees}>
										{(degree) => (
											<li class="flex flex-wrap items-baseline gap-x-2 text-base md:text-lg">
												<span class="font-mono text-sm text-music-muted md:text-base">
													{degree.degree}.
												</span>
												<span class="font-medium text-music-text">{degree.noteLabel}</span>
												<span class="text-music-muted">—</span>
												<span class="text-music-text">{degree.intervalName}</span>
											</li>
										)}
									</For>
								</ol>
							</article>
						)}
					</For>
				</div>
			</div>
		</div>
	);
}
