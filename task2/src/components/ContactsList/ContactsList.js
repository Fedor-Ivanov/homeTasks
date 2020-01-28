import React, { Component } from 'react'
import ContactsListItem from '../ContactsListItem/ContactsListItem'
import './ContactsList.css'

export default class ContactsList extends Component {
	render() {

		const {onDelete, resetForm, getContactItemData} = this.props;

		return (
			<div>
			<ul className="contactsList__list">
				{this.props.contactsList.map((item) => 
				<ContactsListItem key={item.id} item={item} onDelete={onDelete} getContactItemData={getContactItemData} />)}
			</ul>
			<button className="contactsList__button" onClick={resetForm}>new</button>
			</div>
		)
	}
}