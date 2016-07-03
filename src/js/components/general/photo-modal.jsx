import React from 'react';

const PhotoModal = ({ handleDeletePhoto, handleSharePhoto, eventID }) => {

    const closeModal = (e) => {
        document.getElementsByClassName('photo-modal-container')[0].style.display = 'none';
    };

    const handleShareClick = () => {
        handleSharePhoto();
        let messageElement = document.getElementsByClassName('message shared-to-fb')[0];
        let classes = document.getElementsByClassName('message shared-to-fb')[0].className.replace("display-none", '');
        messageElement.className = classes;
        setTimeout(() => {

            messageElement.className += " display-none";
        }, 2000);
        closeModal();
    };

    const handleDeleteClick = (eventID) => {
        handleDeletePhoto(eventID);
        closeModal();
    };

    return (
        <div className="photo-modal-container">
            <i className="fa fa-times" onClick={ closeModal } ariaHidden="true" />
            <div className="share" onClick={ handleShareClick }>Share to Facebook</div>
            <div className="delete" onClick={ (e) => handleDeleteClick(eventID) }>Delete</div>
        </div>
    );
};

export default PhotoModal;
