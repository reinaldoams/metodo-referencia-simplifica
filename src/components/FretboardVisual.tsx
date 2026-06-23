import {
	FRET_CELL_H_PX,
	FRET_CELL_W_PX,
	FRET_NUT_W_PX,
	fretCenterX,
	stringCenterY,
} from '../lib/fretboard-layout';

interface Props {
	stringCount: number;
	fretCount: number;
}

const FRET_MARKERS: Record<number, number> = {
	3: 1,
	5: 1,
	7: 1,
	9: 1,
	12: 2,
};

export default function FretboardVisual(props: Props) {
	const cellW = FRET_CELL_W_PX;
	const cellH = FRET_CELL_H_PX;
	const nutW = FRET_NUT_W_PX;
	const width = (props.fretCount + 1) * cellW;
	const height = props.stringCount * cellH;
	const centerY = height / 2;

	return (
		<svg
			class="h-full w-full"
			viewBox={`0 0 ${width} ${height}`}
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<defs>
				<linearGradient id="neck-wood" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#44475a" />
					<stop offset="45%" stop-color="#383a59" />
					<stop offset="100%" stop-color="#21222c" />
				</linearGradient>
				<linearGradient id="neck-binding" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#bd93f9" stop-opacity="0.35" />
					<stop offset="100%" stop-color="#6272a4" stop-opacity="0.15" />
				</linearGradient>
				<radialGradient id="fret-dot" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stop-color="#f8f8f2" />
					<stop offset="100%" stop-color="#6272a4" />
				</radialGradient>
			</defs>

			<rect x="0" y="0" width={width} height={height} fill="url(#neck-wood)" rx="6" />
			<rect x="0" y="0" width={width} height="3" fill="url(#neck-binding)" rx="6" />
			<rect
				x="0"
				y={height - 3}
				width={width}
				height="3"
				fill="url(#neck-binding)"
				rx="6"
			/>

			<rect x="0" y="0" width={nutW} height={height} fill="#f8f8f2" rx="2" />
			<rect x={nutW - 1} y="0" width="1" height={height} fill="#282a36" opacity="0.5" />

			{Array.from({ length: props.fretCount }, (_, i) => {
				const x = (i + 1) * cellW;
				return (
					<line
						x1={x}
						y1="2"
						x2={x}
						y2={height - 2}
						stroke="#6272a4"
						stroke-width="1.5"
						opacity="0.85"
					/>
				);
			})}

			{Object.entries(FRET_MARKERS).map(([fret, dotCount]) => {
				const fretNum = Number(fret);
				if (fretNum > props.fretCount) return null;
				const x = fretCenterX(fretNum);
				const dots =
					dotCount === 1
						? [centerY]
						: [centerY - cellH * 0.85, centerY + cellH * 0.85];

				return dots.map((y) => (
					<circle cx={x} cy={y} r="5" fill="url(#fret-dot)" opacity="0.9" />
				));
			})}

			{Array.from({ length: props.stringCount }, (_, i) => {
				const y = stringCenterY(i);
				const thickness = 0.7 + (props.stringCount - 1 - i) * 0.35;
				return (
					<line
						x1="0"
						y1={y}
						x2={width - 4}
						y2={y}
						stroke="#6272a4"
						stroke-width={thickness}
						opacity="0.75"
					/>
				);
			})}

			<rect
				x={width - 5}
				y="0"
				width="5"
				height={height}
				fill="#21222c"
				opacity="0.5"
				rx="0 6 6 0"
			/>
		</svg>
	);
}
