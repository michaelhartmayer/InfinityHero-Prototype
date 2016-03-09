import React from 'react';

const SimpleInput = ({
	onEnter	    = () => {},
	asPassword  = false, 
	placeholder = ''
}) => {
	const handleKeyDown = ({ keyCode, target }) => {
		if (keyCode !== 13) return;
		
		onEnter(target.value);
		target.value = '';
	};

	return <input
		onKeyDown 	= { handleKeyDown } 
		placeholder = { placeholder }
		type        = { asPassword ? 'password' : 'text' }
	/>;
};

export default SimpleInput;