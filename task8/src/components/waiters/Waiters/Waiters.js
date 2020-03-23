import React, { useEffect } from 'react'
import WaitersList from '../WaitersList/WaitersList'
import WaitersForm from '../WaitersForm/WaitersForm'
import { getWaiters, delWaiter, searchWaiter } from '../../../store/actions/waiters'
import { connect } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'


function Waiters({ waiters, isLoading, getWaiters, delWaiter, onSearch, search }) {

	const { path } = useRouteMatch();

	useEffect(() => {
		getWaiters()
	}, []);

	return (
		<div className='container'>
			{isLoading ? "Loading..." :
				<Switch>
					<Route exact path={`${path}/`}>
						<WaitersList delWaiter={delWaiter} waiters={waiters} search={search} onSearch={onSearch} />
					</Route>
					<Route
						path={`${path}/:id`}
						render={route => {
							return <WaitersForm id={route.match.params.id} />;
						}}
					></Route>
				</Switch>
			}
		</div>
	)
}

function mapStateToProps({ waiters }) {

	const searchRegExp = new RegExp(waiters.search, 'gi');

	return {
		waiters: waiters.list.filter(item => item.name.match(searchRegExp)),
		isLoading: waiters.isLoading,
		search: waiters.search
	}
}

const mapDispatchToProps = {
	delWaiter: delWaiter,
	getWaiters: getWaiters,
	onSearch: searchWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiters)
