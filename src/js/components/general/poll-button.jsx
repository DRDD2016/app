import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const PollButton = ({ poll, handlePollConfirmation, eventID }) => {

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

        <button onClick={ () => handlePollConfirmation(poll, eventID) } className={ classes }>Cast vote</button>
    );
};

export default PollButton;
