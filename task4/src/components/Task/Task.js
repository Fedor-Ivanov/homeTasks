import React from 'react'

function Task({ task, onDelete, onToggleTask, onEdit }) {


	return (
		<li style={taskStyle} onClick={() => onToggleTask(task.id)}>
			<span>{task.title}</span>
			<button onClick={() => onEdit(task.id)}>edit</button>
			<button onClick={() => onDelete(task.id)}>delete</button>
		</li>
	)
}

const taskStyle = {
	padding: "20px",
	border: "2px solid #666",
	borderRadius: "5px",
	marginBottom: "10px",
	display: "flex",
	justifyContent: "space-between"
}

export default Task
