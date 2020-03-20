import React from 'react'
import WaitersItem from '../WaitersItem/WaitersItem'
import { useRouteMatch, Link } from 'react-router-dom'



function WaitersList({ delWaiter, waiters, search, onSearch }) {

    const { url } = useRouteMatch();

    return (
        <>
            <div className='control'>
                <input className='search' type='text' placeholder='name search' name='search' value={search} onChange={({ target }) => onSearch(target.value)}></input>
                <Link className='add-button' to={`${url}/new`}>add</Link>
            </div>
            <ul className='list'>
                {waiters.map(item => (
                    <WaitersItem key={item.id}
                        id={item.id}
                        name={item.name}
                        salary={item.salary}
                        startDate={item.startDate}
                        delWaiter={delWaiter}
                    >
                    </WaitersItem>
                ))}
            </ul>
        </>
    )
}

export default WaitersList
