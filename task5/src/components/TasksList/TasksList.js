import React from 'react'
import Task from '../Task/Task'
import './TasksList.css'
import { connect } from 'react-redux';
import { openModal, deleteTask, toggleTask } from '../../store/actions';


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


function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

const mapDispatchToProps = {
    onTaskDelete: deleteTask,
    onToggleTask: toggleTask,
    onEditTask: openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);