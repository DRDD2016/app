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
    let calendarIsFiltered = state.calendar.filter;
    let isShowHosting = state.calendar.showHosting;

    let filteredEvents = filterNotifications(futureEvents, calendarIsFiltered, isShowHosting);
    console.log(state.calendar.data);
    return {
        allEvents: data,
        filteredEvents,
        isFetching: state.calendar.isFetching,
        calendarIsFiltered,
        isShowHosting
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        displaySome: (filterChoice) => {

            dispatch(applyFilter(filterChoice));
        },
        displayAll: () => {

            dispatch(clearFilter());
        }
    };
};

const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default CalendarContainer;
