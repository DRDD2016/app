import React from 'react';
import { connect } from 'react-redux';
import EditEvent from '../components/event/edit-event.jsx';
import { setEventDetails, setEventWhat, setEventWhere, setEventWhen } from '../actions/create-event.js';
import { saveEditedEvent } from '../actions/event.js';



const mapStateToProps = (state) => {
    return {
        event: state.event.data,
        eventDetails: state.createEvent.eventDetails,
        eventWhat: state.createEvent.eventWhat,
        eventWhere: state.createEvent.eventWhere,
        eventWhen: state.createEvent.eventWhen
    };
};


const mapDispatchToProps = (dispatch) => {
    return {

        handleChange: (inputType, event) => {

            dispatch(setEventDetails(event.target.value, inputType));
        },

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
        },

        handleSaveEditedEvent: (eventName, eventDescription, eventNote, eventWhat, eventWhere, eventWhen, eventID) => {

            dispatch(saveEditedEvent(eventName, eventDescription, eventNote, [eventWhat], [eventWhere], [eventWhen], eventID));
        }
    };
};

const EditEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEvent);

export default EditEventContainer;
