import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const dimensions = JSON.parse(await fs.readFile('src/data/partners/imageDimensions.json', 'utf8'));
let count = 0;
for (const [src, size] of Object.entries(dimensions)) {
 if (!/\.(webp|png|jpe?g)$/.test(src) || /logo/i.test(src) || size.width < 600) continue;
 const relative = src.replace('/images/partners/', '').replace(/\.[^.]+$/, '');
 for (const width of [400, 800, 1200].filter(width => width < size.width)) {
  const output = path.join('public/images/partners/responsive', `${relative}-${width}.webp`);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(path.join('public', src)).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output);
  count++;
 }
}
console.log(`Generated ${count} responsive partner images.`);
