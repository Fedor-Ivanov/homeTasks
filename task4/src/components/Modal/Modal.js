import React from 'react'
import ModalForm from '../ModalForm/ModalForm';


function Modal({ task, onClose, show, onSave, onNewTaskChange }) {

	if(!show) {
		return null;
	}

	return (
		<div style={backdropStyle}>
			<div style={modalStyle}>
				
				<ModalForm
					task={task}
					closeModal={onClose}
					onSave={onSave}
					onNewTaskChange={onNewTaskChange}
				/>
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
	minHeight: 300,
	margin: '0 auto',
	padding: 30
};



export default Modal
