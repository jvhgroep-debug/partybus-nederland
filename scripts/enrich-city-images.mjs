import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LANDMARKS, UNCERTAIN_SLUGS } from './city-landmarks.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const citiesPath = path.join(root, 'src', 'data', 'cities', 'cities.json');
const reportPath = path.join(root, 'docs', 'city-images-report.md');

const MASTER =
	'Een zeer realistische, luxe zwarte partybus op de voorgrond bij {LANDMARK} in {CITY}, Nederland, gefotografeerd in de avond of nacht, nat wegdek met subtiele reflecties, warme stadsverlichting, zwart-gouden premium uitstraling, subtiele paarse ledverlichting op de bus, cinematic commercial photography, realistische Nederlandse architectuur, geen tekst, geen logo’s, geen mensen prominent in beeld, 16:9.';

const data = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));
const cities = data.cities;

const missing = [];
const landmarkCounts = new Map();

for (const city of cities) {
	const landmark = LANDMARKS[city.slug];
	if (!landmark) {
		missing.push(city.slug);
		continue;
	}
	landmarkCounts.set(landmark, (landmarkCounts.get(landmark) || 0) + 1);
	city.landmark = landmark;
	city.imageFilename = `partybus-${city.slug}.webp`;
	city.imageAlt = `Luxe partybus in ${city.city} bij ${landmark} in de avond`;
	city.imagePrompt = MASTER.replace('{LANDMARK}', landmark).replace('{CITY}', city.city);
	city.imageStatus = city.slug === 'breda' ? 'existing' : 'planned';
}

if (missing.length) {
	console.error('Missing landmarks for:', missing.join(', '));
	process.exit(1);
}

const extraKeys = Object.keys(LANDMARKS).filter((slug) => !cities.some((c) => c.slug === slug));
if (extraKeys.length) {
	console.warn('Extra landmark keys (not in cities.json):', extraKeys.join(', '));
}

const duplicates = [...landmarkCounts.entries()].filter(([, n]) => n > 1);
const uncertain = UNCERTAIN_SLUGS.filter((slug) => cities.some((c) => c.slug === slug));

data.imageDataPreparedAt = new Date().toISOString();
data.total = cities.length;

fs.writeFileSync(citiesPath, JSON.stringify(data, null, 2) + '\n', 'utf8');

const first20 = [...cities]
	.sort((a, b) => a.city.localeCompare(b.city, 'nl'))
	.slice(0, 20);

const report = `# City images data report

Prepared: ${data.imageDataPreparedAt}

## Totals

| Metric | Count |
|--------|------:|
| Total cities | ${cities.length} |
| Cities with landmark | ${cities.filter((c) => c.landmark).length} |
| Status \`planned\` | ${cities.filter((c) => c.imageStatus === 'planned').length} |
| Status \`existing\` | ${cities.filter((c) => c.imageStatus === 'existing').length} |
| Uncertain landmarks | ${uncertain.length} |
| Exact duplicate landmarks | ${duplicates.length} |

## Uncertain landmarks

Landmarks for merged municipalities / less iconic places (review before generation):

${uncertain.map((slug) => {
	const c = cities.find((x) => x.slug === slug);
	return `- **${c.city}** (\`${slug}\`): ${c.landmark}`;
}).join('\n')}

## Duplicate landmarks

${
	duplicates.length === 0
		? '_Geen exacte dubbele landmark-strings._'
		: duplicates.map(([landmark, n]) => `- "${landmark}" × ${n}`).join('\n')
}

## First 20 example prompts (alphabetical by city)

${first20
	.map(
		(c, i) => `### ${i + 1}. ${c.city}
- Landmark: ${c.landmark}
- Filename: \`${c.imageFilename}\`
- Status: \`${c.imageStatus}\`
- Prompt: ${c.imagePrompt}`,
	)
	.join('\n\n')}

## Notes

- Master prompt & style: \`src/config/cityImages.ts\`
- Landmark source: \`scripts/city-landmarks.mjs\`
- No images were generated in this step.
- Existing files (e.g. homepage Breda JPG) were not changed.
`;

fs.writeFileSync(reportPath, report, 'utf8');

console.log(
	JSON.stringify(
		{
			total: cities.length,
			withLandmark: cities.filter((c) => c.landmark).length,
			uncertain: uncertain.length,
			duplicates: duplicates.length,
			bredaStatus: cities.find((c) => c.slug === 'breda')?.imageStatus,
			report: reportPath,
		},
		null,
		2,
	),
);
