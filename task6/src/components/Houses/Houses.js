import React from 'react';
import HousesList from './HousesList';
import HousesForm from './HousesForm';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';


function Houses() {

    const { path, url } = useRouteMatch();

    return (
        <>
        <Link to={`${url}/new`}>Add</Link>
        <Switch>
            <Route exact path={`${path}/`}>
                <HousesList />
            </Route>
            <Route
                path={`${path}/:id`}
                render={route => {
                    return <HousesForm id={route.match.params.id} />;
                }}
            ></Route>
        </Switch>
        </>
    )
}

export default Houses
