import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const HostCreateEventButton = ({ hostEventChoices, handleConfirmEvent, eventID }) => {
    let hostHasSelectedEventOptions =
    Object.keys(hostEventChoices).every((categoryName) => {
        return hostEventChoices[categoryName] !== "";
    });

    let classes = classnames("twelve columns", {
        "display-none": !hostHasSelectedEventOptions
    });

    return (
        <button className={ classes } onClick={ () => handleConfirmEvent(hostEventChoices, eventID) }> CONFIRM & SEND INVITES </button>
    );

};

export default HostCreateEventButton;
