import React from 'react';

const PhotoStream = ({ photos }) => {

    let stream = photos.map((photo, i) => {

        return (
            <div key={ i }>
                <img className="photo" src={ photo.photoURL } />

                <div className="row">
                    <label className="six columns photo-button">Delete</label>
                    <label className="six columns photo-button share">Share</label>
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
