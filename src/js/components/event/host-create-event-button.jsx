import React from 'react';
import classnames from 'classnames';
import { Link, hashHistory } from 'react-router';

const HostCreateEventButton = ({ hostEventChoices, handleConfirmEvent, eventID }) => {
    let hostHasSelectedEventOptions =
    Object.keys(hostEventChoices).every((categoryName) => {
        return hostEventChoices[categoryName] !== "";
    });

    let classes = classnames("twelve columns button-primary", {
        "display-none": !hostHasSelectedEventOptions
    });

    return (
        <button className={ classes } onClick={ () => { handleConfirmEvent(hostEventChoices, eventID);                 hashHistory.push('/feed'); } }> CONFIRM & SEND INVITES </button>
    );

};

export default HostCreateEventButton;
