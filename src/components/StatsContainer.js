require('../styles/StatsContainer.css');

import React, { Component } from 'react';
import { connect} 			from 'react-redux';

const StatBox = ({ name, value, children }) => {
	return (
		<div className='ui-stat-box'>
			<span className='ui-stat-name'>{ name }</span>
			<span className='ui-stat-value'>{ value }</span>
			{children}
		</div>
	)
};

const Stats = connect(
	({ gameState }) => {
		return {
			stats: gameState.stats
		}
	},
	null
)(({ children, stats }) => {
	const { int, str, dex, vit, agi, luk } = stats;
	return (
		<div className='ui-stats'>
			<StatBox name='Int' value={int} />
			<StatBox name='Str' value={str} />
			<StatBox name='Dex' value={dex} />
			<StatBox name='Vit' value={vit} />
			<StatBox name='Agi' value={agi} />
			<StatBox name='Luk' value={luk} />
		</div>
	);
});

export default Stats;