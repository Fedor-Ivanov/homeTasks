import React from 'react'
import './TablesItem.css'
import { useRouteMatch, Link } from 'react-router-dom'

function TablesItem({ id, name, description, sitsCount, deleteTable }) {

    const { url } = useRouteMatch();

    return (
        <li className='list-item'>
            <div className='list-item_info'>
                <span>{id}</span>
                <span>{name}</span>
                <span>{description}</span>
                <span>{sitsCount}</span>
            </div>
            <div className='list-item_buttons'>
                <button><Link to={`${url}/${id}`}>edit</Link></button>
                <button onClick={() => deleteTable(id)}>delete</button>
            </div>
        </li>
    )
}

export default TablesItem
