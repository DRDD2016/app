import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.jsx';
import getPastEvents from '../lib/getPastEvents.js';
import { getEvent } from '../actions/event.js';


const mapStateToProps = (state) => {

    let filteredData = state.calendar.data.filter(getPastEvents);

    return {
        data: filteredData,
        isFetching: state.calendar.isFetching
    };
};

const AlbumsContainer = connect(
    mapStateToProps
)(Calendar);

export default AlbumsContainer;
