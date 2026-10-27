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
		blurb: 'Bespreek een bereikbaar vertrekadres bij hotel, station of kantoor.',
		image: '/images/hero-partybus.webp',
	},
	{
		name: 'Rotterdam',
		slug: 'rotterdam',
		blurb: 'Plan ophalen, een concert bij Ahoy en de terugrit met Tourgo.',
		image: '/images/partybus-verhuur.png',
	},
	{
		name: 'Utrecht',
		slug: 'utrecht',
		blurb: 'Van Jaarbeurs of Leidsche Rijn naar jullie uitje en weer terug.',
		image: '/images/partybus-nederland.png',
	},
	{
		name: 'Den Haag',
		slug: 'den-haag',
		blurb: 'Leg vertrek uit Den Haag of Scheveningen en het eindadres vast.',
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
		blurb: 'Vraag Prestige om een ritvoorstel vanuit Breda, Bavel of Prinsenbeek.',
		image: '/images/city-breda.jpg',
	},
];
