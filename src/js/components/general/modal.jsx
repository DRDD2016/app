import React from 'react';

const Modal = ({ deleteEvent, closeModal }) => {

    return (
        <div className="modal-container">
            <i className="fa fa-exclamation-circle" ariaHidden="true" />
            <p>Are you sure?</p>
            <div className="delete" onClick={ deleteEvent }>Delete</div>
            <div className="cancel" onClick={ closeModal }>Cancel</div>
        </div>
    );
};

export default Modal;
