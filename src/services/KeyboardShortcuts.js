import keymaster from 'keymaster';

const shortcuts = [
	{
		key: 	 'ctrl+c',
		message: 'COPY'
	},
	{
		key: 	 'ctrl+v',
		message: 'PASTE'
	}
];

class KeyboardShortcuts {
	constructor (sandbox) {
		this._sandbox = sandbox;

		shortcuts.forEach(({ key, message }) => {
			keymaster(key, () => this.announce(message));
		});
	}

	announce (message = '') {
		this._sandbox.publish('KEYBOARD_SHORTCUT', { type: message });
	}
}

export default KeyboardShortcuts;