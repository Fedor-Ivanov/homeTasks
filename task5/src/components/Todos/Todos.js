import React from 'react'
import Modal from '../Modal/Modal'

function Todos({todoList, modal, toggleModal}) {


    return (
        <div>
            todoList - {todoList}
        
            <button onClick={toggleModal}>show modal</button>
            <button onClick={() => console.log(modal)}>modal value</button>

        <Modal />
        </div>
    )
}

export default Todos
