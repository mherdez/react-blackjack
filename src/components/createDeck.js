const createDeck = () => {
	let deck = [];
	const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
	const suit = ['H', 'D', 'S', 'C'];
	const letters = ['A', 'K', 'Q', 'J'];

	for (const n of numbers) {
		for (const p of suit) {
			deck.push(n + p);
		}
	}

	letters.forEach((l) => {
		suit.forEach((p) => {
			deck.push(l + p);
		});
	});

	deck = deck.sort((a) => Math.random() - 0.5);
	return deck;
};

export default createDeck;
