import React from 'react';

const PhotoStream = ({ photos, deletedPhotos, handleDeletePhoto, handleSharePhoto, eventID }) => {

    let deletedPhotosURL = deletedPhotos.map((photo, index) => {
        return photo.photoURL;
    });

    let filteredPhotos = photos.filter((individualPhoto, index) => {
        return deletedPhotosURL.indexOf(individualPhoto.photoURL) === -1;
    });

    let stream = filteredPhotos.map((photo, i) => {

        return (
            <div key={ i }>
                <img className="photo" src={ photo.photoURL } />

                <div className="row">
                    <label onClick={ () => { handleDeletePhoto(photo, eventID); } } className="six columns photo-button">Delete</label>
                    <label onClick={ () => { handleSharePhoto(photo.photoURL); } } className="six columns photo-button share">Share</label>
                </div>
            </div>
        );
    });

    return (
        <div>
            { photos && stream }
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </div>
    );
};

export default PhotoStream;
