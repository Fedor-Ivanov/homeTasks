import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Tables from './components/tables/Tables/Tables'
import Waiters from './components/Waiters/Waiters'
import TablesForm from './components/tables/TablesForm/TablesForm'

function App() {

	return (
		<>
			<div>
				<p>redux</p>
				<p>react-redux</p>
				<p>react-router-dom</p>
				<p>axios</p>
				<p>redux-thunk</p>
			</div>
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