import { For } from 'solid-js';

import type { Locale, NavTranslations } from '../i18n/types';
import { localePath } from '../i18n';

interface Props {
	locale: Locale;
	ptUrl: string;
	enUrl: string;
	siteName: string;
	nav: NavTranslations;
	lang: { toggle: string; pt: string; en: string };
}

export default function Navbar(props: Props) {
	const links = () => [
		{ href: localePath('/', props.locale), label: props.nav.home },
		{ href: localePath('/encontrador-de-notas', props.locale), label: props.nav.noteFinder },
		{ href: localePath('/metodo-referencia-simplifica', props.locale), label: props.nav.method },
		{
			href: localePath('/encontrador-de-escalas-do-metodo', props.locale),
			label: props.nav.scaleFinder,
		},
	];

	return (
		<nav class="flex flex-wrap items-center justify-between gap-4 border-b-2 border-music-accent bg-music-surface px-6 py-4">
			<a
				href={localePath('/', props.locale)}
				class="flex items-center gap-2 font-serif text-lg text-music-text no-underline hover:text-music-text"
			>
				<span class="text-2xl text-music-text" aria-hidden="true">
					♪
				</span>
				{props.siteName}
			</a>

			<div class="flex flex-wrap items-center gap-x-5 gap-y-2">
				<ul class="m-0 flex list-none flex-wrap gap-x-5 gap-y-1 p-0">
					<For each={links()}>
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

				<div
					class="inline-flex rounded-lg border border-white/10 bg-music-bg/50 p-0.5"
					role="group"
					aria-label={props.lang.toggle}
				>
					<a
						href={props.ptUrl}
						class="rounded-md px-2.5 py-1 text-xs font-medium no-underline transition-colors"
						classList={{
							'bg-music-accent text-music-on-accent': props.locale === 'pt',
							'text-music-muted hover:text-music-text': props.locale !== 'pt',
						}}
						hrefLang="pt-BR"
						lang="pt-BR"
						aria-current={props.locale === 'pt' ? 'page' : undefined}
					>
						PT
					</a>
					<a
						href={props.enUrl}
						class="rounded-md px-2.5 py-1 text-xs font-medium no-underline transition-colors"
						classList={{
							'bg-music-accent text-music-on-accent': props.locale === 'en',
							'text-music-muted hover:text-music-text': props.locale !== 'en',
						}}
						hrefLang="en"
						lang="en"
						aria-current={props.locale === 'en' ? 'page' : undefined}
					>
						EN
					</a>
				</div>
			</div>
		</nav>
	);
}
