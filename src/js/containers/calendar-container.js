import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent } from '../actions/event.js';

function getEndTime (date) {
    // next day + 6 hours
    let result = moment(date).add(1, 'days');
    console.log("NEXT DAY", result);
}

const mapStateToProps = (state) => {

    let filteredData = state.calendar.data.filter((event) => {

        getEndTime(event.eventWhen[0].date);
    });

    return {
        data: state.calendar.data,
        isFetching: state.calendar.isFetching
    };
};

const CalendarContainer = connect(
    mapStateToProps
)(Calendar);

export default CalendarContainer;
