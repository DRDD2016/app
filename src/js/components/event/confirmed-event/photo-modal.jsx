import React from 'react';

const PhotoModal = ({ closePhotoModal }) => {
    return (
        <div className="modal-container photoModal">
            <div onClick={ (e) => closePhotoModal } className="image">
              <i className="warning circle icon"></i>
            </div>
            <i className="fa fa-exclamation-circle" ariaHidden="true" />
            <div  className="delete" >Delete Photo</div>
            <div  className="cancel" >Share Photo to FB</div>
        </div>
    );
};

export default PhotoModal;
