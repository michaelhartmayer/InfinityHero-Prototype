import React, { Component } from 'react';
import { connect} 			from 'react-redux';

// containers
import StatsContainer 	  from './StatsContainer';
import InventoryContainer from './InventoryContainer';

// components
import BigBank from './BigBank';

const GamePlayContainer = connect(
	({ gameState }, { sandbox }) => {
		return {
			gameState
		};
	},
	null
)(({
	gameState,
	sandbox
}) => {
	return (
		<div className='ui-game-play'>
			<BigBank amount={sandbox.formatNumber(gameState.bank)}>
				&mdash; <span className='big'>BIG BANK</span> &mdash;
			</BigBank>

			<StatsContainer sandbox={sandbox} />

			<InventoryContainer sandbox={sandbox}>
				&mdash; <span className='big'>INVENTORY</span> &mdash;
			</InventoryContainer>
		</div>
	);
});

export default GamePlayContainer;