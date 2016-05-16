import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Input from '../general/input.jsx';

const EventWhat = ({ eventWhatData, addInput, removeInput, handleEventWhat }) => {

    let inputs = eventWhatData.map( (value, i) => {

        return (
            <Input
                handleChange={ handleEventWhat.bind(this, i) }
                key={ i }
                value={ value }
                inputKey={ i }
                removeInput={ removeInput }
                placeholder= "What would you like to do?"
            />);
    });

    let addInputClasses = classnames("twelve columns", {
        "hide": eventWhatData.length >= 3
    });

    let nextButtonClasses = classnames("twelve columns", {
        "hide": eventWhatData[0] === ""
    });

    return (
        <div>

            { inputs }

            <div className="row">
                <button className={ addInputClasses } onClick={ (e) => addInput() }>
                    Add input
                </button>
            </div>

            <div className="row">
                <Link className="twelve columns" to='/create-event/where'>

                    <button className={ nextButtonClasses }>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventWhat;
