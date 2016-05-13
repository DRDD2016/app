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


    let addInputClasses = classnames("one column", {
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
                        +
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
