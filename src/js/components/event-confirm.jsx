import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from './create-event/ConfirmEventWhat.jsx';
import ConfirmEventWhereorWhen from './create-event/ConfirmEventWhereorWhen.jsx';

const EventConfirm = ({ data, eventDetails, eventWhat, eventWhere, eventWhen, invitees, saveEvent }) => {

    return (
        <div>
            <h2>Confirm</h2>

            <ul>
                <li> {eventDetails.eventName} </li>
                <li> {eventDetails.description} </li>
            </ul>

            <ConfirmEventWhat
                eventWhat = {eventWhat}
            />

            <ConfirmEventWhereorWhen
                eventWhereorWhen = {eventWhere}
            />

            <ConfirmEventWhereorWhen
                    eventWhereorWhen = {eventWhen}
                />
            <button onClick={ (e) => saveEvent(data) }>
                Save event
            </button>
        </div>
    );
};

export default EventConfirm;
