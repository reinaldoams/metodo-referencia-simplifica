import type { DiagramType } from '../../lib/position-diagrams';
import { getPositionDiagramConfig } from '../../lib/position-diagrams';
import type { InstrumentId } from '../../lib/notes';

interface Props {
	type: DiagramType;
	instrumentId: InstrumentId;
}

export default function PositionDiagram(props: Props) {
	const config = () => getPositionDiagramConfig(props.type, props.instrumentId);
	const strings = () => config().strings;
	const frets = () => config().frets;
	const start = () => config().start;
	const end = () => config().end;

	const cellW = 32;
	const cellH = 24;
	const nutW = 5;
	const labelW = 18;
	const boardW = () => nutW + frets() * cellW;
	const width = () => labelW + boardW() + 8;
	const height = () => strings().length * cellH + 24;

	const sx = (fret: number) => labelW + nutW + fret * cellW + cellW / 2;
	const sy = (stringIndex: number) => 16 + stringIndex * cellH + cellH / 2;

	const x1 = () => sx(start().f);
	const y1 = () => sy(start().s);
	const x2 = () => sx(end().f);
	const y2 = () => sy(end().s);

	const handOffset = () =>
		props.type === 'tuning' || props.type === 'tuning-2' ? 14 : -12;

	return (
		<figure class="block w-full overflow-hidden rounded-xl border border-white/10 bg-music-bg/40">
			<svg
				viewBox={`0 0 ${width()} ${height()}`}
				class="block h-auto w-full"
				preserveAspectRatio="none"
				role="img"
				aria-label={config().caption}
			>
				<defs>
					<linearGradient id={`wood-${props.type}-${props.instrumentId}`} x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#44475a" />
						<stop offset="100%" stop-color="#21222c" />
					</linearGradient>
					<marker
						id={`arrow-${props.type}-${props.instrumentId}`}
						markerWidth="8"
						markerHeight="8"
						refX="6"
						refY="3"
						orient="auto"
					>
						<path d="M0,0 L6,3 L0,6 Z" fill="#bd93f9" />
					</marker>
				</defs>

				<g opacity="0.15" fill="#f8f8f2">
					<ellipse cx={x1() - 12} cy={y1() - 12} rx="20" ry="14" />
					<ellipse cx={x2() + handOffset()} cy={y2() - 12} rx="20" ry="14" />
				</g>

				<rect
					x={labelW}
					y="12"
					width={boardW()}
					height={strings().length * cellH}
					fill={`url(#wood-${props.type}-${props.instrumentId})`}
					rx="4"
				/>
				<rect
					x={labelW}
					y="12"
					width={nutW}
					height={strings().length * cellH}
					fill="#f8f8f2"
					rx="2"
				/>

				{Array.from({ length: frets() }, (_, i) => (
					<line
						x1={labelW + nutW + (i + 1) * cellW}
						y1="14"
						x2={labelW + nutW + (i + 1) * cellW}
						y2={12 + strings().length * cellH - 2}
						stroke="#6272a4"
						stroke-width="1"
						opacity="0.7"
					/>
				))}

				{strings().map((name, i) => (
					<g>
						<text
							x={labelW - 4}
							y={sy(i) + 4}
							text-anchor="end"
							fill="#f8f8f2"
							font-size="9"
							font-family="monospace"
						>
							{name}
						</text>
						<line
							x1={labelW}
							y1={sy(i)}
							x2={labelW + boardW()}
							y2={sy(i)}
							stroke="#6272a4"
							stroke-width={0.6 + (strings().length - 1 - i) * 0.3}
							opacity="0.7"
						/>
					</g>
				))}

				<line
					x1={x1()}
					y1={y1()}
					x2={x2()}
					y2={y2()}
					stroke="#bd93f9"
					stroke-width="1.5"
					stroke-dasharray={props.type === 'twelfth-fret' ? '4 4' : '5 3'}
					marker-end={`url(#arrow-${props.type}-${props.instrumentId})`}
					opacity="0.85"
				/>

				<circle cx={x1()} cy={y1()} r="9" fill="#bd93f9" />
				<text
					x={x1()}
					y={y1() + 3.5}
					text-anchor="middle"
					fill="#282a36"
					font-size="8"
					font-weight="bold"
				>
					{start().label}
				</text>

				<circle cx={x2()} cy={y2()} r="9" fill="#ff79c6" stroke="#bd93f9" stroke-width="1.5" />
				<text
					x={x2()}
					y={y2() + 3.5}
					text-anchor="middle"
					fill="#282a36"
					font-size="8"
					font-weight="bold"
				>
					{end().label}
				</text>

				<g opacity="0.4">
					<ellipse cx={x1()} cy={y1() - 13} rx="9" ry="6" fill="#f8f8f2" />
					<ellipse cx={x2()} cy={y2() - 13} rx="9" ry="6" fill="#f8f8f2" />
				</g>
			</svg>
			<figcaption class="border-t border-white/5 px-4 py-3 text-center">
				<p class="text-sm leading-relaxed text-music-muted md:text-base">{config().caption}</p>
				<p class="mt-1 text-sm leading-relaxed text-music-muted md:text-base">
					{config().captionNote}
				</p>
			</figcaption>
		</figure>
	);
}
