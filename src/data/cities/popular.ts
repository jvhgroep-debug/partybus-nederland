export type PopularCity = {
	name: string;
	slug: string;
	blurb: string;
	image: string;
};

export const popularCities: PopularCity[] = [
	{
		name: 'Amsterdam',
		slug: 'amsterdam',
		blurb: 'Nightlife, Rembrandtplein en een partybus door de stad.',
		image: '/images/hero-partybus.png',
	},
	{
		name: 'Rotterdam',
		slug: 'rotterdam',
		blurb: 'Skyline, havens en een royale bus voor jouw feestavond.',
		image: '/images/partybus-verhuur.png',
	},
	{
		name: 'Utrecht',
		slug: 'utrecht',
		blurb: 'Centraal gelegen — ideaal voor vrijgezellen en groepen.',
		image: '/images/partybus-nederland.png',
	},
	{
		name: 'Den Haag',
		slug: 'den-haag',
		blurb: 'Scheveningen, Skybar vibes en comfortabel vervoer.',
		image: '/images/partybus-collage.png',
	},
	{
		name: 'Eindhoven',
		slug: 'eindhoven',
		blurb: 'Strakke designstad met een partybus die opvalt.',
		image: '/images/partybus-arena.png',
	},
	{
		name: 'Breda',
		slug: 'breda',
		blurb: 'Bourgondische stad met een bruisend uitgaansleven en de Grote Markt.',
		image: '/images/city-breda.jpg',
	},
];