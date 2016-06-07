import React from 'react';

const PhotoStream = ({ photos }) => {

    console.log(photos);

    let stream = photos.map((photo, i) => {

        return (
            <img className="photo" src={ photo.photoURL } key={ i } />
        );
    });

    return (
        <div>
            {
                stream
            }
        </div>
    );
};

export default PhotoStream;
