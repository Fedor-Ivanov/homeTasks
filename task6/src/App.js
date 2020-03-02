import React from 'react';
import GroupsList from './components/GroupsList/GroupsList';
import StudentsList from './components/StudentsList/StudentsList';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


function App() {

	return (
		<Router>
			<div className='nagivation'>
				<Link style={{padding: '20px'}} to='/groups'>Groups</Link>
				<Link style={{padding: '20px'}} to='/students'>Students</Link>
			</div>
			<div className='content'>
				<Switch>
					<Route path="/groups">
						<GroupsList />
					</Route>
					<Route path="/students">
						<StudentsList />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}


export default App
