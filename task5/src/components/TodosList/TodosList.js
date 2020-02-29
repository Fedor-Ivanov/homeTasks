import React from 'react'
import Todo from '../Todo/Todo'

function TodosList({ todoList }) {

    console.log(todoList);

    return (
        <ul>
            {todoList.map(todo => (
                <Todo 
                    todo={todo}
                    key={todo.id}
                />
            ))}
        </ul>
    )
}

export default TodosList
