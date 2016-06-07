import React from 'react';
import { Link } from 'react-router';
import formatDate from '../../lib/formatDate.js';

const CalendarItem = ({ eventName, eventWhat, eventWhere, eventWhen, eventID }) => {

    return (
        <Link to={ 'event/' + eventID }>
            <div className="row">
                <div className="nine columns">

                    <h5>{ eventName }</h5>
                </div>
                <div className="three columns">

                    <label className="eventWhere-placeName">{ eventWhere[0].placeName }</label>
                    <label className="eventWhere-placeAddress">{ eventWhere[0].placeAddress }</label>
                    <label className="eventWhen-date">{ formatDate(eventWhen[0].date) }</label>
                    <label className="eventWhen-time">{ eventWhen[0].time }</label>
                </div>
                <div className="row">
                    <hr className="twelve columns" />
                </div>
            </div>
        </Link>
    );
};

export default CalendarItem;
