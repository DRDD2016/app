import React from 'react';
import { hashHistory } from 'react-router';
import EventDetailsHeader from '../general/event-details-header.jsx';
import TopBar from '../event/top-bar.jsx';


const CreateEvent = ({ location, eventDetails, children }) => {

    return (
        <div>
            <TopBar location={ location } />

            <EventDetailsHeader location={ location.pathname.split('/').pop() }
                                eventName={eventDetails.eventName }
                                eventDescription={ eventDetails.eventDescription } />

            <div className="container">
                { children }
            </div>
        </div>
    );

};

export default CreateEvent;
