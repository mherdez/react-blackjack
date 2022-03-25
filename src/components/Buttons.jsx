import { useState } from 'react';
import Button from './Button';
import { nuevoJuego, pedirCarta, detenerse } from './funciones.js';

const Buttons = () => {
	const stateBtns = [];
	stateBtns.push(useState(true));
	stateBtns.push(useState(false));
	stateBtns.push(useState(false));

	const botones = [
		{
			texto: 'Nuevo juego',
			color: 'primary',
			funcion: () => {
				nuevoJuego(stateBtns);
			},
			// state: stateBtn1[0],
			// setState: stateBtn1[1],
		},
		{
			texto: 'Pedir carta',
			color: 'primary',
			funcion: pedirCarta,
			// state: stateBtn2[0],
			// setState: stateBtn2[1],
		},
		{
			texto: 'Nuevo juego',
			color: 'danger',
			funcion: detenerse,
			// state: stateBtn3[0],
			// setState: stateBtn3[1],
		},
	];

	return (
		<div className="my-3 mx-auto text-center">
			{botones.map(({ texto, color, funcion, state, setState }, index) => {
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
