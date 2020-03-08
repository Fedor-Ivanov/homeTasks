import React from 'react'
import StudentsList from './StudentsList'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import StudentsForm from './StudentsForm';



function Students() {

    const { path, url } = useRouteMatch();

    return (
        <div>
            <Link to={`${url}/new`}>Add</Link>
            <Switch>
                <Route exact path={`${path}/`}>
                    <StudentsList />
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <StudentsForm id={route.match.params.id} />;
                    }}
                ></Route>
            </Switch>
            
        </div>
    )
}

export default Students
