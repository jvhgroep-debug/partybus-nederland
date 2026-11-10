import assert from 'node:assert/strict';
import {build} from 'esbuild';
async function bundle(entry){const r=await build({entryPoints:[entry],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));}
const {onRequest}=await bundle('functions/api/offerte.ts');
const {buildPartnerRequestMessage}=await bundle('src/lib/partnerWhatsappMessage.ts');
const {buildStarTransferBookingPayload,buildStarTransferBookingWhatsapp}=await bundle('src/lib/starTransferBooking.ts');
const {quotePartnerNames}=await bundle('src/lib/quoteTripDetails.ts');
const data={name:'Proef & groep',company:'Voorbeeld bedrijf',email:'test@example.invalid',phone:'000000',city:'Utrecht',guests:'81',transportType:'Partybus',trip:'Heen en terug',occasion:'Verjaardag',customerStreet:'Voorbeeldstraat <script> 1',customerPostalCode:'1000 AA',customerCity:'Woonplaats',pickup:'Opstapstraat 2',pickupPostalCode:'2000 BB',destination:'Bestemmingsstraat 3',destinationPostalCode:'3000 CC',destinationCity:'Bestemmingstad',date:'2027-06-01',departureTime:'18:30',arrivalDate:'2027-06-01',returnDate:'2027-06-02',returnTime:'01:15',vehicle:'Eigen voorkeur',discountCode:'TEST-2027',discovery:'Via vrienden',message:'Twee tussenstops & bagage',sourcePage:'/steden/partybus-huren-utrecht/'};
const env={RESEND_API_KEY:'mock-local-only',FROM_EMAIL:'Audit <test@example.invalid>'};
let mails=[];globalThis.fetch=async(_url,options)=>{mails.push(JSON.parse(options.body));return new Response('{}',{status:200});};
for(const [partnerId,name] of Object.entries(quotePartnerNames)){
 for(const native of [false,true]){
  mails=[];const body={...data,partnerId,partnerName:'Wrong partner — must be ignored'};
  const request=new Request('https://www.partybusnederland.nl/api/offerte',{method:'POST',headers:native?{}:{'content-type':'application/json'},body:native?new URLSearchParams(body):JSON.stringify(body)});
  const r=await onRequest({request,env});assert.equal(r.status,native?303:200);
  assert(mails.length>=2);for(const mail of mails){
   assert(mail.text.includes('Aanvraag voor: '+name));assert(mail.text.includes('Website van herkomst: PartybusNederland.nl'));assert(mail.text.includes('https://www.partybusnederland.nl'+data.sourcePage));
   for(const [key,value] of Object.entries(data))if(key!=='sourcePage')assert(mail.text.includes(value),`${partnerId}/${native}: dropped ${key}`);
   assert(!mail.html.includes('<script>'));assert(mail.html.includes('&lt;script&gt;'));assert(!mail.text.includes('Wrong partner'));
  }
 }
 const wa=buildPartnerRequestMessage({partnerName:name,departure:'Utrecht',sourcePath:data.sourcePage,values:{...data,customerName:data.name}});
 for(const [key,value] of Object.entries(data))if(!['sourcePage','name'].includes(key))assert(wa.includes(value),`${partnerId} WhatsApp dropped ${key}`);
 assert(wa.includes(name)&&wa.includes('PartybusNederland.nl')&&wa.includes(data.sourcePage));
 assert.equal(new URL('https://wa.me/000?text='+encodeURIComponent(wa)).searchParams.get('text'),wa);
}
const star=buildStarTransferBookingPayload({...data,vehicle:'The Experience'},data.sourcePage);
const starMessage=buildStarTransferBookingWhatsapp(star);for(const key of ['company','transportType','customerStreet','customerPostalCode','customerCity','pickupPostalCode','destinationPostalCode','destinationCity','arrivalDate','discountCode','discovery','message'])assert(starMessage.includes(data[key]),'StarTransfer dropped '+key);
assert(starMessage.includes('The Experience'));assert(starMessage.includes(data.sourcePage));
const onlyReturn=buildPartnerRequestMessage({partnerName:'Party Bussen Westland',departure:'Utrecht',sourcePath:'/',values:{trip:'Ophalen vanaf festival / alleen terugrit',departureTime:'23:45'}});assert(onlyReturn.includes('Gewenste ophaaltijd: 23:45'));
console.log('All four partners: every answer retained in JSON/native mail and WhatsApp; source/name, escaping, unicode and StarTransfer details verified. Only local mocked sends.');
