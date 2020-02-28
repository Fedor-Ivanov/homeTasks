import React from 'react'
import './ModalForm.css'


function ModalForm({ toggleModal }) {


	
    // const closeModal = (e) => {
    //     e.PreventDefault;
    //     toggleModal();
    // }


	return (
        <form 
            // onSubmit={onFormSubmit} 
            className="formStyle">
			<input type="text"
				name="title"
				
				placeholder="type some task..."
				className="formInput">
			</input>
		
			<div className="formButtonsWrap">
				<button className="formButton cancel" onClick={toggleModal}>Cancel</button>
				<button className="formButton save" type="submit">Save</button>
			</div>
			
		</form>
	)
}


const modalBodyStyle = {
	color: "red"
}

const modalFooterStyle = {
	backgroundColor: "yellow",
	display: "flex",
	justifyContent: "space-between"
}


export default ModalForm
