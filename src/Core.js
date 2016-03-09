import Sandbox from './Sandbox';

import { createStore, combineReducers, compose } from 'redux';

// reducers
import gameState from './reducers/GameState';

const initStore = () => {
	// reducers
	const reducers = combineReducers({
		gameState
	});

	return createStore(
		reducers,
		window.devToolsExtension ? window.devToolsExtension() : undefined
	);
};

export default class Core {
	constructor (framework, opt) {
		this._opt 		= opt;
		this.$ 			= framework;
		this._store     = initStore();

		return new Sandbox(this, opt);
	}

	getDOMRenderTarget () {
		const { config }       = this._opt || {};
		const { renderTarget } = config    || 'body';

		return this.$.DOM().$(renderTarget);
	}

	getStore () {
		return this._store;
	}

	save (key, value) {
		this.$.Cookie().set(key, JSON.stringify(value));
	}

	load (key) {
		return JSON.parse(this.$.Cookie().get(key));
	}

	delete (key) {
		this.$.Cookie.set(key, null);
	}

	formatNumber (n) {
		return this.$.Numbers().format(n);
	}
}