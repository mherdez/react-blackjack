import createDeck from './createDeck';

// DECLARATION OF VARIABLES
let deck = [];
let setBtn1 = () => {};
let setBtn2 = () => {};
let setBtn3 = () => {};
let playerScore = 0;
let dealerScore = 0;

// NEW GAME FUNCTION
const newGame = ([[, setB1], [, setB2], [, setB3]]) => {
	deck = [];
	console.clear();
	setBtn1 = setB1;
	setBtn2 = setB2;
	setBtn3 = setB3;

	setBtns(0, 1, 1);

	deck = createDeck();
	console.log(deck);
	return deck;
};

// GET CARDS FUNCTION
const getCards = () => {
	const card = deck.shift();
	const value = valueCard(card);

	const src = './assets/cartas/';
	console.log(`<img src="${src}${card}.png" alt="${card}" />`);
	document.querySelector(
		'#playerCards'
	).innerHTML += `<img src="${src}${card}.png" alt="${card}" />`;
};

// STOP PLAYING FUNCTION
const stopPlaying = () => {
	setBtns(1, 0, 0);
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

export { newGame, getCards, stopPlaying };
