// Existing analytics store, separate allowlisted source. No form answers are collected.
import pages from './tc-whatsapp-pages.json';
interface Env { PARTNER_ANALYTICS?: D1Database }
const origins=new Set(['https://schoonvakmannen.nl','https://www.schoonvakmannen.nl','https://schoonvakmannen.jvhgroep.chatgpt.site']);
export const onRequest: PagesFunction<Env> = async ({request,env})=>{
 const origin=request.headers.get('Origin')||'';
 const headers={'Access-Control-Allow-Origin':origin,'Vary':'Origin','Cache-Control':'no-store','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'content-type'};
 if(!origins.has(origin))return new Response(null,{status:403});
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
 if(request.method!=='POST')return new Response(null,{status:405,headers});
 try{
  if(Number(request.headers.get('Content-Length')||0)>2048)return new Response(null,{status:413,headers});
  const raw=await request.text();if(raw.length>2048)return new Response(null,{status:413,headers});
  const body=JSON.parse(raw);const path=body?.pagePath;
  const page=typeof path==='string'?(pages as Record<string,{province:string;slug:string|null;name:string}>)[path]:null;
  if(!page||!['partner-link','lead-form'].includes(body.buttonType))return new Response(null,{status:400,headers});
  if(!env.PARTNER_ANALYTICS)return new Response(null,{status:503,headers});
  await env.PARTNER_ANALYTICS.prepare(`INSERT INTO partner_whatsapp_clicks (partner_id,province_slug,municipality_slug,municipality_name,page_path,page_type,button_type) VALUES (?,?,?,?,?,?,?)`).bind('tc-specialistische-reiniging',page.province,page.slug,page.name,path,page.slug?'municipality':'province',body.buttonType).run();
  return new Response(null,{status:204,headers});
 }catch{return new Response(null,{status:503,headers});}
};
