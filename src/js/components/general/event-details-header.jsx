import React from 'react';
import classnames from 'classnames';


const EventDetailsHeader = ({ location, eventName, eventDescription }) => {

    let hideEventDetails = eventName === "" || eventDescription === "" || location === "create-event";
    let classes = classnames("row event-details-header", {
        "display-none": hideEventDetails
    });

    return (
        <div className={ classes } >
            <p> { eventName }</p>
            <p> { eventDescription }</p>
        </div>

    );
};

export default EventDetailsHeader;
