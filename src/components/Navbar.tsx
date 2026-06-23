import { For } from 'solid-js';

const links = [
	{ href: '/', label: 'Início' },
	{ href: '/encontrador-de-notas', label: 'Encontrador de notas' },
	{ href: '/metodo-referencia-simplifica', label: 'Método Referência Simplifica' },
	{ href: '/encontrador-de-escalas-do-metodo', label: 'Encontrador de escalas do método' },
];

export default function Navbar() {
	return (
		<nav class="flex flex-wrap items-center justify-between gap-4 border-b-2 border-music-accent bg-music-surface px-6 py-4">
			<a
				href="/"
				class="flex items-center gap-2 font-serif text-lg text-music-text no-underline hover:text-music-text"
			>
				<span class="text-2xl text-music-text" aria-hidden="true">
					♪
				</span>
				Método Referência Simplifica
			</a>
			<ul class="m-0 flex list-none flex-wrap gap-x-5 gap-y-1 p-0">
				<For each={links}>
					{(link) => (
						<li>
							<a
								href={link.href}
								class="text-[0.95rem] text-music-muted no-underline hover:text-music-text"
							>
								{link.label}
							</a>
						</li>
					)}
				</For>
			</ul>
		</nav>
	);
}
