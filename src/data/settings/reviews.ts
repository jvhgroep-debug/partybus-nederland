export type Review = {
	name: string;
	place: string;
	rating: number;
	text: string;
};

export const homeReviews: Review[] = [
	{
		name: 'Lisa van den Berg',
		place: 'Amsterdam',
		rating: 5,
		text:
			'Binnen no-time meerdere offertes. De bus was spot-on voor ons vrijgezellenfeest — muziek, licht en een chauffeur die meedacht.',
	},
	{
		name: 'Mark Jansen',
		place: 'Utrecht',
		rating: 5,
		text:
			'Voor ons bedrijfsuitje alles geregeld via het platform. Helder vergeleken, geen verrassingen achteraf. Aanrader.',
	},
	{
		name: 'Sara & Tom',
		place: 'Rotterdam',
		rating: 5,
		text:
			'Onze bruiloftstransfer voelde als een VIP-ervaring. Prettig dat we rustig meerdere aanbieders konden afwegen.',
	},
];