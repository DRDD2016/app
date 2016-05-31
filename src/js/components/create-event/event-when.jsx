import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import DateTimeInput from '../general/date-time-input.jsx';
import AddInput from '../general/add-input.jsx';

const EventWhen = ({ eventWhenData, addInput, removeInput, handleDate, handleTime }) => {

    let inputs = eventWhenData.map( (value, i) => {
        return (
            <DateTimeInput
                value={ value }
                key={ i }
                inputKey={ i }
                handleTime={ handleTime }
                handleDate={ handleDate }
                removeInput={ removeInput }
            />);
    });

    let addInputClasses = classnames("twelve columns", {
        "display-none": eventWhenData.length >= 3
    });


    let nextButtonClasses = classnames("twelve columns", {
        "display-none": eventWhenData[0].date === ""
    });

    return (
        <div>
            <p>
                Enter a date and a time for your event (or leave them blank to decide later).
            </p>
            <p>
                You can add more than one option to create a poll.
            </p>
            { inputs }

            <AddInput data={ eventWhenData } handler={ addInput } />

            <div className="row">
                <Link to='/create-event/invitees'>
                    <button className="twelve columns">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventWhen;
