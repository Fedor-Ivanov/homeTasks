import React, { useState, useEffect } from 'react';
import './normalize.css'
import api from './services/api';
import Modal from './components/Modal/Modal';
import TasksList from './components/TasksList/TasksList';

function App() {


	const [modal, setModal] = useState({
		isOpen: false
	})

	const [tasks, setTasks] = useState([])

	const [newTask, setNewTask] = useState({
		title: '',
		isDone: false
	})


	useEffect(() => {
		api.get('').then(resp => setTasks(resp.data));
	}, [])


	const toggleModal = () => {
		setModal({
			isOpen: !modal.isOpen
		});
	}


	const onTaskDelete = (id) => {
		api.delete(id).then(resp => {
			setTasks(tasks.filter(task => task.id !== resp.data.id));
		});
	}


	return (
		<div>
			<button
				onClick={toggleModal}
			>
				add user(open modal)
			</button>
			<Modal
				show={modal.isOpen}
				onClose={toggleModal}
			/>
			<TasksList
				tasks={tasks}
				onTaskDelete={onTaskDelete}
			/>
		</div>
	)
}

export default App
