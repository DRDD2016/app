import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import { applyFilter, clearFilter } from '../actions/calendar.js';
import filterNotifications from '../lib/filterNotifications.js';
import getFutureEvents from '../lib/getFutureEvents.js';
import { getEvent } from '../actions/event.js';


const mapStateToProps = (state) => {

    let futureEvents = state.calendar.data.filter(getFutureEvents);
    let data = state.calendar.data;
    let isFilter = state.calendar.filter;
    let isShowHosting = state.calendar.showHosting;

    let filteredEvents = filterNotifications(futureEvents, isFilter, isShowHosting);
    
    return {
        data: filteredEvents,
        isFetching: state.calendar.isFetching,
        isFilter,
        isShowHosting
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        displaySome: (filterChoice) => {
            console.log("filtering");
            dispatch(applyFilter(filterChoice));
        },
        displayAll: () => {
            console.log("displaying all");
            dispatch(clearFilter());
        }
    };
};

const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default CalendarContainer;
