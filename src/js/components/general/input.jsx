import React from 'react';
import classnames from 'classnames';


const Input = ({ handleChange, value, placeholder, removeInput, inputKey }) => {

    let removeInputClasses = classnames("one column", {
        "display-none": inputKey === 0
    });

    return (
        <div className="row">
            <input
                className="eleven columns"
                value={ value }
                onChange={ handleChange }
                type="text"
                placeholder={ placeholder } />
            <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                <i className="icon remove" />
            </div>
        </div>
    );
};

export default Input;
