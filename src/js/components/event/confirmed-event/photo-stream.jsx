import React from 'react';

const PhotoStream = ({ photos }) => {

    let stream = photos.map((photo, i) => {

        return (
            <div>
                <img className="photo" src={ photo.photoURL } key={ i } />
                <div className="row">
                    <label className="six columns photo-button">Delete</label>
                    <label className="six columns photo-button share">Share</label>
                </div>
                <hr />
            </div>
        );
    });

    return (
        <div>
            { photos && stream }
        </div>
    );
};

export default PhotoStream;
