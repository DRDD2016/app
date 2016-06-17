import React from 'react';

const PhotoModal = ({ handleDeletePhoto, handleSharePhoto }) => {

    const closeModal = () => {
        document.getElementsByClassName('photo-modal-container')[0].style.display = none;
    };

    return (
        <div className="photo-modal-container">
            <i className="fa fa-times" ariaHidden="true" />
            <div className="share" onClick={ (e) => console.log(hey) }>Share to Facebook</div>
            <div className="delete" onClick={ (e) => console.log(hey) }>Delete</div>
        </div>
    );
};

export default PhotoModal;
