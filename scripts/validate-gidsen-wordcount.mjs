import { buildAllGidsenPages } from '../src/data/gidsen/buildPage.js';

const pages = buildAllGidsenPages();
const minWords = 2000;
const failures = pages.filter((p) => p.wordCount < minWords);

if (failures.length > 0) {
	console.error('Gidsen onder minimum woordaantal:');
	for (const page of failures) {
		console.error(`  ${page.slug}: ${page.wordCount} woorden`);
	}
	process.exit(1);
}

console.log(`✓ Alle ${pages.length} gidsen halen ${minWords}+ woorden`);
for (const page of pages) {
	console.log(`  ${page.slug}: ${page.wordCount} woorden`);
}
