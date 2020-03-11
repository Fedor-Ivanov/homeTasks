import React from 'react'
import './Tables.css'
import TablesList from '../TablesList/TablesList'
import TablesForm from '../TablesForm/TablesForm'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

function Tables() {

	const { path } = useRouteMatch();

	return (
		<div>

			<Switch>
				<Route exact path={`${path}/`}>
					<TablesList />
				</Route>
				<Route
					path={`${path}/:id`}
					render={route => {
						return <TablesForm id={route.match.params.id} />;
					}}
				></Route>
			</Switch>

		</div>
	)
}


export default Tables
