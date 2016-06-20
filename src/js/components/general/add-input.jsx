import React from 'react';
import classnames from 'classnames';

const AddInput = ({ data, handler }) => {

    let addInputClasses = classnames("twelve columns", {
        "display-none": data.length >= 3
    });

    return (
        <div className="row">
            <button className={ addInputClasses } onClick={ (e) => handler(data.length) }>
                Add an option
            </button>
        </div>
    );
};

export default AddInput;
