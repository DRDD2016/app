import React from 'react';
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


    return (
            <div>
                <h2>What?</h2>
                { inputs }
                <button onClick={ addInput.bind(this, inputCount.length) }>
                    Add input
                </button>
                <button onClick={ removeInput }>
                    Remove input
                </button>
                <button>
                    <Link to='/create-event/where'>Next</Link>
                </button>
            </div>
        );
};

    // take the number of what items
    // map that number onto the what input to return that number of input fields


export default EventWhat;
