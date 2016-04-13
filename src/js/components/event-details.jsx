import React from 'react';

const CreateEvent = ({ value, handleChange }) => (

    <div>
        <input
            onChange={ handleChange.bind(this, 'eventName') }
            value={ value }
            type="text"
            placeholder="Event name" />

        <input
            onChange={ handleChange.bind(this, 'eventDescription') }
            value={ value }
            type="text"
            placeholder="Event description" />
    </div>
);

export default CreateEvent;
