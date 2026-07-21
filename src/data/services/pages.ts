export type ServiceFaq = {
	question: string;
	answer: string;
};

export type ServicePage = {
	slug: string;
	path: string;
	canonical: string;
	title: string;
	metaDescription: string;
	h1: string;
	eyebrow: string;
	lead: string;
	image: string;
	imageAlt: string;
	benefits: readonly { title: string; text: string }[];
	idealFor: readonly string[];
	planning: readonly { title: string; text: string }[];
	safetyText: string;
	faqs: readonly ServiceFaq[];
};

const quotePath = '/gratis-partybus-offertes-aanvragen/';

const commonPlanning = [
	{
		title: 'Deel je ritgegevens',
		text: 'Vermeld datum, groepsgrootte, opstapplaats, bestemming en gewenste tijden. Voeg bijzondere wensen direct toe.',
	},
	{
		title: 'Vergelijk passende voorstellen',
		text: 'Beoordeel niet alleen de prijs, maar ook capaciteit, uitvoering, voorwaarden en wat bij de rit is inbegrepen.',
	},
	{
		title: 'Kies zelf je aanbieder',
		text: 'Je aanvraag is vrijblijvend. Je bepaalt zelf welk voorstel het beste aansluit bij jouw groep en planning.',
	},
] as const;

function page(
	slug: string,
	data: Omit<ServicePage, 'slug' | 'path' | 'canonical' | 'planning'> & {
		planning?: ServicePage['planning'];
	},
): ServicePage {
	const path = `/diensten/${slug}/`;
	return {
		slug,
		path,
		canonical: `https://www.partybusnederland.nl${path}`,
		planning: data.planning ?? commonPlanning,
		...data,
	};
}

export const servicePages: readonly ServicePage[] = [
	page('partybus-vrijgezellenfeest', {
		title: 'Partybus voor vrijgezellenfeest | Offertes vergelijken',
		metaDescription:
			'Partybus voor een vrijgezellenfeest huren? Vergelijk gratis offertes voor vervoer, muziek, verlichting en meerdere stops.',
		h1: 'Partybus voor een vrijgezellenfeest',
		eyebrow: 'Vrijgezellenfeest',
		lead: 'Laat het feest beginnen zodra iedereen instapt. Vergelijk partybussen die passen bij jullie route, groepsgrootte en plannen voor de avond.',
		image: '/images/interior-partybus.png',
		imageAlt: 'Sfeervol interieur van een partybus voor een vrijgezellenfeest',
		benefits: [
			{ title: 'De groep blijft samen', text: 'Geen losse taxi’s of discussie over wie rijdt: iedereen vertrekt en arriveert als groep.' },
			{ title: 'Feest tussen de stops', text: 'Muziek en sfeerverlichting maken ook de verplaatsing onderdeel van het programma.' },
			{ title: 'Route op maat', text: 'Vraag één of meerdere opstapplaatsen en stops aan, voor zover route en aanbieder dit toelaten.' },
		],
		idealFor: ['Diner en uitgaan combineren', 'Een verrassingsprogramma', 'Meerdere locaties op één avond', 'Groepen tot maximaal 80 personen'],
		safetyText: 'Spreek vooraf opstapplaatsen, tijden, huisregels en de rol van de chauffeur af. Zo blijft de avond feestelijk én overzichtelijk.',
		faqs: [
			{ question: 'Kunnen we meerdere stops plannen?', answer: 'Ja, dat is vaak mogelijk. Zet alle gewenste stops in de aanvraag, zodat aanbieders route en tijd realistisch kunnen beoordelen.' },
			{ question: 'Mag eigen muziek mee?', answer: 'De mogelijkheden verschillen per bus. Vraag naar bluetooth, geluidsinstallatie en eventuele regels in de offerte.' },
			{ question: 'Kunnen deelnemers op verschillende plekken instappen?', answer: 'Vaak wel, zolang de route haalbaar blijft. Meerdere opstapplaatsen kunnen invloed hebben op ritduur en prijs.' },
			{ question: 'Hoe vroeg moeten we aanvragen?', answer: 'Voor vrijdagen, zaterdagen en populaire data is vroeg aanvragen verstandig. Beschikbaarheid wordt door aanbieders bepaald.' },
		],
	}),
	page('partybus-bedrijfsuitje', {
		title: 'Partybus voor bedrijfsuitje | Zakelijk groepsvervoer',
		metaDescription:
			'Partybus voor een bedrijfsuitje of relatie-event? Vergelijk vrijblijvend aanbieders voor representatief en praktisch groepsvervoer.',
		h1: 'Partybus voor een bedrijfsuitje',
		eyebrow: 'Bedrijfsuitje',
		lead: 'Regel één centraal vervoersmoment voor collega’s of relaties en maak van de transfer een energieke start van het programma.',
		image: '/images/partybus-nederland.png',
		imageAlt: 'Luxe partybus voor een bedrijfsuitje',
		benefits: [
			{ title: 'Eén gezamenlijke planning', text: 'Collega’s reizen samen van kantoor of verzamelpunt naar de locatie en terug.' },
			{ title: 'Representatief vervoer', text: 'Vergelijk voertuigen op uitstraling, zitplaatsen, faciliteiten en gewenste sfeer.' },
			{ title: 'Minder logistiek werk', text: 'Bundel groepsvervoer in één aanvraag met heldere tijden, route en contactpersoon.' },
		],
		idealFor: ['Teamuitjes', 'Personeelsfeesten', 'Beurzen en congressen', 'Relatie-evenementen'],
		safetyText: 'Vraag aanbieders naar vervoersvoorwaarden, capaciteit, verzekeringen en afspraken over alcohol. Wijs intern één contactpersoon voor de chauffeur aan.',
		faqs: [
			{ question: 'Kunnen we bij kantoor worden opgehaald?', answer: 'Dat kan vaak als de locatie veilig en bereikbaar is. Geef het volledige adres en eventuele toegangsinstructies door.' },
			{ question: 'Is een factuur voor bedrijven mogelijk?', answer: 'Facturatie en betaalvoorwaarden worden door de gekozen aanbieder bepaald. Neem deze wens mee bij het vergelijken.' },
			{ question: 'Kunnen we heen- en terugvervoer aanvragen?', answer: 'Ja. Vermeld beide tijden en geef aan of de bus tussendoor moet wachten of later moet terugkomen.' },
			{ question: 'Zijn meerdere vestigingen als opstapplaats mogelijk?', answer: 'Vaak wel. Laat aanbieders beoordelen welke volgorde efficiënt en haalbaar is.' },
		],
	}),
	page('partybus-bruiloft', {
		title: 'Partybus voor bruiloft | Trouwvervoer vergelijken',
		metaDescription:
			'Partybus voor een bruiloft huren? Vergelijk gratis offertes voor stijlvol groepsvervoer tussen ceremonie, receptie en feestlocatie.',
		h1: 'Partybus voor een bruiloft',
		eyebrow: 'Bruiloft',
		lead: 'Breng gasten gezamenlijk en feestelijk tussen ceremonie, diner en feestlocatie, met een planning die aansluit op jullie trouwdag.',
		image: '/images/partybus-verhuur.png',
		imageAlt: 'Partybus als groepsvervoer voor een bruiloft',
		benefits: [
			{ title: 'Gasten samen op tijd', text: 'Beperk losse auto’s en parkeerdruk door gasten vanaf een afgesproken punt te vervoeren.' },
			{ title: 'Feestelijke overgang', text: 'De rit vormt een ontspannen overgang tussen formele momenten en het avondfeest.' },
			{ title: 'Afspraken op maat', text: 'Vergelijk mogelijkheden voor decoratie, muziek, meerdere ritten en een terugbrengservice.' },
		],
		idealFor: ['Vervoer van daggasten', 'Transfer naar de feestlocatie', 'Shuttles na het feest', 'Vrijgezellen- of afterparty'],
		safetyText: 'Leg adressen, aankomstvensters en aanspreekpunten schriftelijk vast. Houd rekening met bereikbaarheid van trouwlocaties en een veilige uitstapplek voor gasten.',
		faqs: [
			{ question: 'Kan de partybus meerdere ritten op één dag uitvoeren?', answer: 'Dat kan afhankelijk van planning en aanbieder. Beschrijf alle gewenste ritmomenten in één aanvraag.' },
			{ question: 'Mag de bus worden versierd?', answer: 'Decoratie is soms mogelijk, maar alleen in overleg. Vraag vooraf wat is toegestaan en wie dit verzorgt.' },
			{ question: 'Kunnen oudere gasten comfortabel mee?', answer: 'Voertuigen verschillen in instap en inrichting. Benoem mobiliteitswensen zodat aanbieders passend kunnen reageren.' },
			{ question: 'Is nachtelijk terugvervoer mogelijk?', answer: 'Vaak wel. Geef de gewenste eindtijd en terugbrenglocaties vooraf door.' },
		],
	}),
	page('partybus-verjaardag', {
		title: 'Partybus voor verjaardag | Gratis offertes vergelijken',
		metaDescription:
			'Vier je verjaardag in een partybus. Vergelijk vrijblijvende offertes voor een feestelijke rit, avond uit of vervoer naar een locatie.',
		h1: 'Partybus voor een verjaardag',
		eyebrow: 'Verjaardag',
		lead: 'Maak de rit onderdeel van het feest: haal de groep op, bezoek een bestemming en reis na afloop samen terug.',
		image: '/images/hero-partybus.png',
		imageAlt: 'Partybus voor een verjaardagsfeest',
		benefits: [
			{ title: 'Een opvallende entree', text: 'Kom als groep aan bij restaurant, club, evenement of verrassingslocatie.' },
			{ title: 'Programma op maat', text: 'Combineer een rondrit met één of meerdere bestemmingen en een gezamenlijke terugrit.' },
			{ title: 'Voor kleine en grote groepen', text: 'Vergelijk capaciteit en inrichting op basis van jullie daadwerkelijke groepsgrootte.' },
		],
		idealFor: ['18e, 21e, 30e of 50e verjaardag', 'Surpriseparty’s', 'Etentje en uitgaan', 'Een avond met meerdere stops'],
		safetyText: 'Maak afspraken over alcohol, muziek, maximale capaciteit en gedrag in de bus. Voor jonge deelnemers kunnen aanvullende voorwaarden gelden.',
		faqs: [
			{ question: 'Is een partybus geschikt voor een kleine groep?', answer: 'Dat hangt af van het aanbod. Geef het exacte aantal door, zodat aanbieders een passende optie kunnen voorstellen.' },
			{ question: 'Kan de jarige thuis worden opgehaald?', answer: 'Dat kan als de locatie veilig bereikbaar is. Een centrale opstapplaats kan logistiek voordeliger zijn.' },
			{ question: 'Kunnen we eten of drinken meenemen?', answer: 'Huisregels verschillen per aanbieder. Vraag vooraf wat is toegestaan en of schoonmaakkosten gelden.' },
			{ question: 'Kunnen we na het feest worden thuisgebracht?', answer: 'Een gezamenlijke terugrit of meerdere uitstappunten zijn vaak bespreekbaar. Neem dit mee in de routeaanvraag.' },
		],
	}),
	page('partybus-festival', {
		title: 'Partybus voor festival | Festivalvervoer vergelijken',
		metaDescription:
			'Met een partybus naar een festival? Vergelijk gratis offertes voor heen- en terugvervoer, centrale opstapplaatsen en groepen.',
		h1: 'Partybus voor festivalvervoer',
		eyebrow: 'Festival',
		lead: 'Reis samen naar het festivalterrein en regel de terugrit direct mee. Zo hoeft niemand te rijden en blijft de groep bij elkaar.',
		image: '/images/partybus-arena.png',
		imageAlt: 'Partybus onderweg naar een festival',
		benefits: [
			{ title: 'Heen en terug geregeld', text: 'Leg vertrek- en terugkeertijd vooraf vast en voorkom losse vervoersplannen na afloop.' },
			{ title: 'Centrale opstapplaats', text: 'Kies een goed bereikbare plek waar de groep veilig kan verzamelen.' },
			{ title: 'Sfeer onderweg', text: 'Begin de festivalbeleving in de bus, binnen de huisregels van de aanbieder.' },
		],
		idealFor: ['Dagfestivals', 'Meerdaagse festivals', 'Concerten en dance-events', 'Festivals in Nederland en België'],
		safetyText: 'Controleer de officiële busparking, toegangsroute en vertrektijden van het festival. Spreek een herkenbare verzamelplek en noodcontact af.',
		faqs: [
			{ question: 'Kan de bus bij de officiële festivalparking stoppen?', answer: 'Dat hangt af van het evenement. Deel parkeer- of touringcarinformatie met de aanbieder zodra deze beschikbaar is.' },
			{ question: 'Kan bagage of kampeerspullen mee?', answer: 'Bagageruimte verschilt per voertuig. Geef aantallen en formaat vooraf door.' },
			{ question: 'Wat als het festivalprogramma uitloopt?', answer: 'Bespreek vooraf wachttijd en wijzigingsvoorwaarden. De chauffeur moet zich aan rij- en rusttijden houden.' },
			{ question: 'Zijn ritten naar België mogelijk?', answer: 'Veel aanbieders verzorgen grensoverschrijdende ritten. Vraag specifiek naar bestemming, tijden en voorwaarden.' },
		],
	}),
	page('partybus-gala', {
		title: 'Partybus voor gala | Stijlvol groepsvervoer',
		metaDescription:
			'Partybus voor een gala huren? Vergelijk offertes voor een stijlvolle aankomst, gezamenlijke heenrit en veilig terugvervoer.',
		h1: 'Partybus voor een gala',
		eyebrow: 'Gala',
		lead: 'Maak samen een stijlvolle entree en regel het vervoer naar én van de galalocatie in één duidelijke aanvraag.',
		image: '/images/partybus-collage.png',
		imageAlt: 'Luxe partybus voor vervoer naar een gala',
		benefits: [
			{ title: 'Samen arriveren', text: 'De groep komt tegelijk en zichtbaar aan bij de galalocatie.' },
			{ title: 'Comfort voor nette kleding', text: 'Vergelijk inrichting, instap en zitcapaciteit passend bij jullie gezelschap.' },
			{ title: 'Terugrit vooraf vastgelegd', text: 'Voorkom improvisatie na afloop met een afgesproken tijd en uitstapplaats.' },
		],
		idealFor: ['Schoolgala’s', 'Studentengala’s', 'Bedrijfsgala’s', 'Award- en jubileumavonden'],
		safetyText: 'Zorg voor een veilige opstapplaats, duidelijke passagierslijst en één volwassen contactpersoon wanneer de groep uit minderjarigen bestaat.',
		faqs: [
			{ question: 'Kunnen ouders of begeleiders afspraken maken met de chauffeur?', answer: 'Ja. Geef één contactpersoon door en leg ophaal- en terugbrengtijden vooraf vast.' },
			{ question: 'Kunnen we een fotostop plannen?', answer: 'Dat is soms mogelijk als de locatie veilig bereikbaar is en de planning het toelaat.' },
			{ question: 'Is vervoer voor minderjarigen mogelijk?', answer: 'Voorwaarden verschillen per aanbieder. Vermeld leeftijden en begeleiding duidelijk in de aanvraag.' },
			{ question: 'Kan de bus ons na afloop op meerdere plekken afzetten?', answer: 'Dat is vaak bespreekbaar, maar beïnvloedt route en ritduur. Geef alle gewenste stops vooraf door.' },
		],
	}),
	page('partybus-schoolfeest', {
		title: 'Partybus voor schoolfeest | Veilig groepsvervoer',
		metaDescription:
			'Partybus voor een schoolfeest aanvragen? Vergelijk aanbieders op capaciteit, begeleiding, afspraken en veilig heen- en terugvervoer.',
		h1: 'Partybus voor een schoolfeest',
		eyebrow: 'Schoolfeest',
		lead: 'Bundel het vervoer van leerlingen of studenten met heldere afspraken over begeleiding, opstapplaatsen en terugkomst.',
		image: '/images/partybus-collage.png',
		imageAlt: 'Partybus als groepsvervoer naar een schoolfeest',
		benefits: [
			{ title: 'Overzichtelijke groepsreis', text: 'Werk met vaste opstapplaatsen, een passagierslijst en één contactpersoon.' },
			{ title: 'Duidelijke voorwaarden', text: 'Vergelijk aanbieders op huisregels, begeleiding, capaciteit en uitvoering.' },
			{ title: 'Geplande terugkomst', text: 'Leg de terugrit vooraf vast en communiceer deze duidelijk naar ouders en deelnemers.' },
		],
		idealFor: ['Eindexamenfeesten', 'Introductieactiviteiten', 'Schoolgala’s', 'Studentenverenigingen'],
		safetyText: 'Leeftijd, begeleiding en alcoholbeleid zijn essentieel. Laat school en aanbieder vooraf schriftelijk bevestigen welke regels gelden.',
		faqs: [
			{ question: 'Is volwassen begeleiding verplicht?', answer: 'Dat verschilt per aanbieder, leeftijdsgroep en schoolbeleid. Vermeld de samenstelling van de groep in de aanvraag.' },
			{ question: 'Hoe regelen we aanwezigheid?', answer: 'Werk met een deelnemerslijst en laat één begeleider bij vertrek en terugkomst tellen.' },
			{ question: 'Gelden er andere regels voor minderjarigen?', answer: 'Ja, aanbieders kunnen aanvullende huisregels hanteren. Vraag deze vooraf op en deel ze met deelnemers.' },
			{ question: 'Kan de school rechtstreeks aanvragen?', answer: 'Ja. Gebruik de gegevens van de verantwoordelijke organisator als contactgegevens.' },
		],
	}),
	page('partybus-vip-vervoer', {
		title: 'Partybus voor VIP-vervoer | Luxe vervoer vergelijken',
		metaDescription:
			'VIP-partybus of luxe groepsvervoer nodig? Vergelijk aanbieders op uitstraling, privacy, faciliteiten en route op maat.',
		h1: 'Partybus voor VIP-vervoer',
		eyebrow: 'VIP-vervoer',
		lead: 'Vergelijk luxe groepsvervoer voor gasten, artiesten, relaties of een bijzondere avond, afgestemd op uitstraling en planning.',
		image: '/images/partybus-verhuur.png',
		imageAlt: 'Luxe partybus voor VIP-groepsvervoer',
		benefits: [
			{ title: 'Uitstraling die past', text: 'Vergelijk voertuigen op interieur, capaciteit, privacy en gewenste ontvangst.' },
			{ title: 'Route en timing op maat', text: 'Plan hotels, eventlocaties, backstage-ingangen of meerdere afspraken in één rit.' },
			{ title: 'Eén aanspreekpunt', text: 'Werk met een duidelijke contactpersoon voor wijzigingen en ontvangst ter plaatse.' },
		],
		idealFor: ['Artiesten en crew', 'Relaties en directieteams', 'Premières en evenementen', 'Luxe avondprogramma’s'],
		safetyText: 'Deel alleen noodzakelijke persoonsgegevens en bespreek privacy, toegangsinstructies en last-minute wijzigingen rechtstreeks met de gekozen aanbieder.',
		faqs: [
			{ question: 'Kunnen we een specifiek voertuigtype aanvragen?', answer: 'Ja. Beschrijf gewenste uitstraling en faciliteiten; beschikbaarheid verschilt per aanbieder.' },
			{ question: 'Is discreet vervoer mogelijk?', answer: 'Bespreek privacy- en ontvangstwensen vooraf. Aanbieders kunnen aangeven welke aanpak zij ondersteunen.' },
			{ question: 'Kunnen er last-minute routewijzigingen worden gedaan?', answer: 'Dat hangt af van planning en rijtijden. Leg vast hoe wijzigingen worden doorgegeven en welke kosten kunnen gelden.' },
			{ question: 'Is vervoer naar België of Duitsland mogelijk?', answer: 'Grensoverschrijdend vervoer is bij sommige aanbieders mogelijk. Vermeld alle landen en adressen in de aanvraag.' },
		],
	}),
] as const;

export const servicePageBySlug = new Map(servicePages.map((item) => [item.slug, item] as const));

export function getServicePage(slug: string): ServicePage | undefined {
	return servicePageBySlug.get(slug);
}

export { quotePath };
