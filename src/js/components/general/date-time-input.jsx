import React from 'react';
import classnames from 'classnames';

const DateTimeInput = ({ value, inputKey, handleDate, handleTime, removeInput }) => {

    let removeInputClasses = classnames("circular ui icon button", {
        "hide": inputKey === 0
    });

    return (
        <div className="row">
            <input
                className="six columns"
                type="date"
                value={ value.date }
                placeholder="Date"
                onChange={ handleDate.bind(this, inputKey) } />
            <input
                className="four columns"
                type="time"
                value={ value.time}
                placeholder="Time"
                onChange={ (e) => handleTime(inputKey, e) } />
            <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                <i className="icon remove" />
            </div>
        </div>
    );
};

export default DateTimeInput;
