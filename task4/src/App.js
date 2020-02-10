import React, { useState, useEffect } from 'react';
import './normalize.css'
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


	const onToggleTask = (id) => {
		

	
		const toggleTask = tasks.map(item => {
			return item.id !== id ? item : {
				...item,
				isDone: !item.isDone
			}
		});


		// api.put(task.id, task).then(resp => {
		// 	setTasks(
		// 		tasks.map(item => (item.id === resp.data.id ? resp.data : item))
		// 	);
		
		setTasks(toggleTask);


		// api.put(task.id, task).then(resp => {
		// 	setTasks(
		// 		tasks.map(item => ( item.id === resp.data.id ? resp.data : {...item,isDone: !item.isDone}))
		// 	);
		// });



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
		<div>
			<button
				onClick={toggleModal}
			>
				add user(open modal)
			</button>
			<button
				onClick={() => console.log(tasks)}
			>
				tasks
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
