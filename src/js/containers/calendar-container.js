import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import getFutureEvents from '../lib/getFutureEvents.js';
import { getEvent } from '../actions/event.js';


const mapStateToProps = (state) => {

    let filteredData = state.calendar.data.filter(getFutureEvents);
    
    return {
        data: filteredData,
        isFetching: state.calendar.isFetching
    };
};

const CalendarContainer = connect(
    mapStateToProps
)(Calendar);

export default CalendarContainer;
