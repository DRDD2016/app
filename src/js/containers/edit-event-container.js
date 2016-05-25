import React from 'react';
import { connect } from 'react-redux';
import EditEvent from '../components/event/edit-event.jsx';
import { setEventWhat, setEventWhere } from '../actions/create-event.js';



const mapStateToProps = (state) => {
    return {
        event: state.event.data,
        eventWhat: state.createEvent.eventWhat,
        eventWhere: state.createEvent.eventWhere,
        eventWhen: state.createEvent.eventWhen
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleEventWhat: (inputKey, event) => {
            dispatch(setEventWhat(event.target.value, inputKey));
        },

        handleEventWhere: (inputKey, placeName, placeAddress) => {

            let address = {
                placeName: placeName,
                placeAddress: placeAddress
            };
            dispatch(setEventWhere(address, inputKey));
        },

        handleDate: (inputKey, event) => {

            dispatch(setEventWhen(event.target.value, inputKey, "date"));
        },

        handleTime: (inputKey, event) => {

            dispatch(setEventWhen(event.target.value, inputKey, "time"));
        }
    };
};

const EditEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEvent);

export default EditEventContainer;
