import React, { useState, useEffect } from 'react';
import './normalize.css'
import api from './services/api';
import Modal from './components/Modal/Modal';
import TasksList from './components/TasksList/TasksList';

function App() {


	// States {

	const [modal, setModal] = useState({
		isOpen: false
	})

	const [tasks, setTasks] = useState([])

	const [newTask, setNewTask] = useState({
		title: '',
		isDone: false
	})

	// States }


	// Modal {

	const toggleModal = () => {
		setModal({
			isOpen: !modal.isOpen
		});
	}

	// Modal }

	useEffect(() => {
		api.get('').then(resp => setTasks(resp.data));
	}, [])


	const onTaskDelete = (id) => {
		api.delete(id).then(resp => {
			setTasks(tasks.filter(task => task.id !== resp.data.id));
		});
	}


	const onNewTaskChange = (changes) => {
		setNewTask({
			...newTask,
			...changes
		});
	}

	const onSaveTaks = (task) => {
		if (task.id) {
			updateTask(task);
		} else {
			createTask(task);
		}
	}


	const createTask = (task) => {
		api.post('', task).then(resp => setTasks([...tasks, resp.data]));
	}


	const updateTask = (task) => {
		api.put(task.id, task).then(resp => {
			setTasks(
				tasks.map(item => (item.id === resp.data.id ? resp.data : item))
			);
		})
	}


	const onTaskSelect = (id) => {
		const task = tasks.find(item => item.id === id);
		setNewTask(task);
	}


	return (
		<div>
			<button
				onClick={toggleModal}
			>
				add user(open modal)
			</button>
			<Modal
				tasks={tasks}
				show={modal.isOpen}
				onClose={toggleModal}
				onSave={onSaveTaks}
				onChange={onNewTaskChange}
			/>
			<TasksList
				tasks={tasks}
				onTaskSelect={onTaskSelect}
				onTaskDelete={onTaskDelete}
			/>
		</div>
	)
}

export default App
