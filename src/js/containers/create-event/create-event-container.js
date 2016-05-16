import React from 'react';
import { connect } from 'react-redux';
import CreateEvent from '../../components/create-event/create-event.jsx';
import { clearCreateEvent } from '../../actions/create-event.js';

const mapStateToProps = (state) => {

    return {
        eventDetails: state.createEvent.eventDetails,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        discardEvent: () => {
            dispatch(clearCreateEvent());
            
        }
    };
};

const CreateEventContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateEvent);

export default CreateEventContainer;
