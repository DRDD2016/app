import React from 'react';

const DateTimeInput = ({ value, inputKey, handleDate, handleTime }) => {

    return (
        <div className="row">
            <input
                className="six columns"
                type="date"
                value={ value.date }
                placeholder="Date"
                onChange={ handleDate.bind(this, inputKey) } />
            <input
                className="six columns"
                type="time"
                value={ value.time}
                placeholder="Time"
                onChange={ (e) => handleTime(inputKey,e) } />
        </div>
    );
};

export default DateTimeInput;