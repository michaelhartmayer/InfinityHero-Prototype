import {
	START_NEW_GAME,
	SAVE_GAME,
	LOAD_GAME,
	HARD_RESET,
	ADD_BANK,
	SET_BANK
} from './ActionNames.js';

export const hardReset = () => {
	return {
		type: HARD_RESET
	}
}

export const startNewGame = (name = 'Dumbass') => {
	return {
		type: START_NEW_GAME,
		name
	};
}

export const saveGame = () => {
	return {
		type: SAVE_GAME
	};
}

export const loadGame = (loadGame) => {
	return Object.assign({}, loadGame, {
		type: LOAD_GAME
	});
}

export const addBank = (amount = 0) => {
	return {
		type: ADD_BANK,
		amount
	};
}

export const removeBank = (amount = 0) => {
	return {
		type: ADD_BANK,
		amount: -amount
	}
}

export const setBank = (amount = 0) => {
	return {
		type: SET_BANK,
		amount
	}
}