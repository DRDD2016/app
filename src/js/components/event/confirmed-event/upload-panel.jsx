import React from 'react';
import classnames from 'classnames';
import { store } from '../../../init-store.js';


const UploadPanel = ({ hasPhotoLoaded, eventID, handleUploadPhoto, file, handleSetFile }) => {

    let hideUploadPhotoButton = classnames("row", {
        "display-none": hasPhotoLoaded === false || file === undefined
    });

    return (
        <div className="upload-panel">
            <p>Photos</p>
            <div className={ hideUploadPhotoButton }>
                <input id="file-upload" className="twelve columns button-primary" type="button" onClick={ () => { handleUploadPhoto(file, eventID); } }  value="Upload photo" />
            </div>
            <div className="row">
                <label className="offset-by-two eight columns file-button">
                    Choose a photo to upload
                    <input className="twelve columns" onChange={ (e) => handleSetFile(e.target.files[0]) } type="file" accept="image/*;capture=camera" />
                </label>
            </div>

       </div>
    );
};

export default UploadPanel;
