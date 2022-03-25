const CrearBaraja = () => {
	let baraja = [];
	const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
	const palo = ['H', 'D', 'S', 'C'];
	const letras = ['A', 'K', 'Q', 'J'];

	for (const n of numeros) {
		for (const p of palo) {
			baraja.push(n + p);
		}
	}

	letras.forEach((l) => {
		palo.forEach((p) => {
			baraja.push(l + p);
		});
	});

	baraja = baraja.sort((a) => Math.random() - 0.5);
	console.log(baraja);
	return baraja;
};

export default CrearBaraja;
