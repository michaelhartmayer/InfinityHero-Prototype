require('../styles/NewGameContainer.css');

import React, { Component } from 'react';
import { connect } 			from 'react-redux';

// actions
import {
	startNewGame,
	saveGame
} from '../actions/GameStateActions';

// components
import SimpleInput from './SimpleInput';

// container
const NewGameContainer = connect(
	null,
	dispatch => {
		return {
			handleEnter: (name) => {
				if (name) {
					dispatch(startNewGame(name));
				}
			}
		}
	}
)(({ handleEnter }) => {
	return (
		<div className="ui-new-game">
			<h2>New Game</h2>
			<p>Start a new game.</p>

			<SimpleInput placeholder='Choose Your Name' onEnter={handleEnter} />
		</div>
	);
});

export default NewGameContainer;