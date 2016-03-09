class Save {
	constructor (sandbox) {
		this.$ 		= sandbox;
		this._store = this.$.getStore();
		this._store.subscribe(() => this.save());
	}

	save () {
		const { gameState } = this._store.getState();
		this.$.save('gameState', gameState);
	}
}

export default Save;