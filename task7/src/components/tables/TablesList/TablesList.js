import React from 'react'
import './TablesList.css'
import TablesItem from '../TablesItem/TablesItem'
import { useRouteMatch, Link } from 'react-router-dom'



function TablesList({ deleteTable, tables }) {

    const { url } = useRouteMatch();

    return (
        <>
            <button>
                <Link to={`${url}/new`}>add</Link>
            </button>
            <ul>
                {tables.map(item => (
                    <TablesItem key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        sitsCount={item.sitsCount}
                        deleteTable={deleteTable}
                    >
                    </TablesItem>
                ))}
            </ul>
        </>
    )
}

export default TablesList
