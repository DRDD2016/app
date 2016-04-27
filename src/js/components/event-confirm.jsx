import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from './create-event/confirm-event-what.jsx';
import ConfirmEventWhereorWhen from './create-event/confirm-event-where-or-when.jsx';

const EventConfirm = ({ data, eventDetails, eventWhat, eventWhere, eventWhen, invitees, saveEvent }) => {

    const invitedFriends = invitees.map((inviteeObject) => {
        return (
            <div key={ inviteeObject.id }className="item">
                <img className="ui avatar image" src={inviteeObject.photoURL} />
                <div className="content">
                    <a className="header">{inviteeObject.firstName}</a>
                </div>
            </div>

        );
    });
    return (
        <div>
            <h2>Confirm</h2>

            <div className="ui list">
                <div className="item">
                    <i className="remove bookmark icon"></i>
                    <div className="content">
                        {eventDetails.eventName}
                    </div>
                </div>
                <div className="item">
                    <i className="sidebar icon"></i>
                    <div className="content">
                        {eventDetails.eventDescription}
                    </div>
                </div>
            </div>

            <ConfirmEventWhat
                eventWhat = {eventWhat}
            />

            <ConfirmEventWhereorWhen
                eventWhereorWhen = {eventWhere}
            />

            <ConfirmEventWhereorWhen
                    eventWhereorWhen = {eventWhen}
                />

            <div className="ui very relaxed horizontal list">
                {invitedFriends}
            </div>



            <button onClick={ (e) => saveEvent(data) }>
                Save event
            </button>
        </div>
    );
};

export default EventConfirm;
