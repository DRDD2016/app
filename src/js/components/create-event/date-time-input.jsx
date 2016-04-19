import React from 'react';

const DateTimeInput = ({ value, inputKey, handleDate, handleTime }) => {

    return (
        <div>
            <input
                type="date"
                placeholder="Date"
                onChange={ handleDate.bind(this, inputKey) } />
            <input
                type="time"
                placeholder="Time"
                onChange={ handleTime.bind(this, inputKey) } />
        </div>
    );
};

export default DateTimeInput;
