import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import getUserID from '../lib/getUserID.js';
import { getEvent } from '../actions/event.js';

const mapStateToProps = (state) => {

    return {
        data: state.calendar.data,
        isFetching: state.calendar.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        // missing the eventID!!!!
        fetchEvent: () => {
            console.log("We need the eventID");
            // dispatch(getEvent());
        }
    };
};

const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default CalendarContainer;
