import React from 'react';
import classnames from 'classnames';

const PollButton = ({ poll }) => {

    let userHasCompletedPoll = Object.keys(poll).map((categoryName, i) => {

        return poll[categoryName].some((value) => {

            return value === true;
        });
    }).every((category) => {

        return category === true;
    });

    let classes = classnames({
        'hide': !userHasCompletedPoll
    });

    return (
        <button className={ classes }>Cast vote</button>
    );
};

export default PollButton;
