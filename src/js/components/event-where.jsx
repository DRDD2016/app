import React from 'react';
import { Link } from 'react-router';
import Input from './create-event/input.jsx';
import AutocompleteInput from './create-event/autocomplete-input.jsx';

const EventWhere = ({ eventWhereData, addInput, removeInput, handleEventWhere }) => {

    let inputCount = Object.keys(eventWhereData);

    let inputs = inputCount.map( (value, i) => {

        let autocompleteID = 'autocomplete-' + i;
        return (
                <AutocompleteInput
                    handleInput={ handleEventWhere.bind(this, i) }
                    key={ i }
                    value={ eventWhereData[value] }
                    placeholder= "Where?"
                    id = { autocompleteID }
                />
        );
    });

    return (
            <div>
                <h2>Where?</h2>
                { inputs }
                <button onClick={ addInput.bind(this, inputCount.length) }>
                    Add input
                </button>
                <button onClick={ removeInput }>
                    Remove input
                </button>
                <button>
                    <Link to='/create-event/when'>Next</Link>
                </button>
            </div>
    );
};

export default EventWhere;
