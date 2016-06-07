import React from 'react';

const PhotoStream = ({ photos, handleDeletePhoto, handleSharePhoto, eventID }) => {

    let stream = photos.map((photo, i) => {

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
