import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from './confirmation/confirm-event-what.jsx';
import ConfirmEventWhere from './confirmation/confirm-event-where.jsx';
import ConfirmEventWhen from './confirmation/confirm-event-when.jsx';
import formatDate from '../../lib/formatDate.js';
import { isPoll } from '../../lib/create-event-helpers.js';


const EventConfirm = ({ data, saveEvent }) => {

    let SaveButtonIsHidden = data.eventWhen[0].date === "" && isPoll(data) === false;

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


    let saveEventButton = classnames("twelve columns", {
        "display-none": SaveButtonIsHidden
    });

    let eventWhenInfo = classnames("twelve columns required-field-text", {
        "display-none": !SaveButtonIsHidden
    });

    return (
        <div className="create-event-confirm">
            <h4>What?</h4>
            <ConfirmEventWhat eventWhat={ data.eventWhat } />

            <h4>Where?</h4>
            <ConfirmEventWhere eventWhere={ data.eventWhere } />

            <h4>When?</h4>

            <div className={ eventWhenInfo }>

                You need to enter a date before saving this event.
                <Link to='/create-event/when'>
                <button className="twelve columns">
                Add a Date
                </button>
                </Link>

            </div>

            <ConfirmEventWhen eventWhen={ data.eventWhen } />

            <h4>Invited</h4>
            <div className="ui very relaxed horizontal list">
                { invitedFriends }
            </div>

            <button className={ saveEventButton } onClick={ (e) => saveEvent(data) }>
                Save event
            </button>
        </div>
    );
};

export default EventConfirm;
