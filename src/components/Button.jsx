const Button = ({
	texto = 'button',
	color = 'primary',
	funcion = () => {
		console.log(texto);
	},
	state = true,
}) => {
	return (
		<button
			className={`btn btn-${color} mx-1`}
			onClick={funcion}
			disabled={!state}
		>
			{texto}
		</button>
	);
};

export default Button;
