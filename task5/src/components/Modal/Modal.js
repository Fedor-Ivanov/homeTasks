import React from 'react'

function Modal({ modal }) {

    console.log(modal);

    if(!modal) {
        return null;
    }

    return (
        <div>
            its modal
        </div>
    )
}

export default Modal
