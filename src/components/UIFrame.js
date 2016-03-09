require('../styles/UIFrame.css');

import React, { Component } from 'react';

export default ({ children, width }) => {
	const styles = {
		width
	};

	return (
		<div className='ui-frame' style={styles}>
			{ children }
		</div>
	);
}