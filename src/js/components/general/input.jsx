import React from 'react';
import classnames from 'classnames';


const Input = ({ onChange, value, placeholder, removeInput, inputKey }) => {

    let removeInputClasses = classnames("circular ui icon button", {
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
            <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                <i className="icon remove" />
            </div>
        </div>
    );
};

export default Input;
