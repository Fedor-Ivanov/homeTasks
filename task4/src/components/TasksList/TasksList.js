import React from 'react'
import Task from '../Task/Task'
import './TasksList.css'

function TasksList({tasks, onTaskDelete, onToggleTask, onEditTask}) {
	return (
		<ul className="tasksListStyle">
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


export default TasksList
