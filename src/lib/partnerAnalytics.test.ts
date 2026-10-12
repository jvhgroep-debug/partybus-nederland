// @ts-nocheck
// API regression checks with a mocked database and email service.
import assert from 'node:assert/strict';
import {onRequest} from '../../functions/api/partner-statistieken';
let queries=[],sent=[],allowLogin=true;
const db={prepare(sql){queries.push(sql);return {bind(...args){queries.push(args);return this},async run(){return {}},async first(){return allowLogin?{requests:1}:null},async all(){return {results:sql.includes('COUNT(*) AS clicks, MIN')?[{clicks:0,first_click:null,last_click:null}]:[]}}}}};
globalThis.fetch=async(url,options)=>{sent.push(JSON.parse(options.body));return new Response('{}',{status:200})};
const env={PARTNER_ANALYTICS:db,RESEND_API_KEY:'mock-key',FROM_EMAIL:'Partybus <hello@starlocal.nl>'};
const ctx=(method='GET',params='',body,origin='https://www.partybusnederland.nl',token='')=>({env,request:new Request('https://www.partybusnederland.nl/api/partner-statistieken'+params,{method,headers:{Origin:origin,Authorization:'Bearer '+token,'Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})})});
let response=await onRequest(ctx());assert.equal(response.status,401);assert.equal(sent.length,0);
response=await onRequest(ctx('POST','',{action:'login'},'https://evil.example'));assert.equal(response.status,403);assert.equal(sent.length,0);
response=await onRequest(ctx('POST','',{action:'login'}));assert.equal(response.status,200);assert.deepEqual(sent[0].to,['info@starlocal.nl']);
const token=sent[0].text.match(/#([^\s]+)/)[1];
response=await onRequest(ctx('GET','?partner=startransfer&start=2026-10-01&end=2026-10-13',null,undefined,token));assert.equal(response.status,200);assert.equal((await response.json()).totals.clicks,0);assert(queries.some(q=>Array.isArray(q)&&q.includes('2026-10-14T00:00:00.000Z')));
response=await onRequest(ctx('GET','?start=2026-02-31',null,undefined,token));assert.equal(response.status,400);
response=await onRequest(ctx('GET','?partner=unknown',null,undefined,token));assert.equal(response.status,400);
response=await onRequest(ctx('GET','',null,undefined,token.slice(0,-1)+(token.endsWith('0')?'1':'0')));assert.equal(response.status,401);
allowLogin=false;response=await onRequest(ctx('POST','',{action:'login'}));assert.equal(response.status,429);assert.equal(sent.length,1);
console.log('Passed: private data access, fixed email recipient, signed login token, invalid token/filter/date, end-date range, login rate limit. All email calls mocked.');
