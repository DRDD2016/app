import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import getUserID from '../lib/getUserID.js';
import getEndTime from '../lib/getEndTime.js';
import { getEvent } from '../actions/event.js';



const mapStateToProps = (state) => {

    let filteredData = state.calendar.data.filter((event) => {

        const end = getEndTime(event.eventWhen[0].date);
        return true;
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
