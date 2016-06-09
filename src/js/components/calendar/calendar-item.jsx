import React from 'react';
import { Link } from 'react-router';
import formatDate from '../../lib/formatDate.js';

const CalendarItem = ({ eventName, eventWhat, eventWhere, eventWhen, eventID, coverPhoto }) => {

    return (
        <div className="calendar-item">
            <Link to={ 'event/' + eventID }>
                <div className="row">

                    <div className="eight columns">
                        <h5>{ eventName }</h5>
                        <label className="date">{ ` ${formatDate(eventWhen[0].date)}` }</label>
                        <label className="placeName">{ ` ${eventWhere[0].placeName} ${eventWhere[0].placeAddress}` }</label>
                    </div>

                    <img className="four columns ui profile-photo image" src={ coverPhoto ? coverPhoto.photoURL : 'http://community.childlife.org/media/qxbrwxqy.jpg' } alt="Latest photo" />
                </div>
            </Link>
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </div>
    );
};

export default CalendarItem;
