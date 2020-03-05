import React from 'react'
import StudentsList from './StudentsList'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import StudentsForm from './StudentsForm';


function Students() {

    const { path } = useRouteMatch();

    return (
        <div>
            
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
