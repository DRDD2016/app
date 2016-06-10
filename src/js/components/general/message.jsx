import React from 'react';

const Message = ({ text }) => {
    return  (

        <div className="row">
            <div className="message offline ten columns offset-by-one">
                Oops! No internet connection
            </div>
        </div>
    );
};

export default Message;
