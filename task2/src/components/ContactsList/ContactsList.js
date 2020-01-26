import React, { Component } from 'react'
import ContactsListItem from '../ContactsListItem/ContactsListItem'

export default class ContactsList extends Component {
	render() {
		return (
			<div>
			<ul className="contactsList__list">
				{this.props.contactsList.map((item) => 
				<ContactsListItem key={item.id} item={item} />)}
			</ul>
			<button>new</button>
			</div>
		)
	}
}
