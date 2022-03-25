import React from 'react';

const BettingBox = ({ place }) => {
	return (
		<div className="betting-box">
			<h2 className="text-white fs-2 text-capitalize mb-3">
				{place} -<small id={`${place + 'Score'}`}>0</small>
			</h2>
			<div id={`${place + 'Cards'}`} className="betting-box-cards">
				{/* <img src="./assets/cartas/10C.png" alt="" /> */}
			</div>
		</div>
	);
};

export default BettingBox;
