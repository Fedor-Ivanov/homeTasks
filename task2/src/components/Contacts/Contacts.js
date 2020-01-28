import React, { Component } from 'react'
import ContactsList from '../ContactsList/ContactsList'
import './Contacts.css'
import ContactsForm from '../ContactsForm/ContactsForm'

export default class Contacts extends Component {

	state = {
		contacts: [
			{
				"id": 1,
				"age": 33,
				"name": "Leanne",
				"surname": "Graham",
				"phone": "1-770-736-8031 x56442",
			},
			{
				"id": 2,
				"age": 33,
				"name": "Ervin",
				"surname": "Howell",
				"phone": "010-692-6593 x09125",
			},
			{
				"id": 3,
				"age": 33,
				"name": "Clementine",
				"surname": "Bauch",
				"phone": "1-463-123-4447",
			},
			{
				"id": 4,
				"age": 33,
				"name": "Patricia",
				"surname": "Lebsack",
				"phone": "493-170-9623 x156",
			},
			{
				"id": 5,
				"age": 33,
				"name": "Chelsey",
				"surname": "Dietrich",
				"phone": "(254)954-1289"
			},
			{
				"id": 6,
				"age": 33,
				"name": "Dennis",
				"surname": "Schulist",
				"phone": "1-477-935-8478 x6430",
			},
			{
				"id": 7,
				"age": 33,
				"name": "Kurtis",
				"surname": "Weissnat",
				"phone": "210.067.6132",
			},
			{
				"id": 8,
				"age": 33,
				"name": "Nicholas",
				"surname": "Runolfsdottir V",
				"phone": "586.493.6943 x140",
			},
			{
				"id": 9,
				"age": 33,
				"name": "Glenna",
				"surname": "Reichert",
				"phone": "(775)976-6794 x41206",
			},
			{
				"id": 10,
				"age": 33,
				"name": "Clementina",
				"surname": "DuBuque",
				"phone": "024-648-3804",
			}
		],
		newContact: {
			"name": '',
			"surname": ''
		}

	}

	deleteContact = (id) => {
		const newContacts = this.state.contacts.filter((item) => {
			return item.id !== id;
		})

		this.setState({
			contacts: newContacts
		})
	}

	onFormChange = changes => {
		this.setState({
			newContact: {
				...this.state.newContact,
				...changes
			}
		})
	}

	onFormSubmit = newContact => {

		const contactIds = this.state.contacts.map((elem) => {
			return elem.id;
		})

		if( newContact.name || newContact.surname ) {

			if( contactIds.includes(newContact.id) ) {

				const editedContact = this.state.contacts.map(item => {
					if (item.id == newContact.id) {
						item.id = newContact.id;
						item.name = newContact.name;
						item.surname = newContact.surname;
					}
					return item;
				})

				this.setState({
					contacts: editedContact,
					newContact: {
						name: '',
						surname: ''
					}
				})

			} else {

				this.setState({
					contacts: [
						...this.state.contacts,
						{
							id: Date.now(),
							...newContact
						}
					],
					newContact: {
						name: '',
						surname: ''
					}
				})

			}

		} else {
			alert('not valid');
		}
		
	}

	resetForm = () => {
		this.setState({
			newContact: {
				id: '',
				name: '',
				surname: ''
			}
		})
	}

	getContactItemData = (item) => {
		this.onFormChange(item);
	}

	render() {
		return (
			<div className="contacts__wrap">
				<div className="contacts__title">Contacts</div>
				<div className="contacts__grid">
					<ContactsList
						contactsList={this.state.contacts}
						onDelete={this.deleteContact}
						resetForm={this.resetForm}
						getContactItemData={this.getContactItemData}
					/>
					<ContactsForm
						contact={this.state.newContact}
						onFormChange={this.onFormChange}
						onFormSubmit={this.onFormSubmit}
					/>
				</div>
			</div>
		)
	}
}