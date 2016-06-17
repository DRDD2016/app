import React from 'react';
import PhotoModal from '../../general/photo-modal.jsx';

const PhotoStream = ({ photos, deletedPhotos, handleDeletePhoto, handleSharePhoto, eventID }) => {

    const displayModal = () => {

        document.getElementsByClassName('photo-modal-container')[0].style.display = 'flex';
    };


    let deletedPhotosURL = deletedPhotos.map((photo, index) => {
        return photo.photoURL;
    });

    let filteredPhotos = photos.filter((individualPhoto, index) => {
        return deletedPhotosURL.indexOf(individualPhoto.photoURL) === -1;
    });

    let stream = filteredPhotos.map((photo, i) => {

        return (
            <div className="row photo" key={ i }>
                <img className="eleven columns" src={ photo.photoURL } />
                <i className="one column fa fa-ellipsis-v" onClick={ displayModal } ariaHidden="true" />
            </div>
        );
    });

    return (
        <div>
            <PhotoModal handleDeletePhoto={ handleDeletePhoto } handleSharePhoto={ handleSharePhoto } eventID={ eventID } />
            { photos && stream }
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </div>
    );
};

export default PhotoStream;
