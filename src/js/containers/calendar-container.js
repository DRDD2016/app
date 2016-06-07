import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import getEndTime from '../lib/getEndTime.js';
import { getEvent } from '../actions/event.js';


const mapStateToProps = (state) => {
    let filteredData = state.calendar.data.filter((event) => {

        //filter out: date.now > eventtime + 1 day 6 hours
        // if no date,
        if (event.eventWhen[0].date === "") {
            return false;
        } else {
            const end = getEndTime(event.eventWhen[0].date);
            return !isNaN(end) && Date.now() < end;
        }
    });

    return {
        data: filteredData,
        isFetching: state.calendar.isFetching
    };
};

const CalendarContainer = connect(
    mapStateToProps
)(Calendar);

export default CalendarContainer;
