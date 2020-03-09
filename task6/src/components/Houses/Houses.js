import React from 'react';
import HousesList from './HousesList';
import HousesForm from './HousesForm';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';


function Houses() {

    const { path, url } = useRouteMatch();

    return (
        <div>
            <div className='add-button_wrap'>
                <Link className='add-button' to={`${url}/new`}>add</Link>
            </div>
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
        </div>
    )
}

export default Houses
