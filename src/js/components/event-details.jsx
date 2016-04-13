import React from 'react';

const CreateEvent = ({ value, onChange }) => (

    <div>
        <input
            onChange={ event => onChange(event.target.value) }
            value={ value }
            type="text"
            placeholder="Event name" />
    </div>
);

export default CreateEvent;
