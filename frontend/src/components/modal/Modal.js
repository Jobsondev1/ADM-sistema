import React from 'react'
import "./modal.css"
const Modal = ({ children }) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__close">
                    <button >X</button>
                </div>
                
                <div className="modal__content">{children}</div>       
            </div>
        </div>
    )
}

export default Modal
