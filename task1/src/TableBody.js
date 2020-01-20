/* eslint-disable */
import React, { Component } from 'react'

export default class TableBody extends Component {
	render() {
		return (
			<div>
				{this.props.contactsList.map(({age, name, surname, phone}) => 
				<div><div>{name}</div><div>{surname}</div><div>{age}</div><div>{phone}</div></div>)}
			</div>
		);
	}
}