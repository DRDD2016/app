import React from 'react';

const EventDetailsHeader = ({ classes, eventName, eventDescription }) => {

    return (
        <div className={ classes }>
            <p> { eventName }</p>
            <p> { eventDescription }</p>
        </div>

    );
};

export default EventDetailsHeader;
