import React from 'react';
import WhatInput from './create-event/what-input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let indices = Object.keys(eventWhatData);
    let inputs = indices.map( (value,i) => {
        return (
            <WhatInput
                onChange={ handleEventWhat.bind(this, i) }
                key={ i }
                value={ eventWhatData[value] }
            />);
    });


    return (
            <div>
                { inputs }
                <button onClick={ addInput.bind(this, indices.length) }>
                    Add input
                </button>
                <button onClick={ removeInput }>
                    Remove input
                </button>
            </div>
        );
};

    // take the number of what items
    // map that number onto the what input to return that number of input fields


export default EventWhat;
