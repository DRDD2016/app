import React from 'react';

const Input = ({ onChange, value, placeholder }) => {
    return (
        <div className="">
            <input
                defaultValue={ value }
                onChange={ onChange }
                type="text"
                placeholder={ placeholder } />
        </div>
    );
};

export default Input;
