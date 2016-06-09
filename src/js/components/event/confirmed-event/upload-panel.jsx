import React from 'react';
import classnames from 'classnames';


const UploadPanel = ({ eventID, handleUploadPhoto, file, handleSetPhoto }) => {

    let hideUploadPhotoButton = classnames("row", {
        "display-none": file === undefined
    });

    return (
        <div className="upload-panel">

           <div className="row">
               <input className="twelve columns" onChange={ (e) => handleSetPhoto(e.target.files[0]) } type="file" accept="image/*;capture=camera" />
           </div>
           <div className={ hideUploadPhotoButton }>
               <input className="twelve columns" type="button" onClick={ () => { handleUploadPhoto(file, eventID); } }  value="Upload a photo" />
           </div>
           <div className="row">
               <hr className="twelve columns" />
           </div>
       </div>
    );
};

export default UploadPanel;
