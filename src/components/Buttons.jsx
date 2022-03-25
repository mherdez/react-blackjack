import { useState } from 'react';
import Button from './Button';
import { newGame, getCards, stopPlaying } from './functions.js';

const Buttons = () => {
	const stateBtns = [useState(true), useState(false), useState(false)];

	const buttons = [
		{
			texto: 'Nuevo juego',
			color: 'primary',
			funcion: () => {
				newGame(stateBtns);
			},
			state: stateBtns[0][0],
		},
		{
			texto: 'Pedir carta',
			color: 'primary',
			funcion: getCards,
			state: stateBtns[1][0],
		},
		{
			texto: 'Detenerse',
			color: 'danger',
			funcion: () => stopPlaying(stateBtns),
			state: stateBtns[2][0],
		},
	];

	return (
		<div className="my-3 mx-auto text-center">
			{buttons.map(({ texto, color, funcion, state }, index) => {
				return (
					<Button
						texto={texto}
						color={color}
						funcion={funcion}
						state={state}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Buttons;
