import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import { applyFilter, clearFilter } from '../actions/calendar.js';
import filterNotifications from '../lib/filterNotifications.js';
import getPastEvents from '../lib/getPastEvents.js';
import { getEvent } from '../actions/event.js';


const mapStateToProps = (state) => {

    let pastEvents = state.calendar.data.filter(getPastEvents);
    let data = state.calendar.data;
    let calendarIsFiltered = state.calendar.filter;
    let isShowHosting = state.calendar.showHosting;

    let filteredEvents = filterNotifications(pastEvents, calendarIsFiltered, isShowHosting);

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


const AlbumsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default AlbumsContainer;
