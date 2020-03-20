import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'


function TablesItem({ id, name, description, sitsCount, delTable }) {

    const { url } = useRouteMatch();

    return (
        <li className='list-item'>
            <span>{id}</span>
            <span>{name}</span>
            <span>{description}</span>
            <span>{sitsCount}</span>
            <Link to={`${url}/${id}`}>edit</Link>
            <button onClick={() => delTable(id)}>delete</button>
        </li>
    )
}

export default TablesItem
