import React, { Component } from 'react'

export default class TableHeader extends Component {
	render() {

		let headers;

		this.props.contactsList.forEach(function(item) {

			headers = Object.keys(item);
			for (let i = 0; i < headers.length; i++) {
				if(headers[i] === 'id') {
					headers.splice(i, 1);
				}
			}

		});

		headers.splice(2, 0, headers.splice(0, 1)[0]);
	
		return (

			<div className="table__header neomorphism">
				{headers.map(headerItem => <div className="table__header-item">{headerItem}</div>)}
			</div>

		)
	}
}
