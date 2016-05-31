import React from 'react';
import classnames from 'classnames';

const DateTimeInput = ({ value, inputKey, handleDate, handleTime, removeInput }) => {

    let removeInputClasses = classnames("one column", {
        "display-none": inputKey === 0
    });

    return (
        <div className="date-time-input">

            <div className="row">
                <label className="six columns label-left">
                    Date
                </label>
                <label className="four columns label-left">
                    Time
                </label>
            </div>
            <div className="row">
                <input
                    className="six columns"
                    type="date"
                    value={ value.date }
                    placeholder="Date"
                    onChange={ handleDate.bind(this, inputKey) } />

                <input
                    step="300"
                    className="four columns"
                    type="time"
                    value={ value.time}
                    placeholder="Time"
                    onChange={ (e) => handleTime(inputKey, e) } />

                <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                    <i className="fa fa-times" ariaHidden="true" />
                </div>
            </div>
        </div>
    );
};

export default DateTimeInput;
