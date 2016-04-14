import React from 'react';
import WhatInput from './create-event/what-input.jsx';

var array = ['sohil','sohil2', 'sohil3'];

class EventWhat extends React.Component {


    render () {
        let inputs = array.map((elem,i) => {
            return (<WhatInput key={i} value={elem}/>);
        });

        return (
            <div>
                {inputs}
            </div>
        );
    }
}



    // take the number of what items
    // map that number onto the what input to return that number of input fields


export default EventWhat;
