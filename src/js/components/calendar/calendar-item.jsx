import React from 'react';
import { Link } from 'react-router';
import formatDate from '../../lib/formatDate.js';
import classnames from 'classnames';

/***
CalendarItem is used in calendar and album views.  Plays equivalent role to Notification.jsx for feed view
***/

const CalendarItem = ({ eventName, eventWhat, eventWhere, eventWhen, eventID, coverPhoto, RSVPstatus, userIsHost }) => {

    let iconClasses = classnames('fa', {
        'fa-check-circle': userIsHost || RSVPstatus === 'going',
        'fa-question-circle': !userIsHost  && RSVPstatus === 'maybe',
        'fa-times-circle': !userIsHost  && RSVPstatus === 'notGoing',
        'fa-exclamation-circle': !userIsHost  && RSVPstatus === null
    });

    return (
        <div className="calendar-item">
            <Link to={ 'event/' + eventID }>
                <div className="row">

                    <div className="seven columns">
                        <span>
                            <i className={ iconClasses } ariaHidden="true" />
                        </span>
                        <p className="calendar-title">{ eventName }
                        </p>
                        <div>
                        </div>
                        <label className="date">{ ` ${formatDate(eventWhen[0].date)}` }</label>
                        <label className="placeName">{ ` ${eventWhere[0].placeName} ${eventWhere[0].placeAddress}` }</label>
                    </div>

                    <img className="five columns image" src={ coverPhoto ? coverPhoto.photoURL : './placeholder.png' } alt="Latest photo" />
                </div>
            </Link>
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </div>
    );
};

export default CalendarItem;
