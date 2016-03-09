require('../styles/InventoryContainer.css');

import React, { Component } from 'react';
import { connect} 			from 'react-redux';

const InventorySlot = () => {
	return (
		<div className='ui-inventory-slot'>
			
		</div>
	);
};

const InventoryContainer = connect(
	({ gameState }, { sandbox }) => {
		return {
			inventory: gameState.inventory
		};
	},
	null
)(({
	sandbox,
	inventory,
	children
}) => {
	return (
		<div className='ui-inventory'>
			<div className='ui-inventory-label'>{children}</div>
			<InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot />
			<InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot />
			<InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot />
			<InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot />
			<InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot /><InventorySlot />
		</div>
	);
});

export default InventoryContainer;