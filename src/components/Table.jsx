import React from 'react';
import BettingBox from './BettingBox';

const Table = () => {
	return (
		<div className="table my-5 mx-auto w-75">
			<BettingBox place="player" />
			<BettingBox place="dealer" />
		</div>
	);
};

export default Table;
