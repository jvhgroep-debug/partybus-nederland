const labels:Record<string,string>={vehicle:'Soort bus',trip:'Soort rit',occasion:'Festival / gelegenheid',pickup:'Opstapadres / festival-ophaalpunt',destination:'Bestemming',date:'Datum heenrit',departureTime:'Vertrektijd heenrit',returnDate:'Datum terugrit / ophalen',returnTime:'Ophaaltijd',festivalPickup:'Ophaalpunt bij festival',dropoff:'Afzetadres terugrit',notes:'Extra wensen'};
export const STARTRANSFER_RETURN_TRIP='Ophalen vanaf festival / alleen terugrit';
export function buildStarTransferBookingPayload(data:Record<string,string>,sourcePage:string):Record<string,string>{
 const values={...data};const returnOnly=values.trip===STARTRANSFER_RETURN_TRIP;
 if(returnOnly){values.returnDate=values.date||values.returnDate||'';values.returnTime=values.departureTime||values.returnTime||'';values.dropoff=values.dropoff||values.destination||'';values.date='';values.departureTime='';}
 if(values.trip==='Alleen heenrit'){values.returnDate='';values.returnTime='';values.dropoff='';values.festivalPickup='';}
 const summary=Object.entries(labels).filter(([key])=>values[key]).map(([key,label])=>`${label}: ${values[key]}`).join('\n');
 return {...values,date:returnOnly?values.returnDate:values.date,partnerId:'startransfer',partnerCity:values.city,sourcePage,message:summary};
}
export function buildStarTransferBookingWhatsapp(data:Record<string,string>):string{return ['Goedendag StarTransfer,','Ik kom via PartybusNederland.nl voor festival- of groepsvervoer met Zeeland als vertrek- of terugreisregio.','Naam: '+data.name,'E-mail: '+data.email,'Telefoon: '+data.phone,'Aantal personen: '+data.guests,'Plaats in Zeeland: '+data.city,data.message,'Kunt u beschikbaarheid en totaalprijs bevestigen?'].join('\n');}
