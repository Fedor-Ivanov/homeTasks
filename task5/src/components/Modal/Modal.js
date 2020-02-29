import React from 'react'
import ModalForm from '../ModalForm/ModalForm';

function Modal({ modal, newTodo, toggleModal, createTodo, onValueChange, updateTodos }) {

    if(!modal) {
        return null;
    }

    return (
        <div style={backdropStyle}>
			<div style={modalStyle}>
				
				<ModalForm newTodo={newTodo} onValueChange={onValueChange} createTodo={createTodo} toggleModal={toggleModal} updateTodos={updateTodos}/>
			</div>
		</div>
    )
}

const backdropStyle = {
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: 50
};

const modalStyle = {
	backgroundColor: '#fff',
	borderRadius: 5,
	maxWidth: 500,
	minHeight: 185,
	margin: '0 auto',
	padding: 30,
	display: "flex",
};


export default Modal
