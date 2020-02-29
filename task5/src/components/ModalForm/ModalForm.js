import React from 'react'
import './ModalForm.css'


function ModalForm({ toggleModal, onValueChange, updateTodos, createTodo, newTodo }) {

    console.log(newTodo);

    const onNewTaskChange = (e) => {
		onValueChange({
			[e.target.name]: e.target.value
		});
	}
    
    const onFormSubmit = (e) => {
        e.PreventDefault();
        createTodo({
            id: Date.now(),
            text: newTodo.text,
        });
    }


	return (
        <form 
            onSubmit={onFormSubmit} 
            className="formStyle">
			<input type="text"
				name="title"
                value={newTodo.text}
                onChange={onNewTaskChange}
				placeholder="type some task..."
				className="formInput">
			</input>
		
			<div className="formButtonsWrap">
				<button className="formButton cancel" onClick={toggleModal}>Cancel</button>
				<button className="formButton save" type="submit">Save</button>
			</div>
			
		</form>
	)
}


const modalBodyStyle = {
	color: "red"
}

const modalFooterStyle = {
	backgroundColor: "yellow",
	display: "flex",
	justifyContent: "space-between"
}


export default ModalForm
