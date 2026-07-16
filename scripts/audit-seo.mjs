import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');

function walk(dir, acc = []) {
	for (const entry of fs.readdirSync(dir)) {
		const full = path.join(dir, entry);
		if (fs.statSync(full).isDirectory()) walk(full, acc);
		else if (entry.endsWith('.html')) acc.push(full);
	}
	return acc;
}

const files = walk(dist);
const titles = new Map();
const descs = new Map();
const issues = [];

for (const file of files) {
	const html = fs.readFileSync(file, 'utf8');
	const rel = file.replace(dist, '').replace(/\\/g, '/');
	const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
	const desc = html.match(/name="description" content="([^"]*)"/)?.[1];
	const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '').trim();

	if (title) {
		if (titles.has(title)) issues.push(`dup title: ${title} (${titles.get(title)} & ${rel})`);
		else titles.set(title, rel);
	}
	if (desc) {
		if (descs.has(desc)) issues.push(`dup desc: ${rel} & ${descs.get(desc)}`);
		else descs.set(desc, rel);
	}
	if (!h1 && !rel.includes('404')) issues.push(`no h1: ${rel}`);
}

console.log(`pages: ${files.length}`);
if (issues.length) {
	console.error(issues.join('\n'));
	process.exit(1);
}
console.log('SEO audit OK');
