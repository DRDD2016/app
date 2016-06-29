import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

const PollButton = ({ poll, handlePollConfirmation, eventID, voteButtonText }) => {

    let userHasCompletedPoll = Object.keys(poll).map((categoryName, i) => {

        return poll[categoryName].some((value) => {

            return value === true;
        });
    }).every((category) => {

        return category === true;
    });

    let classes = classnames("twelve columns button-primary", {
        'display-none': !userHasCompletedPoll,
    });

    function handleSelection (poll, eventID) {
        handlePollConfirmation(poll, eventID);
        hashHistory.push('/feed');
    }

    return (

        <button onClick={ () => handleSelection(poll, eventID) } className={ classes }> { voteButtonText }</button>
    );
};

export default PollButton;
