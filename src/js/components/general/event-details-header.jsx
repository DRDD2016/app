import React from 'react';
import classnames from 'classnames';


const EventDetailsHeader = ({ location, eventName, eventDescription, hostPhotoURL }) => {

    let hideEventDetails = eventName === "" || eventDescription === "" || location === "create-event";
    let classes = classnames("row event-details-header", {
        "display-none": hideEventDetails
    });
    if (!hostPhotoURL) {

        return (
            <div className={ classes } >
                <p className="event-detail-text">  { eventName }</p>
                <p className="event-detail-text">  { eventDescription }</p>
            </div>

        );
    } else {
        return (
            <div className={ classes } >
                <div className="four columns">
                <img className=" ui event-detail-photo circular image" src={ hostPhotoURL } alt="Host photo" />
                </div>
                <div className="eight columns event-detail-text-container">
                    <p className="event-detail-text"> { eventName }</p>
                    <p className="event-detail-text"> { eventDescription }</p>
                </div>
            </div>

        );
    }


};

export default EventDetailsHeader;
