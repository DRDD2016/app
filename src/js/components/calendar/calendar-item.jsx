import React from 'react';
import { Link } from 'react-router';
import formatDate from '../../lib/formatDate.js';

const CalendarItem = ({ eventName, eventWhat, eventWhere, eventWhen, eventID, hostPhotoURL }) => {

    return (
        <div>
            <Link to={ 'event/' + eventID }>
                <div className="row">
                    <img className="three columns ui profile-photo circular image" src={ hostPhotoURL } alt="Host photo" />

                    <div className="five columns">
                        <h5>{ eventName }</h5>
                        <h6 className="eventWhen-date">{ ` ${formatDate(eventWhen[0].date)}` }</h6>
                    </div>

                    <div className="four columns">
                        <label className="eventWhere-placeName">{ ` ${eventWhere[0].placeName} ${eventWhere[0].placeAddress}` }</label>
                    </div>
                </div>
            </Link>
            <div className="row">
                <hr className="twelve columns" />
            </div>
        </div>
    );
};

export default CalendarItem;
