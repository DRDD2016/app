import React from 'react';
import { connect } from 'react-redux';
import { setEventWhere, addInput, removeInput } from '../../actions/create-event.js';
import EventWhere from '../../components/create-event/event-where.jsx';

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
                placeAddress: placeAddress || ""
            };
            dispatch(setEventWhere(address, inputKey));
        },

        addInput: (nextInputKey) => {
            dispatch(addInput(nextInputKey, "eventWhere"));
        },

        removeInput: (lastInputKey) => {
            dispatch(removeInput(lastInputKey, "eventWhere"));
        }
    };
};

const EventWhereContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventWhere);

export default EventWhereContainer;
