import React from 'react';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import formatDate from '../lib/formatDate.js';
import classnames from 'classnames';
import moment from 'moment';

moment.locale('en-gb');

const Notification = ({ eventID, timestamp, firstName, lastName, photoURL, eventWhat, eventWhere, eventWhen, userIsHost, isPoll, subjectID, hostID, index, handleUpdateNotification, viewed, inviteesNumber, eventName }) => {

    let userIsSubject = subjectID === getUserID();

    let viewedNotification = classnames("row notification", {
        "viewed-notification": viewed === true
    });
    return (
        <div className={ viewedNotification }>
            <Link to={ 'event/' + eventID } onClick={ (e) => { handleUpdateNotification(index); } } >
                <img className="three columns ui profile-photo circular image" src={ photoURL } alt="Host photo" />
                <div className="six columns">
                    <p className="timestamp"> { moment(timestamp).startOf().fromNow() } </p>
                    <p className="subject-name">
                        { userIsSubject && " You"}
                        { !userIsSubject && firstName + " " + lastName }
                    <span>
                        { userIsSubject && isPoll && " have created a poll " }
                        { userIsSubject && !isPoll && " have created an event " }

                        { !userIsSubject && userIsHost && isPoll && " has voted on your poll" }
                        { !userIsSubject && userIsHost && !isPoll && " has responded to your event" }

                        { !userIsSubject && !userIsHost && isPoll && " wants you to vote on their poll" }
                        { !userIsSubject && !userIsHost && !isPoll && " has invited you to their event" }
                    </span>
                    </p>
                    <p className="event-name" >
                        { eventName }
                    </p>

                    <p className="subject-name">
                        <span>
                        { userIsSubject && userIsHost && " invitation sent to " + inviteesNumber + " friends" }
                        </span>
                    </p>
                </div>

                <div className="three columns">
                    <label className="date">
                        {
                            (eventWhen.length > 1 && "Vote") ||
                            (eventWhen.length === 1 && eventWhen[0].date === "" && "TBC") ||
                            formatDate(eventWhen[0].date)
                        }
                    </label>
                    <label className="placeName">
                        {
                            (eventWhere.length > 1 && "Vote") ||
                            (eventWhere.length === 1 && eventWhere[0].placeName === "" && "TBC") ||
                            eventWhere[0].placeName
                        }
                    </label>
                </div>
            </Link>

        </div>
    );
};

export default Notification;
