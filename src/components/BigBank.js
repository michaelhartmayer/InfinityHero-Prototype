require('../styles/BigBank.css');

import React, { Component } from 'react'; 

const BigBank = ({ amount, children }) => {
	return (
		<div className='ui-big-bank'>
			<div className='ui-big-bank-display'>{amount}</div>
			<div className='ui-big-bank-label'>{children}</div>
		</div>
	);
}

export default BigBank;