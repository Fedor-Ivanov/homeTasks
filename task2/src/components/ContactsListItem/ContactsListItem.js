import React, { Component } from 'react'
import './ContactsListItem.css'


export default class ContactsListItem extends Component {

	onDeleteButtonClick = (e) => {
		e.stopPropagation();
		this.props.onDelete(this.props.item.id)
	}

	render() {

		const {item} = this.props;

		return (
			<li className="contactsListItem">
				<span>{item.name}</span>
				<span>{item.surname}</span>
				<button onClick={this.onDeleteButtonClick}>delete</button>
			</li>
		)
	}
}
