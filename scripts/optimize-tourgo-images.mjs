import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const srcDir = path.resolve('.tmp-tourgo-src');
const outDir = path.resolve('public/images/partners/tourgo-partybussen');

const jobs = [
	{ in: 'Standaard.jpg', out: 'tourgo-partybussen-hero.webp', width: 1920 },
	{ in: 'TourgoXL.jpg', out: 'tourgo-partybussen-xl.webp', width: 1600 },
	{ in: 'XL Binnenkant.jpg', out: 'tourgo-partybussen-interior-xl.webp', width: 1400 },
	{ in: 'exclusive.jpg', out: 'tourgo-partybussen-exclusive.webp', width: 1400 },
	{ in: 'exclusive (2).jpg', out: 'tourgo-partybussen-exclusive-detail.webp', width: 1400 },
	{ in: 'vdl karaoke bus .jpg', out: 'tourgo-partybussen-karaoke.webp', width: 1600 },
	{
		in: 'IMG_20240108_120154552_HDR.jpg',
		out: 'tourgo-partybussen-street.webp',
		width: 1600,
	},
	{
		in: '2e7a6c20-b95e-424d-8bd2-3773203c49dd.jpeg',
		out: 'tourgo-partybussen-mobile.webp',
		width: 900,
	},
];

await fs.mkdir(outDir, { recursive: true });

for (const job of jobs) {
	const input = path.join(srcDir, job.in);
	const output = path.join(outDir, job.out);
	try {
		const image = sharp(input, { failOn: 'none' }).rotate();
		const meta = await image.metadata();
		await image
			.resize({ width: job.width, withoutEnlargement: true })
			.webp({ quality: 82 })
			.toFile(output);
		console.log(`${job.out} (${meta.width}x${meta.height})`);
	} catch (error) {
		console.error(`FAILED ${job.in}:`, error instanceof Error ? error.message : error);
	}
}

const logoSrc = path.join(outDir, 'tourgo-partybussen-logo-source.png');
const logoOut = path.join(outDir, 'tourgo-partybussen-logo.png');
await sharp(logoSrc).png({ compressionLevel: 9 }).toFile(logoOut);
console.log('tourgo-partybussen-logo.png');
