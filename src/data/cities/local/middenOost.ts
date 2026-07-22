import type { LocalCityProfile } from '../localTypes';

type CitySource = {
	slug: string;
	name: string;
	province: string;
	character: string;
	landmarks: string;
	nightlife: string;
	nightlifeAreas: string;
	events: string;
	eventContext: string;
	weddings: string;
	weddingContext: string;
	business: string;
	businessContext: string;
	districts: string;
	districtContext: string;
	students: string;
	studentContext: string;
	pickups: string;
	pickupContext: string;
	popularity: string;
	destinations: string;
	destinationContext: string;
	tipPlaces: readonly [string, string, string, string];
	related: readonly [string, string, string, string];
};

const sources = [
	{
		slug: 'utrecht',
		name: 'Utrecht',
		province: 'Utrecht',
		character:
			'compacte binnenstad, centrale ligging en herkenbare mix van grachten, monumenten en moderne stadsdelen',
		landmarks: 'de Domtoren, de Oudegracht, Utrecht Centraal en het stationsgebied',
		nightlife:
			'Neude, Janskerkhof, de Nobelstraat en de werfkelders rond de Oudegracht',
		nightlifeAreas:
			'TivoliVredenburg biedt meerdere zalen onder één dak, terwijl cafés en kleinere podia verspreid liggen tussen het station en de oostelijke binnenstad',
		events:
			'Koningsnacht en Koningsdag, het Nederlands Film Festival, Le Guess Who? en de Utrecht Marathon',
		eventContext:
			'Rond de Singel, de binnenstad, Jaarbeurs en verschillende podia kunnen routes en verkeersmaatregelen per evenement verschillen',
		weddings:
			'Kasteel de Haar in Haarzuilens, Mereveld, Stadskasteel Oudaen en locaties aan de grachten',
		weddingContext:
			'De locaties liggen niet allemaal in hetzelfde deel van de gemeente; vooral Haarzuilens en het oostelijke buitengebied vragen om een duidelijke gezamenlijke route',
		business:
			'Jaarbeurs, Papendorp, Rijnsweerd, Lage Weide en Utrecht Science Park',
		businessContext:
			'Het stationsgebied is sterk op openbaar vervoer gericht, terwijl kantoren op Papendorp en Rijnsweerd en instellingen op De Uithof over verschillende corridors zijn verdeeld',
		districts:
			'Lombok, Wittevrouwen, Oog in Al, Tuindorp, Leidsche Rijn en Overvecht',
		districtContext:
			'De oude wijken hebben vaak smallere straten; Leidsche Rijn en delen van Overvecht bieden doorgaans ruimere wegen en meer logische verzamelpunten',
		students:
			'Universiteit Utrecht, Hogeschool Utrecht en studentenorganisaties rond de binnenstad en Utrecht Science Park',
		studentContext:
			'Introducties, verenigingsactiviteiten, gala’s en afstudeerfeesten brengen groepen samen die vaak uit kamers, campuslocaties en omliggende gemeenten komen',
		pickups:
			'de Jaarbeurszijde van Utrecht Centraal, P+R Westraven, P+R Utrecht Science Park en ruime locaties in Leidsche Rijn',
		pickupContext:
			'De binnenstad kent autoluwe straten en venstertijden; een plek aan de rand of bij een goed bereikbare hoofdweg is daarom vaak praktischer dan de Oudegracht',
		popularity:
			'groepen uit stad en regio centraal kunnen samenkomen zonder na een feest elk een afzonderlijke terugreis te hoeven organiseren',
		destinations:
			'Amsterdam, Rotterdam, Arnhem, de Veluwe, festivals in de Randstad en evenementenlocaties rond Vianen en Nieuwegein',
		destinationContext:
			'Door de ligging bij A2, A12, A27 en A28 zijn zowel westelijke steden als bestemmingen naar het zuiden en oosten logisch bereikbaar',
		tipPlaces: ['Jaarbeursplein', 'P+R Westraven', 'Haarzuilens', 'Utrecht Science Park'],
		related: ['amersfoort', 'almere', 'apeldoorn', 'arnhem'],
	},
	{
		slug: 'amersfoort',
		name: 'Amersfoort',
		province: 'Utrecht',
		character:
			'middeleeuwse binnenstad, centrale spoor- en wegligging en directe overgang naar groene gebieden rond de Utrechtse Heuvelrug en de Gelderse Vallei',
		landmarks: 'de Koppelpoort, de Onze Lieve Vrouwetoren, de Muurhuizen en de Eemhaven',
		nightlife:
			'de Hof, het Lieve Vrouwekerkhof, de Groenmarkt en de straten rond de Krommestraat',
		nightlifeAreas:
			'Flint, Fluor en De Lieve Vrouw vullen cafés en restaurants aan met concerten, theater en film, waardoor groepen meerdere soorten avondprogramma’s combineren',
		events:
			'Dias Latinos, Into the Woods, het Amersfoorts Jazzfestival en de Keistadfeesten',
		eventContext:
			'Evenementen vinden zowel in de historische kern als op grotere terreinen plaats; opstappen bij een evenement vraagt daarom altijd om controle van de actuele verkeersroute',
		weddings:
			'Kasteel De Hooge Vuursche bij Baarn, Leerhotel Het Klooster, De Observant en locaties rond de Eem',
		weddingContext:
			'Een ceremonie in de stad en feest buiten Amersfoort komen regelmatig in één programma samen, waardoor gezamenlijk vervoer rust geeft tussen de onderdelen',
		business:
			'De Hoef, Calveen, Isselt en het stationsgebied',
		businessContext:
			'De Hoef en Calveen liggen aan de noordzijde bij de A1, Isselt ligt westelijk bij de Eem en kantoren rond het station sluiten direct aan op het centrum',
		districts:
			'Vathorst, Nieuwland, Schothorst, Bergkwartier, Kattenbroek en Soesterkwartier',
		districtContext:
			'Vathorst en Nieuwland liggen noordelijk van de oude stad, terwijl Bergkwartier en Soesterkwartier andere aanrijroutes vragen; één randlocatie voorkomt onnodige lussen',
		students:
			'de opleidingen van Hogeschool Utrecht in Amersfoort en de studenten die voor studie naar Utrecht reizen',
		studentContext:
			'Het studentenleven is kleiner dan in Utrecht, maar introducties, klassenfeesten, gala’s en afstudeermomenten leveren wel duidelijke groepsritten op',
		pickups:
			'de omgeving van Amersfoort Centraal, P+R Barchman Wuytierslaan, bedrijventerrein De Hoef en ruime plekken bij Vathorst',
		pickupContext:
			'De historische kern rond de Hof en Muurhuizen is minder geschikt voor groot vervoer; een plek nabij een hoofdweg is overzichtelijker voor groep en chauffeur',
		popularity:
			'deelnemers uit Amersfoort, Leusden, Soest, Nijkerk en omliggende plaatsen één gezamenlijke rit kunnen gebruiken',
		destinations:
			'Utrecht, Amsterdam, Arnhem, de Veluwe, festivals bij recreatiegebieden en feestlocaties in het Gooi',
		destinationContext:
			'De aansluitingen op A1 en A28 maken ritten richting Randstad, Veluwe en Midden-Nederland logisch, zonder dat iedereen zelf hoeft te rijden',
		tipPlaces: ['P+R Barchman Wuytierslaan', 'De Hoef', 'Vathorst', 'Eemhaven'],
		related: ['utrecht', 'almere', 'apeldoorn', 'zwolle'],
	},
	{
		slug: 'almere',
		name: 'Almere',
		province: 'Flevoland',
		character:
			'jonge stadsopbouw, moderne architectuur en meerdere grote stadsdelen rond water, groen en gescheiden verkeersstructuren',
		landmarks: 'het Weerwater, Almere Centrum, de Kunstlinie en de skyline aan het water',
		nightlife:
			'de Grote Markt, het Belfort, de Esplanade en het centrum rond Stationsstraat',
		nightlifeAreas:
			'Kunstlinie en poppodium de Meester zorgen naast cafés, restaurants en bioscopen voor concerten en voorstellingen in het centrale uitgaansgebied',
		events:
			'Bevrijdingsfestival Flevoland, Almere City Run, Zomerfestival en evenementen rond het Weerwater',
		eventContext:
			'De Esplanade, het Lumièrepark en andere buitenlocaties trekken op piekmomenten veel bezoekers; tijdelijke afsluitingen maken een vooraf gekozen ontmoetingsplek belangrijk',
		weddings:
			'Boathouse, Haddock Watersport, Kunstlinie en locaties aan het Weerwater of Gooimeer',
		weddingContext:
			'Waterlocaties en stadsdelen liggen verspreid over Almere, zodat vervoer tussen ceremonie, fotolocatie en feestzaal vooraf als één route moet worden bekeken',
		business:
			'Veluwse Kant, Gooisekant, Sallandsekant, Stichtsekant en het zakencentrum rond station Almere Centrum',
		businessContext:
			'De terreinen liggen langs verschillende uitvalswegen en bedienen uiteenlopende stadsdelen; voor bedrijfsfeesten is verzamelen op het eigen terrein vaak eenvoudig',
		districts:
			'Almere Stad, Haven, Buiten, Poort, Hout en Nobelhorst',
		districtContext:
			'De stadsdelen liggen kilometers uit elkaar en hebben eigen centra en stations, waardoor één hoofdpick-up meestal efficiënter is dan veel korte stops',
		students:
			'Windesheim in het centrum en studenten die vanuit Almere naar Amsterdam, Utrecht of Zwolle reizen',
		studentContext:
			'Lokale introducties en afstudeerfeesten bestaan naast ritten van vriendengroepen naar studentensteden, clubs en festivals buiten Flevoland',
		pickups:
			'de omgeving van Almere Centrum, P+R Almere Poort, ruime locaties bij Veluwse Kant en afgesproken plekken in Almere Buiten',
		pickupContext:
			'Busbanen zijn niet voor regulier touringcarverkeer bedoeld; de gekozen plek moet via de gewone weg bereikbaar zijn en voldoende ruimte bieden',
		popularity:
			'de uitgestrekte stadsdelen en veelgekozen uitjes buiten de gemeente een gezamenlijke heen- en terugreis aantrekkelijk maken',
		destinations:
			'Amsterdam, Utrecht, het Gooi, Walibi Holland, festivals in Flevoland en evenementen in de Randstad',
		destinationContext:
			'Via A6 en A27 zijn Amsterdam, Midden-Nederland en noordelijk Flevoland goed verbonden, al kunnen bruggen en knooppunten tijdens spits druk zijn',
		tipPlaces: ['Almere Centrum', 'P+R Almere Poort', 'Veluwse Kant', 'Almere Buiten'],
		related: ['amsterdam', 'utrecht', 'amersfoort', 'zwolle'],
	},
	{
		slug: 'apeldoorn',
		name: 'Apeldoorn',
		province: 'Gelderland',
		character:
			'ruime lanen, groen karakter en ligging tussen stedelijke voorzieningen en de bossen en heide van de Veluwe',
		landmarks: 'Paleis Het Loo, de Apenheul, de Loolaan en het Oranjepark',
		nightlife:
			'het Caterplein, de Hoofdstraat, het Marktplein en de binnenstad rond de Kapelstraat',
		nightlifeAreas:
			'Schouwburg Orpheus en poppodium Gigant bieden theater, film en muziek naast de cafés en restaurants in het compacte centrum',
		events:
			'Koningsdag, de Midwinter Marathon, Drakenbootfestival en de intocht en activiteiten rond de Avondvierdaagse',
		eventContext:
			'Routes langs de Loolaan, binnenstad en het Kanaal kunnen tijdens grote publieksmomenten tijdelijk wijzigen; een pick-up buiten het drukste gebied voorkomt verwarring',
		weddings:
			'Paleis Het Loo, Hotel de Cantharel, Landgoed Woudhuizen en locaties in de Veluwse dorpen rond Apeldoorn',
		weddingContext:
			'Bosrijke trouwlocaties zijn sfeervol maar liggen vaak buiten het centrum, zodat heldere adressen en een gezamenlijk tijdschema belangrijk zijn',
		business:
			'Apeldoorn Noord, Ecofactorij, Malkenschoten, Brouwersmolen en het kantorengebied rond het station',
		businessContext:
			'De A1-corridor en bedrijventerreinen aan zuid- en noordzijde liggen uit elkaar; een bedrijfsadres biedt meestal een praktische eigen opstapruimte',
		districts:
			'De Maten, Zevenhuizen, Orden, Berg en Bos, Woudhuis en Zuidbroek',
		districtContext:
			'De grote woonwijken hebben brede ontsluitingswegen, terwijl Berg en Bos en oudere delen dichter bij centrum en natuur smallere lokale routes kennen',
		students:
			'de mbo- en hbo-opleidingen in de stad en jongeren die voor hoger onderwijs naar Deventer, Arnhem of Enschede reizen',
		studentContext:
			'Apeldoorn is geen klassieke studentenstad, maar schoolgala’s, examenfeesten, introducties en verenigingsuitjes vormen wel passende groepsmomenten',
		pickups:
			'de omgeving van station Apeldoorn, transferium Barnewinkel, ruime locaties bij Omnisport en bedrijventerreinen langs de A1',
		pickupContext:
			'Voor locaties in de bossen of bij attracties gelden soms eigen parkeer- en toegangsregels; spreek daarom een exact terrein of parkeerzone af',
		popularity:
			'groepen uit Apeldoorn en omliggende Veluwse dorpen samen naar een stad, festival, bruiloft of attractie kunnen reizen',
		destinations:
			'Arnhem, Nijmegen, Utrecht, Amsterdam, festivals op de Veluwe en evenementen in Deventer of Zwolle',
		destinationContext:
			'A1 en A50 verbinden Apeldoorn met Randstad, Stedendriehoek en oostelijk Nederland, terwijl lokale Veluweroutes meer reistijd kunnen vragen',
		tipPlaces: ['station Apeldoorn', 'Barnewinkel', 'Omnisport', 'Ecofactorij'],
		related: ['arnhem', 'zwolle', 'amersfoort', 'utrecht'],
	},
	{
		slug: 'zwolle',
		name: 'Zwolle',
		province: 'Overijssel',
		character:
			'historische stervormige binnenstad, sterke regiofunctie en ligging aan spoor-, weg- en waterverbindingen in Noordoost-Nederland',
		landmarks: 'de Sassenpoort, Peperbus, Thorbeckegracht en stadsgracht',
		nightlife:
			'de Melkmarkt, Grote Markt, Voorstraat en het gebied rond het Rodetorenplein',
		nightlifeAreas:
			'Poppodium Hedon en Theater de Spiegel voegen concerten en voorstellingen toe aan cafés en restaurants binnen de stadsgracht',
		events:
			'Bevrijdingsfestival Overijssel, het Straatfestival, de Halve Marathon Zwolle en carnaval in Sassendonk',
		eventContext:
			'Park de Wezenlanden, binnenstad en parcoursstraten kennen bij grote evenementen aangepaste verkeersstromen; een pick-up aan de buitenzijde is dan vaak verstandiger',
		weddings:
			'De Agnietenberg, Landgoed de Uitkijk, De Koperen Hoogte en locaties in de historische binnenstad',
		weddingContext:
			'Stadslocaties en landgoederen rond Zwolle hebben heel verschillende toegangen, waardoor vervoer tussen ceremonie, diner en feest vooraf moet worden afgestemd',
		business:
			'Hanzeland, Hessenpoort, Marslanden, Voorst en de Spoorzone',
		businessContext:
			'Hanzeland ligt direct achter het station, Hessenpoort noordelijk aan de A28 en Marslanden aan de zuidoostzijde; bedrijfsuitjes starten dus vanuit uiteenlopende richtingen',
		districts:
			'Stadshagen, Assendorp, Diezerpoort, Holtenbroek, Aa-landen en Berkum',
		districtContext:
			'Stadshagen ligt aan de overzijde van het Zwarte Water, terwijl Assendorp en Diezerpoort dichter bij station en centrum liggen; combineer haltes alleen als dat logisch blijft',
		students:
			'Windesheim, ArtEZ en Deltion College, met studentenverenigingen en onderwijsactiviteiten rond campus, station en binnenstad',
		studentContext:
			'Introductieweken, gala’s, afstudeerfeesten en verenigingsuitjes maken gezamenlijk vervoer passend, zeker wanneer de bestemming buiten de stad ligt',
		pickups:
			'de zuidzijde van station Zwolle, P+R Hanzelaan, ruime locaties op Hanzeland en afgesproken plekken bij het stadiongebied',
		pickupContext:
			'De historische binnenstad is deels autoluw en tijdens markten of evenementen druk; een goed bereikbare plek buiten de stadsgracht werkt vaak beter',
		popularity:
			'Zwolle een verzamelpunt is voor groepen uit de stad, de Kop van Overijssel, Salland en delen van Flevoland en Drenthe',
		destinations:
			'Amsterdam, Utrecht, Groningen, Enschede, festivals in Flevoland en evenementen in de IJsselvallei',
		destinationContext:
			'Via A28 en N35 en het regionale wegennet zijn noordelijke, westelijke en Twentse bestemmingen logisch, met extra aandacht voor drukte rond knooppunt Hattemerbroek',
		tipPlaces: ['P+R Hanzelaan', 'Hanzeland', 'Hessenpoort', 'stadiongebied'],
		related: ['apeldoorn', 'almere', 'amersfoort', 'groningen'],
	},
] as const satisfies readonly CitySource[];

function createProfile(city: CitySource): LocalCityProfile {
	const [firstPickup, secondPickup, thirdPickup, fourthPickup] = city.tipPlaces;

	return {
		slug: city.slug,
		intro: {
			title: `Partybus huren in ${city.name}`,
			paragraphs: [
				`Een feestelijke groepsrit vanuit ${city.name} begint met een route die bij de stad past. De ${city.character} zorgen ervoor dat groepen niet vanzelf op één plek samenkomen. Bekende oriëntatiepunten zijn ${city.landmarks}, maar zo’n herkenbare plek is niet automatisch geschikt voor een groot voertuig. Ook lokale verkeersregels kunnen per straat en tijdstip een verschil maken. Via ons vergelijkingsplatform vraag je offertes aan bij passende aanbieders en vergelijk je uitvoering, voorwaarden en mogelijkheden voor groepen tot maximaal 80 personen.`,
				`Een partybus kan worden ingezet voor een verjaardag, bruiloft, bedrijfsfeest, festival, studentenactiviteit of gezamenlijke avond uit. Het vervoer is dan niet alleen de verbinding met de bestemming: muziek, verlichting en samen reizen maken de rit onderdeel van het programma. Geef bij de aanvraag het aantal reizigers, de gewenste datum, globale tijden en eventuele tussenstops door. Aanbieders kunnen vervolgens aangeven welk voertuig en welke route bij de aanvraag passen; prijzen en beschikbaarheid verschillen per rit.`,
				`${city.name} ligt in ${city.province} en is verbonden met omliggende steden via belangrijke regionale wegen. Daardoor kan een groep lokaal opstappen en doorrijden naar ${city.destinations}. Een praktische aanvraag houdt rekening met bereikbaarheid, rusttijden, verkeersdrukte en de mogelijkheid om veilig te stoppen. Kies bij voorkeur één duidelijk verzamelpunt, laat passagiers op tijd aanwezig zijn en leg de terugrit meteen vast. Zo kun je offertes inhoudelijk vergelijken zonder te doen alsof iedere bus, route of aanbieder hetzelfde is.`,
			],
			imageAlt: `Partybus bij ${city.landmarks.split(',')[0]} in ${city.name}`,
		},
		sections: [
			{
				id: 'uitgaansleven-nachtleven',
				title: `Uitgaansleven en nachtleven in ${city.name}`,
				paragraphs: [
					`Voor een avond uit trekken groepen vaak naar ${city.nightlife}. Hier liggen horeca en ontmoetingsplekken relatief dicht bij elkaar, zodat een gezamenlijk begin- en eindpunt goed werkt.`,
					`${city.nightlifeAreas}. Controleer sluitingstijden en evenementenagenda zelf en kies voor de terugrit een bereikbare plek buiten de drukste voetgangerszone.`,
				],
			},
			{
				id: 'bekende-evenementen',
				title: `Bekende evenementen in ${city.name}`,
				paragraphs: [
					`Bekende publieksmomenten zijn ${city.events}. Ze verschillen sterk in locatie en opzet, van binnenstadsevenement tot sport- of muziekprogramma.`,
					`${city.eventContext}. Een partybus geeft geen toegang tot een evenement; tickets, toegangsregels en de officiële haal- en brenginformatie regel je afzonderlijk.`,
				],
			},
			{
				id: 'populaire-trouwlocaties',
				title: `Populaire trouwlocaties rond ${city.name}`,
				paragraphs: [
					`Voor bruiloften wordt onder meer gekeken naar ${city.weddings}. Beschikbaarheid, capaciteit en voorwaarden moeten altijd rechtstreeks bij de trouwlocatie worden gecontroleerd.`,
					`${city.weddingContext}. Vermeld kinderzitplaatsen, bagage, meerdere adressen en eindtijd vooraf, zodat aanbieders de vervoersvraag goed kunnen beoordelen.`,
				],
				imageRole: 'wedding',
			},
			{
				id: 'zakelijke-gebieden',
				title: `Bedrijventerreinen en zakelijke gebieden`,
				paragraphs: [
					`Belangrijke werkgebieden zijn ${city.business}. Daardoor kan de vertrekplek voor een bedrijfsfeest aan een heel andere kant van ${city.name} liggen dan het avondprogramma.`,
					`${city.businessContext}. Laat één organisator de passagierslijst, contactgegevens en eventuele tussenstop beheren om vertrek vanaf kantoor overzichtelijk te houden.`,
				],
				imageRole: 'business',
			},
			{
				id: 'bekende-wijken',
				title: `Bekende wijken en stadsdelen`,
				paragraphs: [
					`${city.name} bestaat onder andere uit ${city.districts}. De afstand tussen woonwijken maakt meerdere voordeurstops meestal minder efficiënt dan één centraal verzamelpunt.`,
					`${city.districtContext}. Vraag alleen extra stops aan als er veilig kan worden gehalteerd en neem de extra route- en wachttijd mee in de vergelijking.`,
				],
			},
			{
				id: 'studentenleven',
				title: `Studentenleven in ${city.name}`,
				paragraphs: [
					`Het lokale onderwijslandschap omvat ${city.students}. Voor jonge groepen blijven duidelijke afspraken over begeleiding, alcoholbeleid en gedrag in het voertuig belangrijk.`,
					`${city.studentContext}. De hoofdboeker hoort vooraf bij iedere aanbieder te controleren welke huisregels en minimumleeftijden voor de gekozen rit gelden.`,
				],
			},
			{
				id: 'lokale-opstapplaatsen',
				title: `Lokale opstapplaatsen in ${city.name}`,
				paragraphs: [
					`Praktische zoekgebieden zijn ${city.pickups}. Dit zijn aanknopingspunten, geen gegarandeerde officiële partybushaltes; de vervoerder bevestigt de exacte plek.`,
					`${city.pickupContext}. Controleer ook parkeerverboden, hoogtebeperkingen, werkzaamheden en evenementenmaatregelen kort voor vertrek.`,
				],
				imageRole: 'pickup',
			},
			{
				id: 'waarom-partybus-populair',
				title: `Waarom een partybus vanuit ${city.name} populair is`,
				paragraphs: [
					`De formule is vooral aantrekkelijk omdat ${city.popularity}. Niemand uit de groep hoeft als vaste chauffeur op te treden en het gezelschap blijft bijeen.`,
					`Daarbij is een partybus geen standaardproduct: voertuigtype, faciliteiten en voorwaarden verschillen. Juist daarom helpt vergelijken op route, capaciteit en inbegrepen diensten naast alleen het totaalbedrag.`,
				],
			},
			{
				id: 'veelgekozen-bestemmingen',
				title: `Veelgekozen bestemmingen vanuit ${city.name}`,
				paragraphs: [
					`Vanuit ${city.name} gaan groepsritten bijvoorbeeld naar ${city.destinations}. Ook een combinatie van diner, activiteit en feestlocatie kan worden aangevraagd.`,
					`${city.destinationContext}. Geef alle adressen en gewenste tijden op; pas daarna kan een aanbieder beoordelen of het programma realistisch uitvoerbaar is.`,
				],
				imageRole: 'destination',
			},
		],
		tips: [
			{
				title: `Verzamel bij ${firstPickup}`,
				text: `Controleer vooraf de exacte halteerplek en deel één kaartlink met alle passagiers; een bekende naam alleen kan meerdere ingangen betekenen.`,
			},
			{
				title: `Overweeg ${secondPickup}`,
				text: `Een locatie aan de stadsrand beperkt binnenstedelijke omwegen en is vaak overzichtelijker voor reizigers die met auto, fiets of openbaar vervoer komen.`,
			},
			{
				title: `Plan rond ${thirdPickup}`,
				text: `Bekijk werkzaamheden en lokale evenementen kort voor vertrek, want tijdelijke maatregelen kunnen de afgesproken aanrijroute of wachtruimte veranderen.`,
			},
			{
				title: `Maak ${fourthPickup} concreet`,
				text: `Leg adres, zijde van de weg, contactpersoon en uiterste vertrektijd vast en laat één groepscoördinator het contact met de chauffeur voeren.`,
			},
		],
		faqs: [
			{
				question: `Waar kan een partybus in ${city.name} het beste opstappen?`,
				answer: `Kijk eerst naar ${city.pickups}. De beste keuze hangt af van voertuig, route en lokale regels. De aanbieder moet de definitieve veilige opstapplaats bevestigen.`,
			},
			{
				question: `Kan een partybus de binnenstad van ${city.name} in?`,
				answer: `Dat is niet overal vanzelfsprekend. Autoluwe zones, smalle straten en tijdelijke afsluitingen kunnen gelden. Een randlocatie is soms praktischer; laat de vervoerder de route toetsen.`,
			},
			{
				question: `Voor hoeveel personen kan ik in ${city.name} aanvragen?`,
				answer: `Via het platform kun je een aanvraag doen voor een passende groepsgrootte tot maximaal 80 personen. De feitelijke capaciteit verschilt per aangeboden voertuig en opstelling.`,
			},
			{
				question: `Kan de bus meerdere wijken in ${city.name} aandoen?`,
				answer: `Je kunt tussenstops aanvragen, bijvoorbeeld rond ${city.districts}. Extra stops kosten reistijd en moeten veilig bereikbaar zijn; vermeld ze daarom direct in je aanvraag.`,
			},
			{
				question: `Kan ik vanuit ${city.name} naar een festival reizen?`,
				answer: `Ja, je kunt vervoer naar festivals aanvragen. Controleer zelf tickets en de officiële buszone. De vervoerder beoordeelt route, tijden en toegestane haal- en brengplek.`,
			},
			{
				question: `Is een partybus geschikt voor een bruiloft rond ${city.name}?`,
				answer: `Groepsvervoer naar onder meer ${city.weddings} kan worden aangevraagd. Geef alle programma-adressen, gastenverdeling, bagage en gewenste aankomsttijden vooraf volledig door.`,
			},
			{
				question: `Wat moet ik doorgeven voor een bedrijfsfeest in ${city.name}?`,
				answer: `Noem vertrekadres, bestemming, groepsgrootte, datum, tijdvensters en eventuele stops. Voor locaties rond ${city.business} helpt ook een contactpersoon die het terrein kent.`,
			},
			{
				question: `Hoe vergelijk ik partybusoffertes voor vertrek uit ${city.name}?`,
				answer: `Vergelijk niet alleen het totaal, maar ook voertuigcapaciteit, route, wachttijd, faciliteiten, annuleringsvoorwaarden en wat inbegrepen is. Beschikbaarheid en prijs staan pas in de individuele offerte.`,
			},
		],
		relatedCitySlugs: city.related,
		imageAlts: {
			hero: `Feestelijke partybus onderweg langs ${city.landmarks.split(',')[0]} in ${city.name}`,
			nightlife: `Avondverlichting bij ${city.nightlife.split(',')[0]} in ${city.name}`,
			wedding: `Gezamenlijk trouwvervoer naar ${city.weddings.split(',')[0]} vanuit ${city.name}`,
			business: `Partybus voor bedrijfsuitje vanaf ${city.business.split(',')[0]} in ${city.name}`,
			pickup: `Groep bij afgesproken opstapplaats ${firstPickup} in ${city.name}`,
			destination: `Partybus vanuit ${city.name} op weg naar ${city.destinations.split(',')[0]}`,
		},
	};
}

export const localProfilesMiddenOost: readonly LocalCityProfile[] = sources.map(createProfile);
