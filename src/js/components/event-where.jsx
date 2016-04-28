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
        <div className="container">
            <div className="row">
                <div className="twelve columns">
                    <h2>Where?</h2>
                </div>
            </div>

            { inputs }
            <div className="row">
                <div className="three columns">
                    <button className={ addInputClasses } onClick={ (e) => addInput(inputCount.length) }>
                        Add input
                    </button>
                </div>

                <div className="three columns">
                    <button className={ removeInputClasses } onClick={ (e) => removeInput(inputCount.length) }>
                        Remove input
                    </button>
                </div>
                <div className="three columns">
                    <button className={ nextButtonClasses }>
                        <Link to='/create-event/when'>Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventWhere;
