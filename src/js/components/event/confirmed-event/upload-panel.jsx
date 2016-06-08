import React from 'react';

const UploadPanel = ({ eventID, handleUploadPhoto }) => {

    let photo;

    function getPhoto (e) {
        photo = e.target.files[0];
    }

    return (
        <div className="upload-panel">

           <div className="row">
               <input className="twelve columns" onChange={ getPhoto } type="file" accept="image/*;capture=camera" />
           </div>
           <div className="row">
               <input className="twelve columns" type="button" onClick={ () => { handleUploadPhoto(photo, eventID); } }  value="Upload a photo" />
           </div>
           <div className="row">
               <hr className="twelve columns" />
           </div>
       </div>
    );
};

export default UploadPanel;
