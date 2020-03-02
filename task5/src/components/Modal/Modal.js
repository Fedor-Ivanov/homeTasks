import React from 'react'
import ModalForm from '../ModalForm/ModalForm';
import { connect } from 'react-redux';
import { closeModal, changeFormItem, saveFormItem } from '../../store/actions';


function Modal({ task, onClose, onSave, onChange }) {

	return (
		<div style={backdropStyle}>
			<div style={modalStyle}>
				
				<ModalForm
					task={task}
					closeModal={onClose}
					onSave={onSave}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

const backdropStyle = {
	position: 'fixed',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'rgba(0,0,0,0.3)',
	padding: 50
};

const modalStyle = {
	backgroundColor: '#fff',
	borderRadius: 5,
	maxWidth: 500,
	minHeight: 185,
	margin: '0 auto',
	padding: 30,
	display: "flex",
};



function mapStateToProps(state) {
    return {
        task: state.formItem
    };
}

const mapDispatchToProps = {
    onClose: closeModal,
    onChange: changeFormItem,
    onSave: saveFormItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);