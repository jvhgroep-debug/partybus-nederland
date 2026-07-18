export const legalNav = [
	{ label: 'Privacybeleid', href: '/privacybeleid/' },
	{ label: 'Cookiebeleid', href: '/cookiebeleid/' },
	{ label: 'Algemene voorwaarden', href: '/algemene-voorwaarden/' },
	{ label: 'Disclaimer', href: '/disclaimer/' },
	{ label: 'Contact', href: '/contact/' },
] as const;

export type LegalPageDef = {
	slug: string;
	path: string;
	canonical: string;
	title: string;
	description: string;
	h1: string;
	lead: string;
	updated: string;
	sections: readonly { title: string; paragraphs: readonly string[] }[];
};

const SITE = 'https://www.partybusnederland.nl';

function legalPage(
	slug: string,
	meta: Omit<LegalPageDef, 'slug' | 'path' | 'canonical'>,
): LegalPageDef {
	const path = `/${slug}/`;
	return { slug, path, canonical: `${SITE}${path}`, ...meta };
}

export const privacybeleidPage = legalPage('privacybeleid', {
	title: 'Privacybeleid | Partybus Nederland',
	description:
		'Lees hoe Partybus Nederland omgaat met persoonsgegevens bij offerteaanvragen, contact en websitegebruik.',
	h1: 'Privacybeleid',
	lead: 'Partybus Nederland respecteert je privacy. Op deze pagina leggen we uit welke gegevens we verwerken, waarom we dat doen en welke rechten je hebt.',
	updated: '18 juli 2026',
	sections: [
		{
			title: 'Wie zijn wij?',
			paragraphs: [
				'Partybus Nederland is een informatieve website over partybus huren in Nederland. We helpen bezoekers met praktische informatie en het vrijblijvend vergelijken van offertes.',
				'Voor vragen over privacy kun je contact met ons opnemen via de contactpagina of WhatsApp.',
			],
		},
		{
			title: 'Welke gegevens verwerken we?',
			paragraphs: [
				'Wanneer je een offerteaanvraag of contactformulier invult, kunnen we gegevens verwerken zoals naam, e-mailadres, telefoonnummer, vertrekplaats, bestemming, datum, groepsgrootte en overige wensen die je zelf doorgeeft.',
				'Daarnaast kunnen technische gegevens worden verwerkt die nodig zijn voor het veilig en stabiel laten werken van de website, zoals IP-adres, browsertype en tijdstip van bezoek.',
			],
		},
		{
			title: 'Waarom verwerken we gegevens?',
			paragraphs: [
				'We verwerken gegevens om je aanvraag te behandelen, je van dienst te kunnen zijn, de website te verbeteren en — waar van toepassing — te voldoen aan wettelijke verplichtingen.',
				'Offerteaanvragen kunnen worden doorgestuurd naar relevante aanbieders, zodat jij vrijblijvend voorstellen kunt vergelijken. We verkopen je gegevens niet.',
			],
		},
		{
			title: 'Bewaartermijn',
			paragraphs: [
				'We bewaren persoonsgegevens niet langer dan nodig is voor het doel waarvoor ze zijn verzameld, of zolang dat wettelijk verplicht is.',
				'Als je wilt dat we je gegevens eerder verwijderen, kun je dat via de contactpagina aanvragen.',
			],
		},
		{
			title: 'Jouw rechten',
			paragraphs: [
				'Je hebt onder meer het recht op inzage, rectificatie, verwijdering en beperking van de verwerking van je persoonsgegevens, voor zover de wet dat toelaat.',
				'Je kunt ook bezwaar maken tegen bepaalde verwerkingen. Neem hiervoor contact met ons op via de contactpagina.',
			],
		},
		{
			title: 'Beveiliging',
			paragraphs: [
				'We nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik of onbevoegde toegang.',
				'Geen enkele online verzending of opslag is 100% veilig. We raden aan gevoelige informatie alleen te delen wanneer dat nodig is voor je aanvraag.',
			],
		},
		{
			title: 'Wijzigingen',
			paragraphs: [
				'Dit privacybeleid kan worden bijgewerkt. De meest recente versie staat altijd op deze pagina.',
				'Voor meer informatie over cookies, zie ons cookiebeleid.',
			],
		},
	],
});

export const cookiebeleidPage = legalPage('cookiebeleid', {
	title: 'Cookiebeleid | Partybus Nederland',
	description:
		'Uitleg over cookies en vergelijkbare technieken op Partybus Nederland: wat we gebruiken en waarom.',
	h1: 'Cookiebeleid',
	lead: 'Deze pagina legt uit wat cookies zijn, welke soorten op Partybus Nederland kunnen worden gebruikt en hoe je je voorkeuren kunt beheren.',
	updated: '18 juli 2026',
	sections: [
		{
			title: 'Wat zijn cookies?',
			paragraphs: [
				'Cookies zijn kleine tekstbestanden die je browser opslaat wanneer je een website bezoekt. Ze helpen onder meer bij het goed laten functioneren van de site en bij het begrijpen hoe bezoekers de site gebruiken.',
				'Naast cookies kunnen vergelijkbare technieken worden gebruikt, zoals lokale opslag in de browser.',
			],
		},
		{
			title: 'Welke cookies gebruiken we?',
			paragraphs: [
				'Functionele cookies of technische middelen kunnen nodig zijn om de website stabiel en veilig te laten werken.',
				'Analytische of marketingcookies kunnen worden gebruikt om het gebruik van de website te meten of — indien later geplaatst — advertenties te ondersteunen. Waar toestemming wettelijk vereist is, vragen we die eerst.',
			],
		},
		{
			title: 'Cookies beheren',
			paragraphs: [
				'Je kunt cookies zelf beheren of verwijderen via de instellingen van je browser. Let op: als je cookies uitschakelt, kunnen sommige onderdelen van de website minder goed werken.',
				'Meer informatie over privacy vind je in ons privacybeleid.',
			],
		},
		{
			title: 'Derden',
			paragraphs: [
				'Soms kunnen diensten van derden cookies plaatsen, bijvoorbeeld voor analyse, formulierverwerking of — indien van toepassing — advertenties.',
				'Die derden hebben eigen privacy- en cookieverklaringen. We raden aan die ook te raadplegen.',
			],
		},
		{
			title: 'Wijzigingen',
			paragraphs: [
				'Dit cookiebeleid kan worden bijgewerkt wanneer we onze website of diensten aanpassen.',
				'Heb je vragen? Neem contact met ons op via de contactpagina.',
			],
		},
	],
});

export const algemeneVoorwaardenPage = legalPage('algemene-voorwaarden', {
	title: 'Algemene voorwaarden | Partybus Nederland',
	description:
		'Algemene voorwaarden van Partybus Nederland: gebruik van de website, offerteaanvragen en verantwoordelijkheden.',
	h1: 'Algemene voorwaarden',
	lead: 'Deze voorwaarden gelden voor het gebruik van de website Partybus Nederland en voor aanvragen die je via de site doet.',
	updated: '18 juli 2026',
	sections: [
		{
			title: 'Over Partybus Nederland',
			paragraphs: [
				'Partybus Nederland biedt informatie over partybus huren en helpt bezoekers vrijblijvend offertes te vergelijken. We zijn geen vervoerder en garanderen geen beschikbaarheid van een specifieke bus of aanbieder.',
				'Offertes en overeenkomsten komen tot stand tussen jou en de betreffende aanbieder, tenzij nadrukkelijk anders is aangegeven.',
			],
		},
		{
			title: 'Gebruik van de website',
			paragraphs: [
				'Je mag de website gebruiken voor informatieve doeleinden en om een aanvraag te doen. Misbruik, spam of pogingen om de site te verstoren zijn niet toegestaan.',
				'Inhoud op de website is met zorg samengesteld, maar kan onvolledig of verouderd zijn. Controleer belangrijke details altijd bij de aanbieder.',
			],
		},
		{
			title: 'Offerteaanvragen',
			paragraphs: [
				'Een aanvraag via het formulier is vrijblijvend. Je ontvangt geen vaste landelijke prijsgarantie via Partybus Nederland.',
				'Door een aanvraag te versturen, geef je aan dat de doorgegeven gegevens juist zijn en dat we deze mogen gebruiken om je aanvraag te behandelen en door te zetten naar relevante aanbieders.',
			],
		},
		{
			title: 'Prijzen en capaciteit',
			paragraphs: [
				'Op de website noemen we geen vaste tarieven. Prijzen hangen af van onder meer route, uren, datum, groepsgrootte en extra’s.',
				'Groepen tot maximaal 80 personen zijn mogelijk, afhankelijk van het voertuig en de aanbieder. Exacte capaciteit volgt uit de offerte.',
			],
		},
		{
			title: 'Aansprakelijkheid',
			paragraphs: [
				'Partybus Nederland is niet aansprakelijk voor schade die voortvloeit uit het gebruik van de website, uit offertes van derden of uit ritten die door aanbieders worden uitgevoerd, voor zover de wet dat toelaat.',
				'Zie ook onze disclaimer voor aanvullende informatie.',
			],
		},
		{
			title: 'Contact',
			paragraphs: [
				'Vragen over deze voorwaarden kun je stellen via de contactpagina.',
				'We kunnen deze voorwaarden wijzigen. De actuele versie staat altijd op deze pagina.',
			],
		},
	],
});

export const disclaimerPage = legalPage('disclaimer', {
	title: 'Disclaimer | Partybus Nederland',
	description:
		'Disclaimer van Partybus Nederland over informatie, offertes, prijzen en aansprakelijkheid.',
	h1: 'Disclaimer',
	lead: 'De informatie op Partybus Nederland is bedoeld als algemene voorlichting. Lees hier wat je wel en niet van de website mag verwachten.',
	updated: '18 juli 2026',
	sections: [
		{
			title: 'Geen vervoersgarantie',
			paragraphs: [
				'Partybus Nederland garandeert geen beschikbaarheid van partybussen, chauffeurs of specifieke data. Beschikbaarheid verschilt per aanbieder en periode.',
				'Een aanvraag via onze website is een verzoek om informatie of offertes — geen boeking tot er een overeenkomst is met een aanbieder.',
			],
		},
		{
			title: 'Geen vaste prijzen',
			paragraphs: [
				'We publiceren geen vaste landelijke prijzen. Bedragen in offertes komen van aanbieders en hangen af van jouw concrete rit.',
				'Vergelijk altijd meerdere voorstellen en let op wat wel en niet is inbegrepen.',
			],
		},
		{
			title: 'Inhoud van de website',
			paragraphs: [
				'Hoewel we streven naar actuele en nuttige informatie, kunnen teksten, afbeeldingen of links onvolledig of verouderd zijn.',
				'Externe websites waarnaar we linken vallen onder de verantwoordelijkheid van die derden.',
			],
		},
		{
			title: 'Aansprakelijkheid',
			paragraphs: [
				'Voor zover wettelijk toegestaan aanvaardt Partybus Nederland geen aansprakelijkheid voor directe of indirecte schade die voortvloeit uit het gebruik van de website of uit diensten van derden.',
				'Voor de uitvoering van een rit en de voorwaarden daarvan is de gekozen aanbieder verantwoordelijk.',
			],
		},
		{
			title: 'Vragen',
			paragraphs: [
				'Heb je vragen over deze disclaimer of over onze dienstverlening? Neem contact met ons op via de contactpagina.',
				'Meer over privacy en cookies lees je in het privacybeleid en cookiebeleid.',
			],
		},
	],
});

export const legalPages = [
	privacybeleidPage,
	cookiebeleidPage,
	algemeneVoorwaardenPage,
	disclaimerPage,
] as const;
