import React, { Component } from 'react';
import { connect} 			from 'react-redux';

// containers
import StatsContainer 	  from './StatsContainer';
import InventoryContainer from './InventoryContainer';
import UIFrame			  from './UIFrame';

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
		<div className='ui-game-play' style={{ width: '100%', overflow: 'auto' }}>
			<UIFrame width='200px'>
				<BigBank amount={sandbox.formatNumber(gameState.bank)}>
					&mdash; <span className='big'>BIG BANK</span> &mdash;
				</BigBank>
				<StatsContainer sandbox={sandbox} />
			</UIFrame>

			<UIFrame width='200px'>
				<InventoryContainer sandbox={sandbox}>
					&mdash; <span className='big'>INVENTORY</span> &mdash;
				</InventoryContainer>
			</UIFrame>
		</div>
	);
});

export default GamePlayContainer;