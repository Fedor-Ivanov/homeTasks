import React, { useEffect } from 'react'
import './Tables.css'
import TablesList from '../TablesList/TablesList'
import TablesForm from '../TablesForm/TablesForm'
import { getTables, deleteTable, loadingTable } from '../../../store/actions/tables'
import apiTables from '../../../services/apiTables'
import { connect } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'


function Tables({ getTables, deleteTable, tables, isLoading, loadingTable }) {

	const { path } = useRouteMatch();

	useEffect(() => {
		loadingTable(true);
		apiTables.get('').then(resp => getTables(resp.data));
		loadingTable(false);
	}, []);

	return (
		<div>
			{isLoading ? "Loading..." :
				<Switch>
					<Route exact path={`${path}/`}>
						<TablesList deleteTable={deleteTable} tables={tables} />
					</Route>
					<Route
						path={`${path}/:id`}
						render={route => {
							return <TablesForm id={route.match.params.id} />;
						}}
					></Route>
				</Switch>
			}
		</div>
	)
}

function mapStateToProps({ tables }) {
	return {
		tables: tables.list,
		isLoading: tables.isLoading
	}
}

const mapDispatchToProps = {
	getTables: getTables,
	deleteTable: deleteTable,
	loadingTable: loadingTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
