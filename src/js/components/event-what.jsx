import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Input from './create-event/input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let inputCount = Object.keys(eventWhatData);
    let inputs = inputCount.map( (value,i) => {
        return (
            <Input
                onChange={ handleEventWhat.bind(this, i) }
                key={ i }
                value={ eventWhatData[value] }
                placeholder= "What would you like to do?"
            />);
    });

    let addInputClasses = classnames({
        "hide": inputCount.length >= 3
    });

    let removeInputClasses = classnames({
        "hide": inputCount.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhatData[0] === ""
    });

    return (
        <div>
            <h2>What?</h2>
            { inputs }
            <button className={ addInputClasses } onClick={ addInput.bind(this, inputCount.length) }>
                Add input
            </button>
            <button className={ removeInputClasses } onClick={ removeInput }>
                Remove input
            </button>
            <button className={ nextButtonClasses }>
                <Link to='/create-event/where'>Next</Link>
            </button>
        </div>
    );
};

export default EventWhat;
