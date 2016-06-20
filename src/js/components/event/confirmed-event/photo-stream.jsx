import React from 'react';
import PhotoModal from '../../general/photo-modal.jsx';
import Loader from '../../general/loader.jsx';


const PhotoStream = ({ hasPhotoLoaded, photos, deletedPhotos, getSelectedPhoto, handleDeletePhoto, handleSharePhoto, eventID }) => {

    const displayModal = () => {

        document.getElementsByClassName('photo-modal-container')[0].style.display = 'flex';
    };

    const handleMenuClick = (photoURL) => {

        getSelectedPhoto(photoURL);
        displayModal();
    };

    let filteredPhotos = photos.filter((individualPhoto, index) => {

        return deletedPhotos.indexOf(individualPhoto.photoURL) === -1;
    });

    let stream = filteredPhotos.map((photo, i) => {

        return (
            <div className="row photo" key={ i }>
                <img className="eleven columns" src={ photo.photoURL } />
                <i className="one column fa fa-ellipsis-v" id={ photo.photoURL } onClick={ (e) => handleMenuClick(e.target.id) } ariaHidden="true" />
            </div>
        );
    });

    return (
        <div>
            <PhotoModal handleDeletePhoto={ handleDeletePhoto }
                        handleSharePhoto={ handleSharePhoto }
                        eventID={ eventID } />
            { hasPhotoLoaded === false &&  <Loader /> }
            { photos && hasPhotoLoaded !== false && stream }
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </div>
    );
};

export default PhotoStream;
