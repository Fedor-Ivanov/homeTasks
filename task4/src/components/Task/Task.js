import React from 'react'

function Task({ task, onDelete }) {

	return (
		<div style={taskStyle}>
			<span>{task.title}</span>
			<button onClick={() => onDelete(task.id)}>delete</button>
		</div>
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
