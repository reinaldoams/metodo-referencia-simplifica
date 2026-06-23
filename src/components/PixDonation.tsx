import { createSignal } from 'solid-js';

interface Props {
	pixKey: string;
	qrDataUrl: string;
}

export default function PixDonation(props: Props) {
	const [copied, setCopied] = createSignal(false);

	async function copyKey() {
		try {
			await navigator.clipboard.writeText(props.pixKey);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			const selection = window.getSelection();
			const range = document.createRange();
			const keyEl = document.getElementById('pix-key');
			if (!keyEl) return;
			range.selectNodeContents(keyEl);
			selection?.removeAllRanges();
			selection?.addRange(range);
		}
	}

	return (
		<div class="mt-8 flex flex-col items-center gap-5">
			<img
				src={props.qrDataUrl}
				alt="QR Code Pix para doação ao Método Referência Simplifica"
				width={180}
				height={180}
				class="rounded-lg border border-white/10 bg-white p-2"
			/>
			<p class="text-music-muted">Escaneie no app do banco</p>

			<div class="w-full max-w-lg text-left">
				<p class="mb-2 text-center text-music-muted">Chave Pix (aleatória)</p>
				<p
					id="pix-key"
					class="select-all rounded-lg border border-white/10 bg-music-bg/60 px-4 py-3 text-center font-mono break-all text-music-text"
				>
					{props.pixKey}
				</p>
			</div>

			<button
				type="button"
				onClick={copyKey}
				class="rounded-lg bg-music-accent px-6 py-2.5 font-medium text-music-on-accent transition-colors hover:bg-music-accent-hover"
			>
				{copied() ? 'Copiado!' : 'Copiar chave Pix'}
			</button>

			<p class="text-music-muted">Doação voluntária — qualquer valor.</p>
			<p class="sr-only" aria-live="polite">
				{copied() ? 'Chave Pix copiada.' : ''}
			</p>
		</div>
	);
}
