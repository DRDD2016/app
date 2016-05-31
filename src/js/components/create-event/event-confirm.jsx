import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from './confirmation/confirm-event-what.jsx';
import ConfirmEventWhereorWhen from './confirmation/confirm-event-where-or-when.jsx';
import formatDate from '../../lib/formatDate.js';

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
            <h4>What?</h4>
            <ConfirmEventWhat
                eventWhat = { data.eventWhat }
            />
            <h4>Where?</h4>
            <ConfirmEventWhereorWhen
                eventWhereorWhen = { data.eventWhere }
            />
            <h4>When?</h4>
            <ConfirmEventWhereorWhen
                    eventWhereorWhen = { data.eventWhen }
                />
            <h4>Invited</h4>
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
