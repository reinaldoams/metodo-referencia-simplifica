import { createSignal } from 'solid-js';

interface Props {
	degree: string;
	result: string;
}

const boxClass =
	'w-full rounded-lg border px-4 py-3 text-center text-base md:text-lg';

export default function DegreeReveal(props: Props) {
	const [revealed, setRevealed] = createSignal(false);

	return (
		<div class="mt-4">
			{revealed() ? (
				<p
					class={`${boxClass} cursor-default border-white/5 bg-music-bg/50 text-music-muted`}
				>
					{props.degree} ={' '}
					<span class="font-semibold text-music-text">{props.result}</span>
				</p>
			) : (
				<button
					type="button"
					class={`${boxClass} cursor-pointer border-music-accent/40 bg-music-bg/40 font-medium text-music-text transition-colors hover:border-music-accent hover:bg-music-accent/10 active:scale-[0.99]`}
					onClick={() => setRevealed(true)}
				>
					Revelar resposta
				</button>
			)}
		</div>
	);
}
