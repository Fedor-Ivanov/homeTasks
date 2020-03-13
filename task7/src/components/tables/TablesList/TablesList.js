import React from 'react'
import TablesItem from '../TablesItem/TablesItem'
import { useRouteMatch, Link } from 'react-router-dom'



function TablesList({ delTable, tables, search, onSearch }) {

    const { url } = useRouteMatch();

    return (
        <>
            <div className='control'>
                <input type='text' placeholder='name search' name='search' value={search} onChange={({ target }) => onSearch(target.value)}></input>
                <Link to={`${url}/new`}>add</Link>
            </div>
            <ul className='list'>
                {tables.map(item => (
                    <TablesItem key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        sitsCount={item.sitsCount}
                        delTable={delTable}
                    >
                    </TablesItem>
                ))}
            </ul>
        </>
    )
}

export default TablesList
