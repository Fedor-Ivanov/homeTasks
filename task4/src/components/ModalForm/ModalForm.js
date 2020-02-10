import React from 'react'

function ModalForm({task, closeModal, onSave, onNewTaskChange, taskTitle}) {


	const onValueChange = (e) => {
		onNewTaskChange({
			[e.target.name]: e.target.value
		});
	}

	const onFormSubmit = (e) => {
		e.preventDefault();
		onSave(task);
		closeModal();
	}

	return (
		<form onSubmit={onFormSubmit} style={{marginTop: "20px"}}>
			<input type="text"
				name="title"
				value={task.title}
				onChange={onValueChange}
				placeholder="type some task...">
			</input>
		
			<button onClick={closeModal}>Cancel</button>
			<button type="submit">Save</button>
			
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
