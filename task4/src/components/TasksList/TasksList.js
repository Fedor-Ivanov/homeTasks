import React from 'react'
import Task from '../Task/Task'

function TasksList({tasks, onTaskDelete, onToggleTask, onEditTask}) {
	return (
		<ul style={tasksListStyle}>
			{tasks.map(task => (
				<Task
					task={task}
					key={task.id}
					onDelete={onTaskDelete}
					onToggleTask={onToggleTask}
					onEdit={onEditTask}
				/>
			))}
		</ul>
	)
}

const tasksListStyle = {
	margin: "10px 50px"
}

export default TasksList
