import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Input from '../general/input.jsx';
import AutocompleteInput from '../general/autocomplete-input.jsx';
import AddInput from '../general/add-input.jsx';

const EventWhere = ({ eventWhereData, addInput, removeInput, handleEventWhere }) => {

    let inputs = eventWhereData.map( (value, i) => {

        let templateNoSpace = `${value.placeName}${value.placeAddress}`;
        let templateWithSpace = `${value.placeName} ${value.placeAddress}`;
        let chosenTemplate = (value.placeAddress === '') ? templateNoSpace : templateWithSpace;
        let fullAddress = (value.placeName ? chosenTemplate : "");

        let autocompleteID = 'autocomplete-' + i;
        return (
                <AutocompleteInput
                    handleChange={ handleEventWhere.bind(this, i) }
                    key={ i }
                    inputKey={ i }
                    value={ fullAddress }
                    placeholder= "Where?"
                    id={ autocompleteID }
                    removeInput={ removeInput }
                />
        );
    });

    let addInputClasses = classnames("twelve columns", {
        "display-none": eventWhereData.length >= 3
    });

    let nextButtonClasses = classnames("twelve columns", {
        "display-none": eventWhereData[0].placeName === ""
    });

    return (
        <div>
            <p>
                Enter where the event will take place (or leave blank to decide it later).
            </p>
            <p>
                You can add more than one option to create a poll.
            </p>
            { inputs }

            <AddInput data={ eventWhereData } handler={ addInput } />

            <div className="row">
                <Link to='/create-event/when'>
                    <button className="twelve columns">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventWhere;
