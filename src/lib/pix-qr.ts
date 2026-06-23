import { createStaticPix, hasError } from 'pix-utils';

import { PIX_KEY, PIX_MERCHANT_CITY, PIX_MERCHANT_NAME } from '../data/donation';

export async function generatePixQrDataUrl(): Promise<string> {
	const pix = createStaticPix({
		merchantName: PIX_MERCHANT_NAME,
		merchantCity: PIX_MERCHANT_CITY,
		pixKey: PIX_KEY,
		transactionAmount: 0,
	});

	if (hasError(pix)) {
		throw new Error('Falha ao gerar o QR Code Pix.');
	}

	return pix.toImage();
}
