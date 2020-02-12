import React from 'react'

function Task({ task, onDelete, onToggleTask, onEdit }) {

	const toggleDone = (e) => {
		onToggleTask(task)
	}

	const onEditClick = (e) => {
		e.stopPropagation();
		onEdit(task.id);
	}

	const onDeleteClick = (e) => {
		e.stopPropagation();
		onDelete(task.id);
	}

	

	return (
		<li style={(task.isDone) ? doneTaskStyle : taskStyle} onClick={toggleDone}>
			<span>{task.title}</span>
			<button style={buttonStyle} onClick={onEditClick}>edit</button>
			<button style={buttonStyle} onClick={onDeleteClick}>delete</button>
		</li>
	)
}

const taskStyle = {
	padding: "20px",
	border: "2px solid #666",
	borderRadius: "5px",
	marginBottom: "10px",
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: "#fff",
	transition: "0.3s",
}

const doneTaskStyle = {
	padding: "20px",
	border: "2px solid #666",
	borderRadius: "5px",
	marginBottom: "10px",
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: 'green',
	transition: "0.3s",
}

const buttonStyle = {
	// zIndex: "999"
}

export default Task
