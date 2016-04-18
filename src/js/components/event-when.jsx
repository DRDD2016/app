import React from 'react';
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


    return (
            <div>
                <h2>When?</h2>
                { inputs }
                <button onClick={ addInput.bind(this, inputCount.length) }>
                    Add input
                </button>
                <button onClick={ removeInput }>
                    Remove input
                </button>
            </div>
        );
};

export default EventWhen;
