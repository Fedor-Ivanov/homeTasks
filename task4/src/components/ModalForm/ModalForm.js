import React from 'react'

function ModalForm({task, closeModal, onSave, onNewTaskChange}) {


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

	const onModalClose = () => {
		task.title = '';
		// task.id = '';
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
		
			<button onClick={onModalClose}>Cancel</button>
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
