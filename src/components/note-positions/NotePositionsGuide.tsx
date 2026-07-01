import { For } from 'solid-js';
import { getTranslations, type Locale } from '../../i18n';
import type { DiagramType } from '../../lib/position-diagrams';
import { getPositionPs } from '../../lib/position-diagrams';
import type { InstrumentId } from '../../lib/notes';
import PositionDiagram from './PositionDiagram';

const DIAGRAM_TYPES: DiagramType[] = [
	'octave-common',
	'c-position',
	'tuning',
	'tuning-2',
	'twelfth-fret',
];

interface Props {
	instrumentId: InstrumentId;
	locale: Locale;
}

export default function NotePositionsGuide(props: Props) {
	const t = () => getTranslations(props.locale);
	const nf = () => t().noteFinder as Record<string, string>;
	const positions = () =>
		t().notePositions as Array<{
			number: number;
			title: string;
			description: string;
			ps: string;
		}>;

	return (
		<section class="mt-20 border-t border-white/10 pt-16">
			<div class="mb-12 max-w-3xl">
				<h2 class="text-2xl md:text-3xl">{nf().guideTitle}</h2>
				<p class="mt-4 text-music-muted">{nf().guideIntro}</p>
			</div>

			<div class="space-y-12">
				<For each={positions()}>
					{(position, index) => (
						<article class="overflow-hidden rounded-2xl border border-white/10 bg-music-surface/40">
							<div class="grid gap-0 md:grid-cols-2">
								<div class="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8">
									<span class="mb-2 inline-block rounded-full bg-music-accent/15 px-3 py-1 text-xs font-medium tracking-wide text-music-text uppercase">
										{t().common.positionNumber(position.number)}
									</span>
									<h3 class="mb-3 text-xl">{position.title}</h3>
									<p class="leading-relaxed text-music-muted">{position.description}</p>
									<div class="mt-5 rounded-lg border border-music-accent/25 bg-music-accent/5 px-4 py-3">
										<p class="text-sm leading-relaxed text-music-text">
											<span class="font-semibold text-music-text">{t().common.ps}</span>{' '}
											{getPositionPs(
												position.number,
												props.instrumentId,
												position.ps,
												props.locale,
											)}
										</p>
									</div>
								</div>
								<div class="w-full min-w-0 self-stretch bg-music-bg/30 p-4 md:p-6">
									<PositionDiagram
										type={DIAGRAM_TYPES[index()]}
										instrumentId={props.instrumentId}
										locale={props.locale}
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
