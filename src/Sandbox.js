import React 		from 'react';
import ReactDOM 	from 'react-dom';
import { Provider } from 'react-redux';

// actions
import { loadGame } from './actions/GameStateActions';

// renderables
import HeaderContainer  from './components/HeaderContainer';
import GameContainer 	from './components/GameContainer';

// services
import Save 			 from './services/Save';
import Tick				 from './services/Tick';
import KeyboardShortcuts from './services/KeyboardShortcuts';

let _mediator;
const initSandboxMediator = sandbox => {
	_mediator = sandbox.$.Mediator();
}

const initServices = sandbox => {
	new Save(sandbox);
	new Tick(sandbox);
	new KeyboardShortcuts(sandbox);
}

const initSaveGame = (sandbox) => {
	var gameState = sandbox.load('gameState') || {};
	
	if (gameState.state) {
		sandbox.getStore().dispatch(loadGame(gameState));
	}
};

const initView = (sandbox) => {
	ReactDOM.render(
		<Provider store={sandbox.getStore()}>
			<GameContainer sandbox={sandbox} />
		</Provider>,
		sandbox.getDOMRenderTarget()
	);
};

class Sandbox {
	constructor (core) {
		this.$ = core;

		initSandboxMediator(this);
		initServices(this);
		initSaveGame(this);
		initView(this);
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

	subscribe (channel, fn = () => {}) {
		_mediator.subscribe(channel, fn);
	}

	publish (channel, payload = {}) {
		_mediator.publish(channel, payload);
	} 
}

export default Sandbox;