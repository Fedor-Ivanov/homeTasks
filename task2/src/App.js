import React, { Component } from 'react'
import Contacts from './components/Contacts/Contacts'
import './App.css'


export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Contacts />
			</div>
		)
	}
}

