import React, { Component } from 'react';
import { connect} 			from 'react-redux';

import { hardReset }		from '../actions/GameStateActions';

export default connect(
	({ gameState }) => {
		return {
			active: gameState.state
		}
	},
	dispatch => {
		return {
			onClick: () => { dispatch(hardReset()); }
		}
	}
)(({ active, onClick }) => {
	if (active) return <button className='ui-hard-reset' onClick={onClick}>Debug: Hard Reset</button>;
	return <div>Ready!</div>
});