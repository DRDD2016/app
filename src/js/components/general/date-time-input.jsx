import React from 'react';
import classnames from 'classnames';

const DateTimeInput = ({ value, inputKey, handleDate, handleTime, removeInput }) => {

    let removeInputClasses = classnames("two columns", {
        "hide": inputKey === 0
    });

    return (
        <div className="row">
            <input
                className="five columns"
                type="date"
                value={ value.date }
                placeholder="Date"
                onChange={ handleDate.bind(this, inputKey) } />
            <input
                className="five columns"
                type="time"
                value={ value.time}
                placeholder="Time"
                onChange={ (e) => handleTime(inputKey, e) } />
            <button className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                X
            </button>
        </div>
    );
};

export default DateTimeInput;
