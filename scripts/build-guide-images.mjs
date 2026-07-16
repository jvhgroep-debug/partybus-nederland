import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'public', 'images', 'guides');
const widths = [640, 960, 1280, 1920];

const sources = [
	{
		src: 'public/images/partybus-verhuur.png',
		baseName: 'partybus-opstapplaats',
	},
	{
		src: 'public/images/hero-partybus.png',
		baseName: 'partybus-onderweg-nacht',
	},
	{
		src: 'public/images/interior-partybus.png',
		baseName: 'partybus-interieur-sfeer',
	},
	{
		src: 'public/images/partybus-arena.png',
		baseName: 'partybus-festival-aankomst',
	},
	{
		src: 'public/images/service-festival.jpg',
		baseName: 'partybus-festivalterrein',
	},
	{
		src: 'public/images/partybus-nederland.png',
		baseName: 'partybus-terugreis-avond',
	},
	{
		src: 'public/images/partybus-collage.png',
		baseName: 'partybus-cta-offerte',
	},
	{
		src: 'public/images/partybus-alt.png',
		baseName: 'partybus-luxe-exterieur',
	},
];

fs.mkdirSync(outDir, { recursive: true });

for (const item of sources) {
	const input = path.join(root, item.src);

	for (const width of widths) {
		const height = Math.round((width * 9) / 16);
		const output = path.join(outDir, `${item.baseName}-${width}w.webp`);
		await sharp(input)
			.resize(width, height, { fit: 'cover', position: 'centre' })
			.webp({ quality: 82 })
			.toFile(output);
		console.log(`✓ ${item.baseName}-${width}w.webp`);
	}
}
