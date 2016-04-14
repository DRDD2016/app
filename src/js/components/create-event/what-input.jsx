import React from 'react';

const WhatInput = ({ onChange, value }) => {
    return (
        <div>
            <input
                defaultValue={ value }
                onChange={ onChange }
                type="text"
                placeholder="What would you like to do?" />
        </div>
    );
};

export default WhatInput;
