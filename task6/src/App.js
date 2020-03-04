import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Groups from './components/Groups/Groups';
import Students from './components/Students/Students';


function App() {

	return (
		<Router>
			<div className='nagivation'>
				<Link style={{padding: '20px'}} to='/'>Home</Link>
				<Link style={{padding: '20px'}} to='/groups'>Groups</Link>
				<Link style={{padding: '20px'}} to='/students'>Students</Link>
			</div>
			<div className='content'>
				<Switch>
					<Route path="/groups">
						<Groups />
					</Route>
					<Route path="/students">
						<Students />
					</Route>
					<Route path="/">
						<p>welcome to Hogwarts</p>
					</Route>
				</Switch>
			</div>
		</Router>
	)
}


export default App
