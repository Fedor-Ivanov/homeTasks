import React from 'react'
import './App.css'
import './normalize.css'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import Tables from './components/tables/Tables/Tables'
import Waiters from './components/waiters/Waiters/Waiters'

function App() {

	return (
		<>
			<Router>
				<div className='nagivation'>
					<NavLink activeClassName='active-link' className='nav-link' exact to='/'>Home</NavLink>
					<NavLink activeClassName='active-link' className='nav-link' to='/tables'>Tables</NavLink>
					<NavLink activeClassName='active-link' className='nav-link' to='/waiters'>Waiters</NavLink>
				</div>
				<div className='content'>
					<Switch>
						<Route path="/tables">
							<Tables />
						</Route>
						<Route path="/waiters">
							<Waiters />
						</Route>
						<Route path="/">
							<h1 className='title'>welcome to your Restaurant Manager</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}

export default App