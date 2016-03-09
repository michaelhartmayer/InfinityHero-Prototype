import { addBank } from '../actions/GameStateActions';

const TICK 	  	  = 10;
const BASE_INCOME = 1;

class Tick {
	constructor (sandbox) {
		this.$ 		   = sandbox;
		this._store    = sandbox.getStore();

		this._interval = setInterval(() => this.tick(), TICK);
	}

	calculateIncome () {
		let income 			= BASE_INCOME;
		const { gameState } = this._store.getState();
		const { mods }  	= gameState;
		const l         	= mods.length;

		for (let i = 0; i < l; i++)
			income += mods[i].income;

		return income;
	}

	tick () {
		const { gameState } = this._store.getState();
		if (gameState.state === false) this.stop();

		this._store.dispatch(addBank(this.calculateIncome()));
	}

	stop () {
		clearInterval(this._interval);
	}
}

export default Tick;