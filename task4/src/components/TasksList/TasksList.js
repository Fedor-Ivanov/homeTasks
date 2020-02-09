import React from 'react'
import Task from '../Task/Task'

function TasksList({tasks, onTaskDelete}) {
	return (
		<ul style={tasksListStyle}>
			{tasks.map(task => (
				<Task
					task={task}
					key={task.id}
					onDelete={onTaskDelete}

				/>
			))}
		</ul>
	)
}

const tasksListStyle = {
	margin: "10px 50px"
}

export default TasksList
