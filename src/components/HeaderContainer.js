require('../styles/HeaderContainer.css');

import React, { Component } from 'react';
import { connect} 			from 'react-redux';

const HeaderContainer = connect(
	({ gameState }) => {
		return {
			gameState
		};
	},
	null
)(({ gameState, children }) => {
	const { name } = gameState;
	return (
		<div className='ui-header'>
			<h1>InfinityHero</h1>
			
			{ name ? 
				<p>
					<strong>Hero:</strong> {gameState.name}!
				</p> 
			: '-' }
			
			<div className='ui-header-right'>{ children }</div>
		</div>
	);
});

export default HeaderContainer;