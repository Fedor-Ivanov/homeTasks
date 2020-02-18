import React, { useState, useEffect } from 'react';
import './normalize.css'
import './App.css'
import api from './services/api';
import Modal from './components/Modal/Modal';
import TasksList from './components/TasksList/TasksList';

function App() {

	const [modal, setModal] = useState({
		isOpen: false
	});

	const [tasks, setTasks] = useState([]);

	const [newTask, setNewTask] = useState({
		title: '',
		isDone: false
	});


	const toggleModal = () => {
		setModal({
			isOpen: !modal.isOpen
		});
		setNewTask({
			id: '',
			title: ''
		})
	}


	useEffect(() => {
		api.get('').then(resp => setTasks(resp.data));
	}, []);


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


	const onToggleTask = (task) => {
		api.put(task.id, {'isDone': !task.isDone}).then(resp => {
			setTasks(
				tasks.map(item => (item.id === resp.data.id ? resp.data : item))
			);
		});
	}


	const onSaveTask = (task) => {
		
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
		});
	}


	const onEditTask = (id) => {
		const task = tasks.find(item => item.id === id);
		toggleModal();
		onNewTaskChange(task);
	}


	return (
		<div style={{backgroundImage: 'linear-gradient(to right top, #a3a6aa, #babbbf, #d1d1d4, #e8e8e9, #ffffff)'}}>
			<button onClick={toggleModal} className="newTask">
				add task
			</button>
			
			<Modal
				task={newTask}
				show={modal.isOpen}
				onClose={toggleModal}
				onSave={onSaveTask}
				onNewTaskChange={onNewTaskChange}
			/>
			<TasksList
				tasks={tasks}
				onTaskDelete={onTaskDelete}
				onToggleTask={onToggleTask}
				onEditTask={onEditTask}
			/>
		</div>
	)
}

export default App