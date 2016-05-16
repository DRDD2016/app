import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Input from '../general/input.jsx';
import AutocompleteInput from '../general/autocomplete-input.jsx';

const EventWhere = ({ eventWhereData, addInput, removeInput, handleEventWhere }) => {

    let inputs = eventWhereData.map( (value, i) => {

        let templateNoSpace = `${value.placeName}${value.placeAddress}`;
        let templateWithSpace = `${value.placeName} ${value.placeAddress}`;
        let chosenTemplate = value.placeAddress === '' ? templateNoSpace : templateWithSpace;
        let fullAddress = (value.placeName ? chosenTemplate : "");


        let autocompleteID = 'autocomplete-' + i;
        return (
                <AutocompleteInput
                    handleChange={ handleEventWhere.bind(this, i) }
                    key={ i }
                    inputKey={ i }
                    value={ fullAddress }
                    placeholder= "Where?"
                    id = { autocompleteID }
                    removeInput={ removeInput }
                />
        );
    });

    let addInputClasses = classnames({
        "hide": eventWhereData.length >= 3
    });

    let nextButtonClasses = classnames({
        "hide": eventWhereData[0].placeName === ""
    });

    return (
        <div className="">
            <div className="">
                <div className="event-header row">
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
