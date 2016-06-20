import React from 'react';
import classnames from 'classnames';
import { store } from '../../../init-store.js';


const UploadPanel = ({ hasPhotoLoaded, eventID, handleUploadPhoto, file, handleSetFile }) => {

    let hideUploadPhotoButton = classnames("row", {
        "display-none": hasPhotoLoaded === false || file === undefined
    });

    let fileExistsInState = store.getState().photos.file;

    return (
        <div className="upload-panel">
            <h5>Event photo stream</h5>
            <div className="row">
                <label className="six columns file-button">
                    Choose a file
                    <input className="twelve columns" onChange={ (e) => handleSetFile(e.target.files[0]) } type="file" accept="image/*;capture=camera" />
                </label>
                <p className="six columns">{ file && fileExistsInState ? file.name : '' }</p>
            </div>
            <div className={ hideUploadPhotoButton }>
                <input id="file-upload" className="twelve columns button-primary" type="button" onClick={ () => { handleUploadPhoto(file, eventID); } }  value="Upload a photo" />
            </div>

       </div>
    );
};

export default UploadPanel;
