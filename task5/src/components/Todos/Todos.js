import React from 'react'
import Modal from '../Modal/Modal'

function Todos({todoList, modal, toggleModal}) {


    return (
        <div>
            <div>todoList - {todoList}</div>
        
            <button onClick={toggleModal}>show modal</button>

        <Modal modal={modal} toggleModal={toggleModal}/>
        </div>
    )
}

export default Todos
