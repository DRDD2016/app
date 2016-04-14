import React from 'react';

const WhatInput = ({ handleEventWhat, value, count }) => (

    <div>
    <input
        key={ count }
        value={ value }
        type="text"
        placeholder="What would you like to do?" />
    </div>
);

export default WhatInput;
