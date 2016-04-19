import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import DateTimeInput from './create-event/date-time-input.jsx';

const EventWhen = ({ eventWhenData, addInput, removeInput, handleDate, handleTime }) => {

    let inputCount = Object.keys(eventWhenData);

    let inputs = inputCount.map( (value, i) => {
        return (
            <DateTimeInput
                value={ eventWhenData[value] }
                key={ i }
                inputKey={ i }
                handleTime={ handleTime }
                handleDate={ handleDate }
            />);
    });

    let addInputClasses = classnames({
        "hide": inputCount.length >= 3
    });

    let removeInputClasses = classnames({
        "hide": inputCount.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhenData[0].name === ""
    });

    return (
        <div>
            <h2>When?</h2>
            { inputs }
            <button className={ addInputClasses } onClick={ addInput.bind(this, inputCount.length) }>
                Add input
            </button>
            <button className={ removeInputClasses } onClick={ removeInput }>
                Remove input
            </button>
            <button className={ nextButtonClasses }>
                <Link to='/create-event/confirm'>Next</Link>
            </button>
        </div>
    );
};

export default EventWhen;
