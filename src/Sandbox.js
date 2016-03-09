import React 		from 'react';
import ReactDOM 	from 'react-dom';
import { Provider } from 'react-redux';

// actions
import { loadGame } from './actions/GameStateActions';

// renderables
import HeaderContainer  from './components/HeaderContainer';
import GameContainer 	from './components/GameContainer';

// services
import Save 			from './services/Save';
import Tick				from './services/Tick';

class Sandbox {
	constructor (core) {
		this.$ = core;
		
		loadSavedGame(this);
		render(this);

		// services
		new Save(this);
		new Tick(this);
	}

	getStore () {
		return this.$.getStore();
	}

	save (key, value) {
		this.$.save(key, value);
	}

	load (key) {
		return this.$.load(key);
	}

	formatNumber (n) {
		return this.$.formatNumber(n);
	}

	getDOMRenderTarget () {
		return this.$.getDOMRenderTarget();
	}
}

const loadSavedGame = (sandbox) => {
	var gameState = sandbox.load('gameState') || {};
	
	if (gameState.state) {
		sandbox.getStore().dispatch(loadGame(gameState));
	}
};

const render = (sandbox) => {
	ReactDOM.render(
		<Provider store={sandbox.getStore()}>
			<GameContainer sandbox={sandbox} />
		</Provider>,
		sandbox.getDOMRenderTarget()
	);
};

export default Sandbox;