import React from 'react';
import classnames from 'classnames';


const Input = ({ handleChange, value, placeholder, removeInput, inputKey, inputCount }) => {

    let removeInputClasses = classnames("one column", {
        "display-none": inputKey === 0
    });

    return (
        <div className="row">
            <input
                ref={ (input) => {
                    if (input !== null && inputKey === inputCount - 1) {
                        input.focus();
                    }
                }}
                className="eleven columns"
                value={ value }
                onChange={ handleChange }
                type="text"
                placeholder={ placeholder } />
            <div className={ removeInputClasses } onClick={ (e) => removeInput(inputKey) }>
                <i className="fa fa-times" ariaHidden="true" />
            </div>
        </div>
    );
};

export default Input;
