require('../styles/GameContainer.css');

import React, { Component } from 'react';
import { connect} 			from 'react-redux';

// components
import NewGameContainer  	from './NewGameContainer';
import HeaderContainer   	from './HeaderContainer';
import GamePlayContainer 	from './GamePlayContainer';
import ResetButtonContainer from './ResetButtonContainer';

// container
const GameContainer = connect(
	({ gameState }, { sandbox }) => {
		return {
			gameState,
			sandbox
		};
	},
	null
)(({ gameState, sandbox }) => {
	const { state } = gameState;
	let view;

	if (state !== true) {
		view = <NewGameContainer />
	}

	else {
		view = <GamePlayContainer sandbox={sandbox} />
	}

	return (
		<div className="ui-game">
			<HeaderContainer>
				<ResetButtonContainer />
			</HeaderContainer>
			{view}
		</div>
	);
});

export default GameContainer;