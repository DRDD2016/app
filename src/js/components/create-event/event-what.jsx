import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Input from '../general/input.jsx';
import AddInput from '../general/add-input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let inputCount = eventWhatData.length;

    let inputs = eventWhatData.map( (value, i) => {

        return (
            <Input
                ref={ (input) => {
                    if (input !== null && i === inputCount - 1) {
                        input.focus();
                    }
                }}
                handleChange={ handleEventWhat.bind(this, i) }
                key={ i }
                inputCount={ inputCount }
                value={ value }
                inputKey={ i }
                removeInput={ removeInput }
                placeholder= "What would you like to do?"
            />);
    });

    let addInputClasses = classnames("twelve columns", {
        "display-none": eventWhatData.length >= 3
    });

    let nextButtonClasses = classnames("twelve columns", {
        "display-none": eventWhatData[0] === ""
    });

    return (
        <div>
            <p>
                Enter what your event will be (or leave blank to decide it later).
            </p>
            <p>
                You can add more than one option to create a poll.
            </p>
            { inputs }


            <AddInput data={ eventWhatData } handler={ addInput } />

            <div className="row">
                <Link to='/create-event/where'>

                    <button className="twelve columns">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventWhat;
