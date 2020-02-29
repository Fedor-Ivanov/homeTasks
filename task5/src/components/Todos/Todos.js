import React from 'react'
import Modal from '../Modal/Modal'
import TodosList from '../TodosList/TodosList'

function Todos({todoList, modal, newTodo, toggleModal, onValueChange, createTodo, updateTodos}) {

    console.log(todoList);

    return (
        <div>
        

            <button onClick={toggleModal}>show modal</button>

            <Modal
                newTodo={newTodo}
                modal={modal}
                onValueChange={onValueChange}
                createTodo={createTodo}
                toggleModal={toggleModal}
                updateTodos={updateTodos}/>
        
            <TodosList todoList={todoList} />

        </div>
    )
}

export default Todos
