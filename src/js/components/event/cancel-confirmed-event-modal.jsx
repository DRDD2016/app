import React from 'react';


const CancelConfirmedEventModal = ({ handleDeleteEvent, handleCloseModal }) => {

    return (
        <div className="ui basic modal">
            <div className="image content">
              <div className="image">
                <i className="warning circle icon"></i>
              </div>
            </div>
          <div className="header">
            Delete this event?
          </div>
          <div className="actions">
            <div className="two fluid ui inverted buttons">
              <div onClick={ handleCloseModal } className="ui red basic inverted button">
                <i className="remove icon"></i>
                No
              </div>
              <div onClick={ handleDeleteEvent } className="ui green basic inverted button">
                <i className="checkmark icon"></i>
                Yes
              </div>
            </div>
          </div>
        </div>
    );

};

export default CancelConfirmedEventModal;
