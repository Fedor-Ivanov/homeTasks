import React, { Component } from 'react'
import './ContactsForm.css'

export default class ContactsForm extends Component {
	render() {
		return (
			<form className="contactsForm">
				<input placeholder="name"></input>
				<input placeholder="surname"></input>
				<input placeholder="age"></input>
				<input placeholder="phone"></input>
				<button>save</button>
			</form>
		)
	}
}
