import React from 'react';
import { Link } from 'react-router';
import getUserID from '../lib/getUserID.js';
import formatDate from '../lib/formatDate.js';

const Notification = ({ eventID, timestamp, firstName, lastName, photoURL, eventWhat, eventWhere, eventWhen, userIsHost, isPoll, subjectID, hostID }) => {

    let userIsSubject = subjectID === getUserID();
    return (
        <Link to={ 'event/' + eventID } >
            <div className="row notification">
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
                </div>
                <div className="three columns event-type">
                    <label className="eventWhere-placeName">
                        { eventWhere.length === 1 ? eventWhere[0].placeName : "Vote" }
                    </label>
                    <label className="eventWhen-date">
                        { eventWhen.length === 1 ? formatDate(eventWhen[0].date) : "Vote" }
                    </label>
                    <label className="eventWhen-time">
                        { eventWhen.length === 1 ? eventWhen[0].time : "Vote" }
                    </label>
                </div>
            </div>
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </Link>
    );
};

export default Notification;
