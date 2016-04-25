import React from 'react';
import { connect } from 'react-redux';
import { setEventWhat } from '../actions/create-event.js';
import Invitees from '../components/invitees.jsx';

const mapStateToProps = (state) => {
    let data = state.createEvent.eventWhat;
    return {
        invitees: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //some functions
    };
};


const InviteesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Invitees);

export default InviteesContainer;
