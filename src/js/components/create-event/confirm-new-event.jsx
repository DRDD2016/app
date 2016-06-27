import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import ConfirmEventWhat from './confirmation/confirm-event-what.jsx';
import ConfirmEventWhere from './confirmation/confirm-event-where.jsx';
import ConfirmEventWhen from './confirmation/confirm-event-when.jsx';
import formatDate from '../../lib/formatDate.js';
import { isPoll } from '../../lib/create-event-helpers.js';


const ConfirmNewEvent = ({ data, saveEvent }) => {

    let SaveButtonIsHidden = data.eventWhen[0].date === "" && isPoll(data) === false;

    let SaveButtonText = isPoll(data) === true ? "SEND POLL" : "CONFIRM & SEND INVITES";

    const invitedFriends = data.invitees.map((inviteeObject) => {
        return (
            <div key={ inviteeObject.id } className="item">
                <img className="ui avatar image" src={ inviteeObject.photoURL } />
                <div>
                    <p className="header invited-friends">{ inviteeObject.firstName }</p>
                </div>
            </div>
        );
    });


    let saveEventButton = classnames("twelve columns button-primary", {
        "display-none": SaveButtonIsHidden
    });

    let eventWhenInfo = classnames("twelve columns required-field-text", {
        "display-none": !SaveButtonIsHidden
    });

    return (
        <div className="confirm-new-event">
                <p className="confirm-what">What?</p>
                <ConfirmEventWhat eventWhat={ data.eventWhat } />

                <p className="confirm-where">Where?</p>
                <ConfirmEventWhere eventWhere={ data.eventWhere } />

                <p className="confirm-when">When?</p>
                <div className={ eventWhenInfo }>

                    You need to enter a date before saving this event.
                    <Link to='/create-event/when'>
                    <button className="twelve columns">
                    Add a Date
                    </button>
                    </Link>
                </div>

            <ConfirmEventWhen eventWhen={ data.eventWhen } />

            <p className="invited-title">Invited</p>
            <div className="ui very relaxed horizontal list">
                { invitedFriends }
            </div>

            <button className={ saveEventButton } onClick={ (e) => saveEvent(data) }>
                { SaveButtonText }
            </button>
        </div>
    );
};

export default ConfirmNewEvent;
