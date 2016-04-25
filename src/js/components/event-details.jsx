import React from 'react';
import { Link } from 'react-router';

const CreateEvent = ({ eventDetails, handleChange }) => (
    <div className="container">
        <div className="row">
            <div className="twelve columns">
                <h2>Event details</h2>
            </div>
        </div>
        <div className="row">
            <div className="twelve columns">
                <input
                    onChange={ handleChange.bind(this, 'eventName') }
                    value={ eventDetails ? eventDetails.eventName : '' }
                    type="text"
                    placeholder="Event name" />
            </div>
        </div>
        <div className="row">
            <div className="twelve columns">
                <input
                    onChange={ handleChange.bind(this, 'eventDescription') }
                    value={ eventDetails ? eventDetails.eventDescription: '' }
                    type="text"
                    placeholder="Event description" />
            </div>
        </div>
        <div className="row">
            <div className="twelve columns">
                <button><Link to='/create-event/what'>Next</Link></button>
            </div>
        </div>
    </div>
);

export default CreateEvent;
