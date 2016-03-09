import {
	ADD_BANK,
	SET_BANK
} from '../../actions/ActionNames.js';

export default (state = 0, action) => {
	const { type, amount } = action;

	switch (type) {
		case ADD_BANK:
			return state + amount;

		case SET_BANK:
			return amount;
	}
}