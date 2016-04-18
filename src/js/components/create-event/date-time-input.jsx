import React from 'react';

const DateTimeInput = () => {
    return (
        <div>
            <input
                type="date"
                ref="date"
                placeholder="Date" />
            <input
                ref="time"
                type="time"
                placeholder="Time" />

        </div>
    );
};

export default DateTimeInput;
