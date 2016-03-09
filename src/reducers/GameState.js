// reducers
import bank from './GameState/Bank';

// action names
import {
	START_NEW_GAME,
	HARD_RESET,
	LOAD_GAME,
	ADD_BANK,
	SET_BANK
} from '../actions/ActionNames.js';

// default state
const defaultState = {
	state: false,
	name:  null,
	bank:  0,
	mods:  [],
	stats: {
		int: 1,
		str: 1,
		vit: 1,
		dex: 1,
		agi: 1,
		luk: 1
	},
	inventory: []
};

// reducer
export default (state = defaultState, action) => {
	const { type, ...payload } = action;

	switch (type) {
		case HARD_RESET:
			return Object.assign({}, defaultState);

		case LOAD_GAME:
			return Object.assign({}, defaultState, payload, { state: true });

		case START_NEW_GAME:
			return Object.assign({}, defaultState, payload, { state: true });

		case ADD_BANK:
		case SET_BANK:
			return Object.assign({}, state, {
				bank: bank(state.bank, action)
			});

		default:
			return state;
	}
};