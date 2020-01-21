import React, { Component } from 'react'

export default class TableBody extends Component {
	render() {
		return (
			<div className="table__body">
				{this.props.contactsList.map(({id, age, name, surname, phone}) => 
				<div className="table__body-row">
					<div className="flex-center neomorphism">{id}</div>
					<div className="table__body-item neomorphism">
						<div>{name}</div>
						<div>{surname}</div>
						<div>{age}</div>
						<div>{phone}</div>
					</div>
				</div>)}
			</div>
		);
	}
}