import React from 'react'
import TablesItem from '../TablesItem/TablesItem'
import { useRouteMatch, Link } from 'react-router-dom'


<<<<<<< HEAD
=======

>>>>>>> fd1afbe28dde609def8f676f575c16615a260ec0
function TablesList({ delTable, tables, search, onSearch }) {

    const { url } = useRouteMatch();

    return (
        <>
            <div className='control'>
                <input className='search' type='text' placeholder='name search' name='search' value={search} onChange={({ target }) => onSearch(target.value)}></input>
                <Link className='add-button' to={`${url}/new`}>add</Link>
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

<<<<<<< HEAD

export default TablesList
=======
export default TablesList
>>>>>>> fd1afbe28dde609def8f676f575c16615a260ec0
