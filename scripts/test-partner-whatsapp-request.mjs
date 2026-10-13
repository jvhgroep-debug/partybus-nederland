import assert from 'node:assert/strict';
import {build} from 'esbuild';
const result=await build({entryPoints:['src/lib/partnerWhatsappRequest.ts'],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const {resolveWhatsappRequestPartner,buildPartnerRequestMessage,whatsappRequestPartners}=await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
for(const partner of whatsappRequestPartners){assert.equal(resolveWhatsappRequestPartner({id:partner.id}).phone,partner.phone);const text=buildPartnerRequestMessage({partnerName:partner.name,departure:'Breda',sourcePath:'/steden/partybus-huren-breda/',values:{customerName:'Voorbeeld klant',requestType:'Festivalvervoer',guests:'30'}});assert(text.includes('Goedendag '+partner.name));assert(text.includes('Mijn naam: Voorbeeld klant'));assert(text.includes('Mijn aanvraag: Festivalvervoer'));assert(text.includes('https://www.partybusnederland.nl/steden/partybus-huren-breda/'));}
assert.equal(resolveWhatsappRequestPartner({href:'https://wa.me/31684002350'}),undefined);
assert.equal(resolveWhatsappRequestPartner({footerId:'zeeland'}).id,'startransfer');
assert.equal(resolveWhatsappRequestPartner({path:'/kennisbank/samenwerking-tourgo-partybussen-zuid-holland/'}).id,'tourgo');
assert.equal(resolveWhatsappRequestPartner({href:'https://wa.me/31610628733'}).id,'party-bussen-westland');
const selected='Festival waarvoor ik vervoer wil boeken: Defqon.1\n☑ Defqon.1\n☐ Paaspop';const message=buildPartnerRequestMessage({partnerName:'Prestige Coach Service',departure:'Noord-Brabant',sourcePath:'/provincies/noord-brabant/festivals-2026-2027/',values:{},originalText:selected});assert(message.includes(selected));
console.log('Four partner routes, source/name/request type and festival preservation passed. General owner contact stays unassigned. No messages sent.');
