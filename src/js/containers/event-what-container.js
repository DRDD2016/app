import React from 'react';
import { connect } from 'react-redux';
import EventWhat from '../components/event-what.jsx';

const mapStateToProps = (state) => {
    return {
        eventWhatNumber: state.eventWhat.id,
        eventWhatArray: state.eventWhat.data
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhat: (count, event) => {
            dispatch({
                type: "SET_EVENT_WHAT",
                data: event.target.value,
                count: whatCount++
            });
        }
    };
};

const EventWhatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhat);

export default EventWhatContainer;
