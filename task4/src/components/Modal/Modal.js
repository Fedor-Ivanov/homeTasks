import React from 'react'

function Modal({ onClose, show}) {

	if(!show) {
		return null;
	  }

	return (
		<div style={backdropStyle}>
			<div style={modalStyle}>
				<div style={modalBodyStyle}>
					lorem
				</div>
				<div style={modalFooterStyle}>
					<button onClick={onClose}>Close</button>
				</div>
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
	minHeight: 300,
	margin: '0 auto',
	padding: 30
};

const modalBodyStyle = {
	color: "red"
}

const modalFooterStyle = {
	backgroundColor: "yellow"
}

export default Modal
