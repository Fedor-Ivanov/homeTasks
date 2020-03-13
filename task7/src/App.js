import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Tables from './components/tables/Tables/Tables'
import Waiters from './components/Waiters/Waiters'

function App() {

	return (
		<>
			<Router>
				<div className='nagivation'>
					<Link style={{ padding: '20px' }} to='/'>Home</Link>
					<Link style={{ padding: '20px' }} to='/tables'>Tables</Link>
					<Link style={{ padding: '20px' }} to='/waiters'>Waiters</Link>
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
							<h1 className='center'>welcome to your Restaurant</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}

export default App