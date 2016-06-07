import React from 'react';

const PhotoStream = ({ photos }) => {

    let stream = photos.map((photo, i) => {

        return (
            <img className="photo" src={ photo.photoURL } key={ i } index={ i } />
        );
    });

    return (
        <div>
            { photos && stream }
        </div>
    );
};

export default PhotoStream;
