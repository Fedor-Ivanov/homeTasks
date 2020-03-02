import React from 'react';
import './normalize.css'
import './App.css'
import Modal from './components/Modal/Modal';
import TasksList from './components/TasksList/TasksList';
import { connect } from 'react-redux';
import { openModal } from './store/actions';

function App({ openModal, modalVisible }) {

	return (
		<div>
			<button onClick={() => openModal()} className="newTask">
				add task
			</button>
			
			<TasksList />
            {modalVisible ? <Modal /> : null}
		</div>
	)
}

function mapStateToProps(state) {
    return {
        modalVisible: !!state.formItem
    };
}

const mapDispatchToProps = {
    openModal: openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
