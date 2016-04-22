import React from 'react';
import { connect } from 'react-redux';
import { setEventWhere } from '../actions/create-event.js';
import EventWhere from '../components/event-where.jsx';

const mapStateToProps = (state) => {
    let data = state.createEvent.eventWhere;
    return {
        eventWhereData: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhere: (inputKey, placeName, placeAddress) => {

            let address = {
                placeName: placeName,
                placeAddress: placeAddress
            };
            dispatch(setEventWhere(address, inputKey));
        },

        addInput: (nextInputKey) => {
            dispatch({
                type: "ADD_INPUT",
                nextInputKey: nextInputKey,
                eventType: "eventWhere"
            });
        },

        removeInput: () => {
            dispatch({
                type: "REMOVE_INPUT",
                eventType: "eventWhere"
            });
        }
    };
};

const EventWhereContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhere);

export default EventWhereContainer;
