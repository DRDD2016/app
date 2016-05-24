import React from 'react';


const CancelConfirmedEventModal = ({ handleCancelConfirmedEvent }) => {

    return (
        <div className="ui basic modal">
          <i className="close icon"></i>
          <div className="header">
            Are you sure you would like to delete the event?
          </div>
          <div className="image content">
            <div className="image">
              <i className="warning circle icon"></i>
            </div>
          </div>
          <div className="actions">
            <div className="two fluid ui inverted buttons">
              <div className="ui red basic inverted button">
                <i className="remove icon"></i>
                No
              </div>
              <div onClick={ handleCancelConfirmedEvent } className="ui green basic inverted button">
                <i className="checkmark icon"></i>
                Yes
              </div>
            </div>
          </div>
        </div>
    );

};

export default CancelConfirmedEventModal;
