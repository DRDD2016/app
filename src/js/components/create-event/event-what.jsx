import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Input from '../general/input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let inputs = eventWhatData.map( (value, i) => {
        return (
            <Input
                className=""
                onChange={ handleEventWhat.bind(this, i) }
                key={ i }
                value={ value }
                inputKey={ i }
                removeInput={ removeInput }
                placeholder= "What would you like to do?"
            />);
    });


    let addInputClasses = classnames("circular ui icon button", {
        "hide": eventWhatData.length >= 3
    });


    let nextButtonClasses = classnames("twelve columns", {
        "hide": eventWhatData[0] === ""
    });

    return (
        <div className="">
            <div className="">
                <div className="event-header row">
                    <h2 className="twelve columns title">What?</h2>
                </div>
            </div>

            { inputs }
            <div className="">
                <div className="row">
                    <div className={ addInputClasses } onClick={ (e) => addInput(eventWhatData.length) }>
                        <i className="icon plus" />
                    </div>
                </div>

                <div className="row">
                    <Link to='/create-event/where'>
                        <button className={ nextButtonClasses }>
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventWhat;
