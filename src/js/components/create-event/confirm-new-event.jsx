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
                <div className="content">
                    <div className="header">
                        { inviteeObject.firstName }
                    </div>
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
            <ConfirmEventWhat eventWhat={ data.eventWhat } />
            <br/>
            <ConfirmEventWhere eventWhere={ data.eventWhere } />
            <br/>
            <div className={ eventWhenInfo }>

                You need to enter a date before saving this event.
                <Link to='/create-event/when'>
                    <button className="twelve columns">
                        Add a Date
                    </button>
                </Link>
                <br/>
            </div>

            <ConfirmEventWhen eventWhen={ data.eventWhen } />
            <br />
            <p className="invited-title">Invited friends</p>
            <div className="ui big horizontal list">
                { invitedFriends }
            </div>

            <button className={ saveEventButton } onClick={ (e) => saveEvent(data) }>
                { SaveButtonText }
            </button>
        </div>
    );
};

export default ConfirmNewEvent;
