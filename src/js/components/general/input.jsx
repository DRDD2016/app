import React from 'react';
import classnames from 'classnames';

const Input = ({ onChange, value, placeholder, removeInput, inputKey }) => {

    let removeInputClasses = classnames("one column", {
        "hide": inputKey === 0
    });

    return (
        <div className="row">
            <input
                className="ten columns"
                value={ value }
                onChange={ onChange }
                type="text"
                placeholder={ placeholder } />
            <button className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                -
            </button>
        </div>
    );
};

export default Input;
