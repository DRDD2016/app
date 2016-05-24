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
                <p> { eventName }</p>
                <p> { eventDescription }</p>
            </div>

        );
    } else {
        return (
            <div className={ classes } >
                <img className="four columns ui profile-photo circular image" src={ hostPhotoURL } alt="Host photo" />
                <div className="eight columns">
                    <p> { eventName }</p>
                    <p> { eventDescription }</p>
                </div>
            </div>

        );
    }


};

export default EventDetailsHeader;
