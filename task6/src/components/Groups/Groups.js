import React from 'react';
import GroupsList from './GroupsList';
import GroupsForm from './GroupsForm';
import { Switch, Route, useRouteMatch } from 'react-router-dom';


function Groups() {

    const { path } = useRouteMatch();

    return (
        <Switch>
                <Route exact path={`${path}/`}>
                    <GroupsList />
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <GroupsForm id={route.match.params.id} />;
                    }}
                ></Route>
            </Switch>
    )
}

export default Groups
