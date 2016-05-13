import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Input from '../general/input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    console.log("This is the data", eventWhatData);

    let inputs = eventWhatData.map( (value, i) => {
        console.log(value);
        return (
            <Input
                className=""
                handleChange={ (e) => handleEventWhat(i) }
                key={ i }
                inputIndex={ i }
                value={ value }
                removeInput={ removeInput }
                placeholder= "What would you like to do?"
            />);
    });


    let addInputClasses = classnames("six columns", {
        "hide": eventWhatData.length >= 3
    });



    let nextButtonClasses = classnames({
        "hide": eventWhatData[0] === ""
    });

    return (
        <div className="">
            <div className="">
                <div className="row">
                    <h2 className="twelve columns title">What?</h2>
                </div>
            </div>

            { inputs }
            <div className="">
                <div className="row">
                    <button className={ addInputClasses } onClick={ (e) => addInput(eventWhatData.length) }>
                        Add input
                    </button>
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
