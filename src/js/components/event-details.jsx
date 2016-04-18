import React from 'react';
import { Link } from 'react-router';

const CreateEvent = ({ eventDetails, handleChange }) => (
    <div>
        <input
            onChange={ handleChange.bind(this, 'eventName') }
            value={ eventDetails ? eventDetails.eventName : '' }
            type="text"
            placeholder="Event name" />

        <input
            onChange={ handleChange.bind(this, 'eventDescription') }
            value={ eventDetails ? eventDetails.eventDescription: '' }
            type="text"
            placeholder="Event description" />

        <button><Link to='/create-event/what'>Next</Link></button>
    </div>
);

export default CreateEvent;
