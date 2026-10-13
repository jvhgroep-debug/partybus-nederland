import assert from 'node:assert/strict';
import { build } from 'esbuild';
const bundled = await build({entryPoints:['functions/api/offerte.ts'],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const { onRequest } = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);
let calls=[];let fail=()=>false;
globalThis.fetch=async (_url,options)=>{const data=JSON.parse(options.body);calls.push({data,key:options.headers['Idempotency-Key']});return new Response('{}',{status:fail(data)?400:200});};
const payload={name:'Local audit',email:'audit@example.invalid',phone:'000',city:'Utrecht',requestId:'local-audit-only'};
async function request(changes={},env={RESEND_API_KEY:'mock',FROM_EMAIL:'Audit <audit@example.invalid>'}){return onRequest({request:new Request('https://www.partybusnederland.nl/api/offerte',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...payload,...changes})}),env});}
for(const [partnerId,email] of [['prestige-coach-service','info@prestigecoachservice.nl'],['tourgo','info@tourgo.nl'],['party-bussen-westland','info@partybussenwestland.nl'],['startransfer','info@starlocal.nl']]){calls=[];const r=await request({partnerId});assert.equal(r.status,200);assert(calls.some(x=>x.data.to[0]===email));assert.equal((await r.json()).partnerForwarded,true);}
for(const changes of [{guests:'0'},{guests:'81'},{guests:'1.5'},{date:'2026-02-30'},{date:'not-a-date'},{partnerId:'unknown'},{email:'invalid'}]){calls=[];assert.equal((await request(changes)).status,400);assert.equal(calls.length,0);}
assert.equal((await request({},{})).status,503);
calls=[];await request({partnerId:'tourgo'});const first=calls.map(x=>x.key);calls=[];await request({partnerId:'tourgo'});assert.deepEqual(calls.map(x=>x.key),first);
fail=data=>data.to[0]==='info@tourgo.nl';calls=[];const partnerFailure=await request({partnerId:'tourgo'});assert.equal(partnerFailure.status,200);assert.equal((await partnerFailure.json()).partnerForwarded,false);assert(calls.some(x=>x.data.subject.includes('Actie nodig')));
fail=data=>data.to[0]==='audit@example.invalid';const customerFailure=await request();assert.equal(customerFailure.status,200);assert.equal((await customerFailure.json()).customerConfirmed,false);
fail=data=>data.to[0]==='info@starlocal.nl';assert.equal((await request()).status,502);
fail=()=>false;calls=[];const native=new Request('https://www.partybusnederland.nl/api/offerte',{method:'POST',body:new URLSearchParams({...payload,partnerId:'startransfer',destination:'Festival',notes:'Extra stop',guests:'10'})});const response=await onRequest({request:native,env:{RESEND_API_KEY:'mock',FROM_EMAIL:'Audit <audit@example.invalid>'}});assert.equal(response.status,303);assert.equal(response.headers.get('Location'),'/bedankt/');assert(calls[0].data.text.includes('Festival'));assert(calls[0].data.text.includes('Extra stop'));
console.log('Offerte audit tests passed: routing, validation, idempotency, failure handling and native form fallback. No external emails sent.');
