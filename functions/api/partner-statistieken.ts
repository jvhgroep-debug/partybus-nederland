interface Env { PARTNER_ANALYTICS?: D1Database; RESEND_API_KEY?: string; FROM_EMAIL?: string }
const partners=['prestige-coach-service','tourgo','party-bussen-westland','startransfer'];
const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Robots-Tag':'noindex, nofollow','Referrer-Policy':'no-referrer'};
const json=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers});
const hex=(bytes:ArrayBuffer)=>Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
async function sign(value:string,key:string){const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(key),{name:'HMAC',hash:'SHA-256'},false,['sign']);return hex(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)));}
async function validToken(token:string,key:string){const parts=token.split('.');if(parts.length!==3||!/^\d{13}$/.test(parts[0])||!/^[a-f0-9]{64}$/.test(parts[1])||!/^[a-f0-9]{64}$/.test(parts[2]))return false;const expiry=Number(parts[0]);if(expiry<=Date.now()||expiry>Date.now()+86400000)return false;const expected=await sign(parts[0]+'.'+parts[1],key);let diff=0;for(let i=0;i<64;i++)diff|=expected.charCodeAt(i)^parts[2].charCodeAt(i);return diff===0;}
export const onRequest: PagesFunction<Env> = async ({request,env})=>{
 try{
 const db=env.PARTNER_ANALYTICS,key=env.RESEND_API_KEY;
 if(!db||!key)return json({error:'Het overzicht is nog niet beschikbaar.'},503);
 const url=new URL(request.url);
 if(request.method==='POST'){
  if(request.headers.get('Origin')!==url.origin)return json({error:'Niet toegestaan.'},403);
  const body=await request.json().catch(()=>null) as {action?:string}|null;
  if(body?.action!=='login')return json({error:'Ongeldige actie.'},400);
  // One fixed recipient; an atomic hourly limit prevents arbitrary email sending.
  await db.prepare('CREATE TABLE IF NOT EXISTS partner_analytics_login_limits (hour TEXT PRIMARY KEY, requests INTEGER NOT NULL)').run();
  const hour=new Date().toISOString().slice(0,13);
  const limit=await db.prepare('INSERT INTO partner_analytics_login_limits(hour,requests) VALUES (?,1) ON CONFLICT(hour) DO UPDATE SET requests=requests+1 WHERE requests<3 RETURNING requests').bind(hour).first();
  if(!limit)return json({error:'Er zijn al drie inloglinks aangevraagd dit uur. Gebruik de laatste link of probeer later opnieuw.'},429);
  await db.prepare('DELETE FROM partner_analytics_login_limits WHERE hour < ?').bind(new Date(Date.now()-172800000).toISOString().slice(0,13)).run();
  const bytes=crypto.getRandomValues(new Uint8Array(32));
  const value=String(Date.now()+86400000)+'.'+hex(bytes.buffer);
  const token=value+'.'+await sign(value,key);
  const link='https://www.partybusnederland.nl/beheer/whatsapp-statistieken/#'+token;
  const from=env.FROM_EMAIL?.trim();
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from:from&&!from.toLowerCase().includes('partybusnederland.nl')?from:'Partybus Nederland <onboarding@resend.dev>',to:['info@starlocal.nl'],subject:'Jouw inloglink — WhatsApp-statistieken Partybus Nederland',text:`Open jouw privé-overzicht:\n${link}\n\nDeze link is 24 uur geldig. Deel de link niet. Heb je deze niet aangevraagd? Dan kun je dit bericht negeren.`})});
  if(!response.ok)return json({error:'De inlogmail kon niet worden verzonden. Probeer later opnieuw.'},502);
  return json({ok:true,message:'De inloglink is verzonden naar info@starlocal.nl. De link is 24 uur geldig.'});
 }
 if(request.method!=='GET')return json({error:'Methode niet toegestaan.'},405);
 const token=(request.headers.get('Authorization')||'').replace(/^Bearer /,'');
 if(!await validToken(token,key))return json({error:'Vraag een nieuwe inloglink aan om het overzicht te bekijken.'},401);
 const partner=url.searchParams.get('partner')||'',region=url.searchParams.get('region')||'';
 if(partner&&!partners.includes(partner)||region&&!['noord-brabant','zuid-holland','utrecht','noord-holland','zeeland'].includes(region))return json({error:'Ongeldig filter.'},400);
 const start=url.searchParams.get('start')||'',end=url.searchParams.get('end')||'';
 function date(value:string){return /^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value;}
 if(start&&!date(start)||end&&!date(end)||start&&end&&start>end)return json({error:'Kies een geldige periode.'},400);
 const filters:string[]=[],args:string[]=[];
 if(partner){filters.push('partner_id = ?');args.push(partner);}
 if(region){filters.push('province_slug = ?');args.push(region);}
 if(start){filters.push('clicked_at >= ?');args.push(start+'T00:00:00.000Z');}
 if(end){filters.push('clicked_at < ?');args.push(new Date(Date.parse(end)+86400000).toISOString());}
 const where=filters.length?' WHERE '+filters.join(' AND '):'';
 const query=(sql:string)=>db.prepare(sql).bind(...args).all();
 const [totals,byPartner,byPage,byDay,coverage]=await Promise.all([
 query('SELECT COUNT(*) AS clicks, MIN(clicked_at) AS first_click, MAX(clicked_at) AS last_click FROM partner_whatsapp_clicks'+where),
 query('SELECT partner_id, province_slug, COUNT(*) AS clicks FROM partner_whatsapp_clicks'+where+' GROUP BY partner_id, province_slug ORDER BY clicks DESC'),
 query('SELECT partner_id, province_slug, page_path, municipality_name, COUNT(*) AS clicks FROM partner_whatsapp_clicks'+where+' GROUP BY partner_id, province_slug, page_path, municipality_name ORDER BY clicks DESC, page_path'),
 query('SELECT substr(clicked_at,1,10) AS day, COUNT(*) AS clicks FROM partner_whatsapp_clicks'+where+' GROUP BY day ORDER BY day DESC'),
 db.prepare('SELECT partner_id, MIN(clicked_at) AS first_click, MAX(clicked_at) AS last_click, COUNT(*) AS clicks FROM partner_whatsapp_clicks GROUP BY partner_id').all()
 ]);
 return json({totals:totals.results[0],partners:byPartner.results,pages:byPage.results,days:byDay.results,coverage:coverage.results,generatedAt:new Date().toISOString()});
 }catch{return json({error:'Het overzicht kon niet worden geladen. Probeer later opnieuw.'},503);}
};
