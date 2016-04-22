import React from 'react';

const DateTimeInput = ({ value, inputKey, handleDate, handleTime }) => {
    console.log(value,'-----bottom level====');
    return (
        <div>
            <input
                type="date"
                placeholder="Date"
                onChange={ handleDate.bind(this, inputKey) } />
            <input
                type="time"
                placeholder="Time"
                onChange={ (e) => handleTime(inputKey,e) } />
        </div>
    );
};

export default DateTimeInput;
