import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from './confirmation/confirm-event-what.jsx';
import ConfirmEventWhere from './confirmation/confirm-event-where.jsx';
import ConfirmEventWhen from './confirmation/confirm-event-when.jsx';
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
        <div className="create-event-confirm">
            <h4>What?</h4>
            <ConfirmEventWhat eventWhat={ data.eventWhat } />

            <h4>Where?</h4>
            <ConfirmEventWhere eventWhere={ data.eventWhere } />

            <h4>When?</h4>
            <ConfirmEventWhen eventWhen={ data.eventWhen } />

            <h4>Invited</h4>
            <div className="ui very relaxed horizontal list">
                { invitedFriends }
            </div>

            <button className="twelve columns" onClick={ (e) => saveEvent(data) }>
                Save event
            </button>
        </div>
    );
};

export default EventConfirm;
