//import { DialogTitle } from '@material-ui/core';
import React from 'react'
import "./modal.css"
const Modal = ({ id='modal', onClose= ()=>{}, children }) => {

    const handleOutsiderClick = (e) =>{
    if(e.target.id === id) onClose();
}
    return (
        <div id={id} className="modal_primary" onClick={handleOutsiderClick}>
            <div className="modal__container">
                <div className="modal__close">
                    <button onClick={onClose} >X</button>
                </div>
                
                <div className="modal__content">{children}</div>       
            </div>
        </div>
    )
}

export default Modal
