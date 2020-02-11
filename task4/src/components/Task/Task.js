import React from 'react'

function Task({ task, onDelete, onToggleTask, onEdit }) {


	return (
		<li style={(task.isDone) ? doneTaskStyle : taskStyle} onClick={() => onToggleTask(task)}>
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
	justifyContent: "space-between",
	backgroundColor: "#fff",
	transition: "0.3s"
}

const doneTaskStyle = {
	padding: "20px",
	border: "2px solid #666",
	borderRadius: "5px",
	marginBottom: "10px",
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: 'green',
	transition: "0.3s"
}


export default Task
