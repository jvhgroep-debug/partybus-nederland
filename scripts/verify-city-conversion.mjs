import fs from 'node:fs';
import assert from 'node:assert/strict';

const names = { amsterdam:'Amsterdam', breda:'Breda', utrecht:'Utrecht', rotterdam:'Rotterdam', 'den-haag':'Den Haag' };
const phones = { amsterdam:'31610628733', breda:'31629041798', utrecht:'31610628733', rotterdam:'31623044970', 'den-haag':'31623044970' };
const decode = s => s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const clean = s => decode(s.replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const home = fs.readFileSync('dist/index.html','utf8');
const sitemap = fs.readFileSync('dist/sitemap.xml','utf8');
for (const [slug,name] of Object.entries(names)) {
  const route = `/steden/partybus-huren-${slug}/`;
  const html = fs.readFileSync(`dist${route}index.html`,'utf8');
  const title = decode(html.match(/<title>([^<]+)<\/title>/)[1]);
  const description = decode(html.match(/name="description" content="([^"]+)"/)[1]);
  assert(title.length <= 60, `${name}: title length ${title.length}`);
  assert(description.length >= 150 && description.length <= 160, `${name}: description length ${description.length}`);
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  assert.equal(h1.length,1,name);
  assert.equal(clean(h1[0][1]),`Partybus huren ${name}`);
  assert(html.includes(`rel="canonical" href="https://www.partybusnederland.nl${route}"`));
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),`${name} indexable source`);
  const faq = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => { const j=JSON.parse(m[1]); return Array.isArray(j)?j:[j]; }).find(j=>j['@type']==='FAQPage');
  assert.equal(faq.mainEntity.length,6,`${name} six FAQ`);
  const visible = clean(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
  for (const q of faq.mainEntity) { assert(visible.includes(q.name)); assert(visible.includes(q.acceptedAnswer.text)); }
  const dialog = html.match(/<dialog\b[^>]*data-partner-whatsapp-request[^>]*>[\s\S]*?<\/dialog>/g) ?? [];
  assert.equal(dialog.length,1,`${name} one dialogue`);
  assert(dialog[0].includes(`data-phone="${phones[slug]}"`));
  for (const field of ['customerName','departure','destination','date','departureTime','guests','occasion','message','returnTime']) assert(dialog[0].includes(`name="${field}"`),`${name} ${field}`);
  assert(home.includes(`href="${route}"`));
  assert(sitemap.includes(`https://www.partybusnederland.nl${route}`));
  const og = html.match(/property="og:image" content="([^"]+)"/)[1];
  assert(og.includes('/images/partners/'),`${name} real partner share photo`);
  assert(fs.existsSync('public'+new URL(og).pathname),`${name} share photo exists`);
  console.log(`${name}: title ${title.length}, description ${description.length}, six matching FAQ, H1/canonical, sitemap, photo and partner fields OK`);
}
console.log('Five commercial hubs verified; no external requests or messages sent.');
