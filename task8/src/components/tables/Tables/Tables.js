import React, { useEffect } from 'react'
import TablesList from '../TablesList/TablesList'
import TablesForm from '../TablesForm/TablesForm'
import { getTables, delTable, searchTable } from '../../../store/actions/tables'
import { connect } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'


function Tables({ tables, isLoading, getTables, delTable, onSearch, search }) {

	const { path } = useRouteMatch();

	useEffect(() => {
		getTables()
	}, []);

	return (
		<div className='container'>
			{isLoading ? "Loading..." :
				<Switch>
					<Route exact path={`${path}/`}>
						<TablesList delTable={delTable} tables={tables} search={search} onSearch={onSearch} />
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

	const searchRegExp = new RegExp(tables.search, 'gi');

	return {
		tables: tables.list.filter(item => item.name.match(searchRegExp)),
		isLoading: tables.isLoading,
		search: tables.search
	}
}

const mapDispatchToProps = {
	delTable: delTable,
	getTables: getTables,
	onSearch: searchTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables)
