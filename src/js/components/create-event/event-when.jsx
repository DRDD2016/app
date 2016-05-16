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
        <div className="">

            { inputs }
            <div className="">
                <div className="">
                    <button className={ addInputClasses } onClick={ (e) => addInput() }>
                        Add input
                    </button>
                </div>

                <div className="">
                    <button className={ nextButtonClasses }>
                        <Link to='/create-event/invitees'>Next</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventWhen;
