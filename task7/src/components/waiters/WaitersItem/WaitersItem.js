import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'


function WaitersItem({ id, name, salary, startDate, delWaiter }) {

    const { url } = useRouteMatch();

    return (
        <li className='list-item'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{salary}</span>
            <span>{startDate}</span>
            <Link to={`${url}/${id}`}>edit</Link>
            <button onClick={() => delWaiter(id)}>delete</button>
        </li>
    )
}

export default WaitersItem
