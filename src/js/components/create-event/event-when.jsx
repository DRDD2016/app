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
            />);
    });

    let addInputClasses = classnames({
        "hide": eventWhenData.length >= 3
    });

    let removeInputClasses = classnames({
        "hide": eventWhenData.length === 1
    });

    let nextButtonClasses = classnames({
        "hide": eventWhenData[0].date === "" || eventWhenData[0].time === ""
    });

    return (
        <div className="">
            <div className="">
                <div className="row">
                    <h2 className="twelve columns title">When?</h2>
                </div>
            </div>

            { inputs }
            <div className="">
                <div className="">
                    <button className={ addInputClasses } onClick={ (e) => addInput(eventWhenData.length) }>
                        Add input
                    </button>
                </div>

                <div className="">
                    <button className={ removeInputClasses } onClick={ (e) => removeInput(eventWhenData.length - 1) }>
                        Remove input
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
