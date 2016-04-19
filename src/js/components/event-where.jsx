import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Input from './create-event/input.jsx';
import AutocompleteInput from './create-event/autocomplete-input.jsx';

const EventWhere = ({ eventWhereData, addInput, removeInput, handleEventWhere }) => {

    let inputCount = Object.keys(eventWhereData);

    let inputs = inputCount.map( (value, i) => {

        let template = `${eventWhereData[value].placeName} ${eventWhereData[value].placeAddress}`;
        let fullAddress = (eventWhereData[value].placeName ? template : "");

        let autocompleteID = 'autocomplete-' + i;
        return (
                <AutocompleteInput
                    handleInput={ handleEventWhere.bind(this, i) }
                    key={ i }
                    value={ fullAddress }
                    placeholder= "Where?"
                    id = { autocompleteID }
                />
        );
    });

    let addInputClasses = classnames({
        "hide": inputCount.length >= 3
    });

    let removeInputClasses = classnames({
        "hide": inputCount.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhereData[0].placeName === ""
    });

    return (
            <div>
                <h2>Where?</h2>
                { inputs }
                <button className={ addInputClasses } onClick={ addInput.bind(this, inputCount.length) }>
                    Add input
                </button>
                <button className={ removeInputClasses } onClick={ removeInput }>
                    Remove input
                </button>
                <button className={ nextButtonClasses }>
                    <Link to='/create-event/when'>Next</Link>
                </button>
            </div>
    );
};

export default EventWhere;
