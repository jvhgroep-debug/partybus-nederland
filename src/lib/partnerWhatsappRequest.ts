import { prestigeCoachService } from '../data/partners/prestigeCoachService';
import { tourgoPartybussen } from '../data/partners/tourgoPartybussen';
import { partyBussenWestland } from '../data/partners/partyBussenWestland';
import { starTransfer } from '../data/partners/starTransfer';
export const whatsappRequestPartners = [
 { id: prestigeCoachService.id, name: prestigeCoachService.publicProfile.name, phone: prestigeCoachService.publicProfile.whatsapp.phone, region: 'Noord-Brabant', temporary: false },
 { id: tourgoPartybussen.id, name: tourgoPartybussen.publicProfile.name, phone: tourgoPartybussen.publicProfile.whatsapp.phone, region: 'Zuid-Holland', temporary: false },
 { id: partyBussenWestland.id, name: partyBussenWestland.publicProfile.name, phone: partyBussenWestland.publicProfile.whatsapp.phone, region: 'Utrecht / Amsterdam', temporary: false },
 { id: starTransfer.id, name: starTransfer.publicProfile.name, phone: starTransfer.publicProfile.whatsapp.phone, region: 'Zeeland', temporary: true },
] as const;
export function resolveWhatsappRequestPartner(input: {id?: string; href?: string; footerId?: string; label?: string; path?: string}) {
 const articlePartners:Record<string,string>={
 '/kennisbank/samenwerking-prestige-coach-service-noord-brabant/':'prestige-coach-service',
 '/kennisbank/samenwerking-tourgo-partybussen-zuid-holland/':'tourgo',
 '/kennisbank/samenwerking-party-bussen-westland-utrecht-amsterdam/':'party-bussen-westland',
 '/kennisbank/samenwerking-startransfer-zeeland/':'startransfer',
 };
 const articlePartner=whatsappRequestPartners.find(p=>p.id===articlePartners[input.path||'']);
 if(articlePartner)return articlePartner;
 const byId = whatsappRequestPartners.find(p=>p.id===input.id);
 if(byId) return byId;
 const footerIds:Record<string,string> = {'noord-brabant':'prestige-coach-service','zuid-holland':'tourgo',utrecht:'party-bussen-westland',amsterdam:'party-bussen-westland',zeeland:'startransfer'};
 const byFooter = whatsappRequestPartners.find(p=>p.id===footerIds[input.footerId||'']);
 if(byFooter) return byFooter;
 try {
  const url=new URL(input.href||'');
  if(url.hostname!=='wa.me') return undefined;
  return whatsappRequestPartners.find(p=>url.pathname==='/'+p.phone && (!p.temporary || input.label?.includes(p.name)));
 } catch { return undefined; }
}
export function buildPartnerRequestMessage(input:{partnerName:string;departure:string;sourcePath:string;values:Record<string,string>;originalText?:string}) {
 const value=(key:string)=>String(input.values[key]||'').trim();
 const message=[`Goedendag ${input.partnerName},`,'',`Ik kom via PartybusNederland.nl, de pagina voor ${input.departure}.`,`Bronpagina: https://www.partybusnederland.nl${input.sourcePath}`,`Mijn aanvraag: ${value('requestType')||'Offerte voor een partybusrit'}.`,'',`Mijn naam: ${value('customerName')||'[vul je naam hier in]'}`,`Gewenste datum: ${value('date')||'Nog te bespreken'}`,`Aantal personen: ${value('guests')||'Nog te bespreken'}`,`Vertrekplaats / opstapadres: ${value('departure')||input.departure}`,`Bestemming / festival: ${value('destination')||'Nog te bespreken'}`,`Terugreis nodig: ${value('returnTrip')||'Nog te bespreken'}`,'Gewenste vertrektijd: [vul hier in]','Gewenste terugreistijd: [vul hier in]',`Mijn vraag / extra wensen: ${value('message')||'Graag informatie over mogelijkheden, beschikbaarheid en prijs.'}`];
 // Keep the existing festival selections and checkboxes from the clicked link.
 const marker='Festival waarvoor ik vervoer wil boeken:';
 if(input.originalText?.includes(marker)) message.push('','Festivalinformatie van de pagina:',input.originalText.slice(input.originalText.indexOf(marker)));
 return message.join('\n');
}
