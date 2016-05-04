import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Input from './create-event/input.jsx';
import AutocompleteInput from './create-event/autocomplete-input.jsx';

const EventWhere = ({ eventWhereData, addInput, removeInput, handleEventWhere }) => {

    let inputs = eventWhereData.map( (value, i) => {

        let template = `${value.placeName} ${value.placeAddress}`;
        let fullAddress = (value.placeName ? template : "");

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
        "hide": eventWhereData.length >= 3
    });

    let removeInputClasses = classnames({
        "hide": eventWhereData.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhereData[0].placeName === ""
    });

    return (
        <div className="">
            <div className="">
                <div className="">
                    <h2>Where?</h2>
                </div>
            </div>

            { inputs }
            <div className="">
                <div className="">
                    <button className={ addInputClasses } onClick={ (e) => addInput(eventWhereData.length) }>
                        Add input
                    </button>
                </div>

                <div className="">
                    <button className={ removeInputClasses } onClick={ (e) => removeInput(eventWhereData.length - 1) }>
                        Remove input
                    </button>
                </div>
                <div className="">
                  <Link to='/create-event/when'>
                    <button className={ nextButtonClasses }>
                      Next
                    </button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default EventWhere;
