import React, { Component } from 'react'
import './ContactsForm.css'

export default class ContactsForm extends Component {


	onInputChange = (e) => {
		this.props.onFormChange({
			[e.target.name]: e.target.value,
			[e.target.surname]: e.target.value
		})
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.props.contact)
	}

	render() {
		return (
			<form className="contactsForm" onSubmit={this.onFormSubmit}>
				<input onChange={this.onInputChange} value={this.props.contact.name} type="text" name="name"></input>
				<input onChange={this.onInputChange} value={this.props.contact.surname} type="text" name="surname"></input>
				<button>save</button>
			</form>
		)
	}
}
