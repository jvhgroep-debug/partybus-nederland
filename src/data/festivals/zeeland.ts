import { festivals, festivalWhatsapp } from './registry';
import { starTransfer,starTransferPhotos } from '../partners/starTransfer';
export const zeelandFestivals=festivals.map((festival,index)=>({...festival,path:`/provincies/zeeland/festivals/${festival.slug}/`,tip:festival.tip.replaceAll('vanuit Brabant','vanuit Zeeland').replaceAll('Brabantse','Zeeuwse').replaceAll('in Brabant','in Zeeland').replaceAll('Prestige','StarTransfer'),hero:starTransferPhotos[index%starTransferPhotos.length]}));
export function starTransferFestivalWhatsapp(festival:(typeof zeelandFestivals)[number],direction='Vanaf het festivalterrein'){return festivalWhatsapp(festival,direction,{name:'StarTransfer — aanvraag via Partybus Nederland',phone:starTransfer.publicProfile.whatsapp.phone,region:'Zeeland'});}
