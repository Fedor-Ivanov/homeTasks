import React from 'react'
import StudentsList from './StudentsList'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import StudentsForm from './StudentsForm';



function Students() {

    const { path, url } = useRouteMatch();

    return (
        <div>
            <div className='add-button_wrap'>
                <Link className='add-button' to={`${url}/new`}>add</Link>
            </div>
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
