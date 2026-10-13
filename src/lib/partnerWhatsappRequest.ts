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
export { buildPartnerRequestMessage } from './partnerWhatsappMessage';
