import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const HostCreateEventButton = ({ hostEventChoices, handleEventConfirmation, eventID }) => {
    let hostHasSelectedEventOptions =
    Object.keys(hostEventChoices).every((categoryName) => {
        return hostEventChoices[categoryName] !== "";
    });

    let classes = classnames("twelve columns", {
        hide: !hostHasSelectedEventOptions
    });

    return (
        <button className={ classes } onClick={ () => handleEventConfirmation(hostEventChoices, eventID) }> Create Event </button>
    );

};

export default HostCreateEventButton;
