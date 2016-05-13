import React from 'react';
import classnames from 'classnames';

const Input = ({ handleChange, value, placeholder, removeInput, inputIndex }) => {

    let removeInputClasses = classnames("two columns", {
        "hide": inputIndex === 0
    });

    return (
        <div className="row">
            <input
                className="ten columns"
                value={ value }
                onChange={ handleChange }
                type="text"
                placeholder={ placeholder } />
            <button className={ removeInputClasses } onClick={ (e) => removeInput(inputIndex) }>
                rm { inputIndex }
            </button>
        </div>
    );
};

export default Input;
