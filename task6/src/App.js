import React from 'react';
import './App.css'
import './normalize.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Houses from './components/Houses/Houses';
import Students from './components/Students/Students';


function App() {

	return (
		<Router>
			<div className='nagivation'>
				<Link style={{padding: '20px'}} to='/'>Home</Link>
				<Link style={{padding: '20px'}} to='/houses'>Houses</Link>
				<Link style={{padding: '20px'}} to='/students'>Students</Link>
			</div>
			<div className='content'>
				<Switch>
					<Route path="/houses">
						<Houses />
					</Route>
					<Route path="/students">
						<Students />
					</Route>
					<Route path="/">
						<h1 className='center'>welcome to Hogwarts</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}


export default App
