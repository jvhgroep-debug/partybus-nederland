import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'public', 'images', 'guides');

const sources = [
	{
		src: 'public/images/partybus-verhuur.png',
		dest: 'partybus-groep-instapt.webp',
	},
	{
		src: 'public/images/hero-partybus.png',
		dest: 'partybus-onderweg-nacht.webp',
	},
	{
		src: 'public/images/interior-partybus.png',
		dest: 'partybus-interieur-sfeer.webp',
	},
	{
		src: 'public/images/partybus-arena.png',
		dest: 'partybus-festival-aankomst.webp',
	},
	{
		src: 'public/images/service-festival.jpg',
		dest: 'partybus-festivalterrein.webp',
	},
	{
		src: 'public/images/partybus-nederland.png',
		dest: 'partybus-terugreis-avond.webp',
	},
	{
		src: 'public/images/partybus-collage.png',
		dest: 'partybus-cta-offerte.webp',
	},
	{
		src: 'public/images/partybus-alt.png',
		dest: 'partybus-luxe-exterieur.webp',
	},
];

fs.mkdirSync(outDir, { recursive: true });

for (const item of sources) {
	const input = path.join(root, item.src);
	const output = path.join(outDir, item.dest);
	await sharp(input)
		.resize(1920, 1080, { fit: 'cover', position: 'centre' })
		.webp({ quality: 82 })
		.toFile(output);
	console.log(`✓ ${item.dest}`);
}
