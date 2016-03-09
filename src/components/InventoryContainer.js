require('../styles/InventoryContainer.css');

import React, { Component }	from 'react';
import { connect } 			from 'react-redux';
import classNames           from 'classnames';

class InventorySlot extends Component {
	constructor () {
		super();

		this.state = {
			hovering: false
		};
	}

	render () {
		const { hovering } = this.state;
		const className    = classNames('ui-inventory-slot', {
			'ui-inventory-slot-hover': hovering
		});

		return (
			<div className   = {className}
				onMouseEnter = {()=>{ this.setState({ hovering: true }) }}
				onMouseOut 	 = {()=>{ this.setState({ hovering: false }) }}
			/>
		);
	}
}

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