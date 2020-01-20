/* eslint-disable */
import React, { Component } from 'react'

export default class TableBody extends Component {
	render() {



		return (
			<div>
				{this.props.contactsList.forEach(contact => 
				<div>{contact.name}</div>)}
			</div>
		);
	}
}