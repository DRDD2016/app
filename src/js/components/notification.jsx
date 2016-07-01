import React from 'react';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import formatDate from '../lib/formatDate.js';
import classnames from 'classnames';
import moment from 'moment';

moment.locale('en-gb');

const Notification = ({ eventID, timestamp, firstName, lastName, photoURL, eventWhat, eventWhere, eventWhen, userIsHost, isPoll, subjectID, hostID, index, handleUpdateNotification, viewed, inviteesNumber, eventName, hasEdited }) => {

    let userIsSubject = subjectID === getUserID();

    let viewedNotification = classnames("row notification", {
        "viewed-notification": viewed === true
    });
// ADD THE OnClick button to Link! --<
    return (
        <div className={ viewedNotification }>
            <Link onClick={ () => handleUpdateNotification(index) } to={ 'event/' + eventID } >
                <div className="three columns">
                <img className=" ui profile-photo circular image" src={ photoURL } alt="Host photo" />
                </div>
                <div className="six columns notification-middle-column">
                    <p className="timestamp"> { moment(timestamp).startOf().fromNow() } </p>
                    <p className="subject-name">
                        { userIsSubject && " You"}
                        { !userIsSubject && firstName + " " + lastName }
                    <span>
                        { userIsSubject && isPoll && " have created a poll " }
                        { userIsSubject && !isPoll && !hasEdited && " have created an event " }
                        { userIsSubject && !isPoll && hasEdited && " have edited an event" }

                        { !userIsSubject && userIsHost && isPoll && " has voted on your poll" }
                        { !userIsSubject && userIsHost && !isPoll && " has responded to your event" }

                        { !userIsSubject && !userIsHost && isPoll && " wants you to vote on their poll" }
                        { !userIsSubject && !userIsHost && !isPoll && !hasEdited && " has invited you to their event" }
                        { !userIsSubject && !userIsHost && !isPoll && hasEdited && " has edited an event" }

                    </span>
                    </p>
                    <p className="event-name" >
                        { eventName }
                    </p>

                    <p className="number-of-invites">
                        <span>
                            { userIsSubject && userIsHost && " invitation sent to " + inviteesNumber + " friends" }
                        </span>
                    </p>
                </div>

                <div className="three columns notification-right-column">
                    <label className="date">
                        {
                            (eventWhen.length > 1 && "VOTE") ||
                            (eventWhen.length === 1 && eventWhen[0].date === "" && "TBC") ||
                            formatDate(eventWhen[0].date).toUpperCase()
                        }
                    </label>
                    <label className="placeName">
                        {
                            (eventWhere.length > 1 && "VOTE") ||
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
