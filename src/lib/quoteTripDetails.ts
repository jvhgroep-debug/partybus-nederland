/** Shared questions for website forms, native POSTs and WhatsApp enquiries. */
export const quotePartnerNames: Record<string, string> = {
 'prestige-coach-service': 'Prestige Coach Service',
 tourgo: 'Tourgo Partybussen',
 'party-bussen-westland': 'Party Bussen Westland',
 startransfer: 'StarTransfer',
};
export const quoteDetailLabels = {
 transportType: 'Soort vervoer', trip: 'Soort reis', company: 'Bedrijfsnaam', occasion: 'Soort gelegenheid',
 customerStreet: 'Uw adres: straat en huisnummer', customerPostalCode: 'Uw adres: postcode', customerCity: 'Uw adres: plaats',
 pickup: 'Opstapplaats: straat en huisnummer', pickupPostalCode: 'Opstapplaats: postcode',
 departureTime: 'Vertrektijd', arrivalDate: 'Aankomstdatum',
 destination: 'Bestemming: straat en huisnummer / locatie', destinationPostalCode: 'Bestemming: postcode', destinationCity: 'Bestemming: plaats',
 returnDate: 'Datum terugrit / ophalen', returnTime: 'Retourtijd / ophaaltijd',
 vehicle: 'Voorkeur bus', discountCode: 'Kortingscode', discovery: 'Hoe gevonden',
 festivalPickup: 'Ophaalpunt bij festival', dropoff: 'Afzetadres terugrit', notes: 'Extra wensen',
} as const;
export type QuoteTripDetails = Partial<Record<keyof typeof quoteDetailLabels, string>>;
export function readQuoteTripDetails(raw: Record<string, unknown>): QuoteTripDetails {
 return Object.fromEntries(Object.keys(quoteDetailLabels).map(key=>[key,String(raw[key]??'').trim()]));
}
export function quoteTripRows(values: QuoteTripDetails): Array<[string,string]> {
 return Object.entries(quoteDetailLabels).flatMap(([key,label])=>{
  if(values.trip==='Alleen heenrit'&&['returnDate','returnTime','dropoff','festivalPickup'].includes(key))return [];
  const displayLabel=values.trip==='Ophalen vanaf festival / alleen terugrit'&&key==='departureTime'?'Ophaaltijd':label;
  const value=values[key as keyof QuoteTripDetails];return value?[[displayLabel,String(value)]]:[];
 });
}
export function quoteSourceUrl(path: string): string {
 return 'https://www.partybusnederland.nl'+(path.startsWith('/')&&!path.startsWith('//')?path:'/');
}
