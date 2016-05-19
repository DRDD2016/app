import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from '../general/confirm-event-what.jsx';
import ConfirmEventWhereorWhen from '../general/confirm-event-where-or-when.jsx';

const EventConfirm = ({ data, saveEvent }) => {

    const invitedFriends = data.invitees.map((inviteeObject) => {
        return (
            <div key={ inviteeObject.id } className="item">
                <img className="ui avatar image" src={ inviteeObject.photoURL } />
                <div className="">
                    <a className="header">{ inviteeObject.firstName }</a>
                </div>
            </div>

        );
    });
    return (
        <div>

            <ConfirmEventWhat
                eventWhat = { data.eventWhat }
            />

            <ConfirmEventWhereorWhen
                eventWhereorWhen = { data.eventWhere }
            />

            <ConfirmEventWhereorWhen
                    eventWhereorWhen = { data.eventWhen }
                />

            <div className="ui very relaxed horizontal list">
                {invitedFriends}
            </div>

            <button className="twelve columns" onClick={ (e) => saveEvent(data) }>
                Save event
            </button>
        </div>
    );
};

export default EventConfirm;
