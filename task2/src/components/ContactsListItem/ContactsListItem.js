import React, { Component } from 'react'
import './ContactsListItem.css'


export default class ContactsListItem extends Component {

	render() {

		const {item} = this.props;

		return (
			<li className="contactsListItem">
				<span>{item.name}</span>
				<span>{item.surname}</span>
				<span>{item.age}</span>
				<span>{item.phone}</span>
				<button>delete</button>
			</li>
		)
	}
}
