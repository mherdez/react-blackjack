import createDeck from './createDeck';

// DECLARATION OF VARIABLES
let deck = [];
let setBtn1 = () => {};
let setBtn2 = () => {};
let setBtn3 = () => {};
let playerScore = 0;
let dealerScore = 0;

// NEW GAME BUTTON
const newGame = ([[, setB1], [, setB2], [, setB3]]) => {
	deck = [];
	console.clear();
	setBtn1 = setB1;
	setBtn2 = setB2;
	setBtn3 = setB3;

	setBtns(0, 1, 1);

	playerScore = 0;
	dealerScore = 0;

	showCards(`#playerCards`);
	showScore(`#playerScore`, playerScore);

	showCards(`#dealerCards`);
	showScore(`#dealerScore`, playerScore);

	deck = createDeck();
	console.log(deck);
	return deck;
};

// GET CARDS BUTTON
const getCards = () => {
	const card = deck.shift();

	playerScore += valueCard(card);

	showCards(`#playerCards`, card);
	showScore(`#playerScore`, playerScore);

	if (playerScore > 21) {
		setBtns(0, 0, 0);
		turnDealer();
	}
};

// STOP PLAYING BUTTON
const stopPlaying = () => {
	setBtns(0, 0, 0);
	turnDealer();
};

// DEALER'S TURN TO PLAY
const turnDealer = () => {
	const card = deck.shift();

	if (playerScore > 21) {
		dealerScore += valueCard(card);
		showCards(`#dealerCards`, card);
		showScore(`#dealerScore`, playerScore);
		showWinner('dealer');
		setTimeout(() => {
			setBtns(1, 0, 0);
		}, 3000);
		return;
	}

	// SHOW WINNER
	const showWinner = (winner) => {
		winner === 'player' ? 'El Jugador ganó' : 'El Curpier ganó';
		return true;
	};
};

// ++++++++++ VARIOUS FUNCTIONS ++++++++++ //

// VALUE CARD
const valueCard = (card) =>
	card.slice(0, -1) === 'A'
		? 11
		: ['J', 'Q', 'K'].includes(card.slice(0, -1))
		? 10
		: card.slice(0, -1) * 1;

// SET BUTTONS STATE
const setBtns = (btn1, btn2, btn3) => {
	setBtn1(btn1);
	setBtn2(btn2);
	setBtn3(btn3);
};

// SHOW CARDS IN BOX
const showCards = (id, card = '') => {
	if (card === '') {
		document.querySelector(id).innerHTML = '';
		return;
	}
	const src = `./assets/cartas/`;
	const cartaNueva = document.createElement('img');
	cartaNueva.setAttribute('src', `${src}${card}.png`);
	cartaNueva.setAttribute('alt', `${card}`);
	document.querySelector(id).appendChild(cartaNueva);
};

// SHOW SCORE
const showScore = (id, points) => {
	document.querySelector(id).textContent = points;
};

export { newGame, getCards, stopPlaying };
