/**
 * Pre-push verification: assets referenced in src exist; dist internal links resolve.
 * Run after: npm run build
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const distDir = path.join(root, 'dist');
const srcDir = path.join(root, 'src');

function walkFiles(dir, ext, acc = []) {
	if (!fs.existsSync(dir)) return acc;
	for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, ent.name);
		if (ent.isDirectory()) {
			if (!['node_modules', 'dist', '.astro'].includes(ent.name)) walkFiles(p, ext, acc);
		} else if (!ext || ent.name.endsWith(ext)) acc.push(p);
	}
	return acc;
}

// Asset paths in source
const srcFiles = walkFiles(srcDir, null).filter((f) => /\.(astro|ts|css|json)$/.test(f));
const assetRe = /\/images\/[a-zA-Z0-9._-]+/g;
const assets = new Set();
for (const f of srcFiles) {
	const s = fs.readFileSync(f, 'utf8');
	for (const m of s.matchAll(assetRe)) assets.add(m[0]);
}

const missingAssets = [...assets].filter((a) => !fs.existsSync(path.join(publicDir, a)));
console.log('ASSETS referenced:', assets.size);
console.log('ASSETS missing:', missingAssets.length, missingAssets);

// Internal links in dist HTML
const htmlFiles = walkFiles(distDir, '.html');
const hrefRe = /href=["']([^"'#?]+)["']/g;
const broken = [];
const routes = new Set(
	htmlFiles.map((f) => {
		const rel = path.relative(distDir, f).replace(/\\/g, '/');
		if (rel === 'index.html') return '/';
		return '/' + rel.replace(/index\.html$/, '');
	}),
);
routes.add('/404.html');

for (const file of htmlFiles) {
	const html = fs.readFileSync(file, 'utf8');
	let m;
	while ((m = hrefRe.exec(html))) {
		const href = m[1];
		if (!href.startsWith('/') || href.startsWith('//')) continue;
		if (href.startsWith('/images/') || href.startsWith('/favicon')) {
			const fp = path.join(publicDir, href.replace(/^\//, ''));
			if (!fs.existsSync(fp)) broken.push({ file, href, reason: 'asset' });
			continue;
		}
		const normalized = href.endsWith('/') ? href : href + '/';
		const asFile = normalized.replace(/^\//, '').replace(/\/$/, '/index.html');
		const exists =
			routes.has(normalized) ||
			routes.has(href) ||
			fs.existsSync(path.join(distDir, asFile)) ||
			fs.existsSync(path.join(distDir, href.replace(/^\//, '')));
		if (!exists && !href.match(/^\/(#|$)/)) {
			// hash-only anchors on same page are ok
			if (href.includes('#')) {
				const base = href.split('#')[0];
				if (!base || base === '/' || routes.has(base) || routes.has(base + '/')) continue;
			}
			broken.push({ file: path.relative(root, file), href });
		}
	}
}

console.log('HTML pages:', htmlFiles.length);
console.log('Broken internal links:', broken.length);
if (broken.length) console.log(broken.slice(0, 15));

const ok = missingAssets.length === 0 && broken.length === 0;
console.log('VERIFY', ok ? 'PASS' : 'FAIL');
process.exit(ok ? 0 : 1);
