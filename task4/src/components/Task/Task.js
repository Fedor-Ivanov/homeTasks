import React from 'react'
import './Task.css'

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
		<li style={(task.isDone) ? doneTaskStyle : taskStyle}  onClick={toggleDone}>
			<span>{task.title}</span>
			<button style={buttonStyle} className="edit-button" onClick={onEditClick}>edit</button>
			<button style={buttonStyle} className="delete-button" onClick={onDeleteClick}>delete</button>
		</li>
	)
}

const taskStyle = {
	padding: "20px",
	border: "2px solid #666",
	borderRadius: "5px",
	marginBottom: "10px",
	alignItems: "center",
	display: "grid",
	gridTemplateColumns: "8fr 1fr 1fr",
	gridColumnGap: "20px",
	backgroundColor: "#fff",
	transition: "0.3s",
}

const doneTaskStyle = {
	padding: "20px",
	border: "2px solid #666",
	borderRadius: "5px",
	marginBottom: "10px",
	alignItems: "center",
	display: "grid",
	gridTemplateColumns: "8fr 1fr 1fr",
	gridColumnGap: "20px",
	backgroundColor: 'green',
	transition: "0.3s",
}

const buttonStyle = {
	borderRadius: "5px",
	width: "auto",
	padding: "10px 20px",
	border: "1px solid #666",
	transition: "0.3s",
	cursor: "pointer"

}

export default Task
