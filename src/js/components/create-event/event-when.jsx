import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import DateTimeInput from '../general/date-time-input.jsx';

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
        "hide": eventWhenData.length >= 3
    });


    let nextButtonClasses = classnames("twelve columns", {
        "hide": eventWhenData[0].date === ""
    });

    return (
        <div>

            { inputs }
            <div className="">
                <button className={ addInputClasses } onClick={ (e) => addInput() }>
                    Add input
                </button>

                <Link to='/create-event/invitees'>
                    <button className={ nextButtonClasses }>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventWhen;
