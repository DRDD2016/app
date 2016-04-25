import React from 'react';
import { connect } from 'react-redux';
import { getFBFriends } from '../actions/create-event.js';
import Invitees from '../components/invitees.jsx';

const mapStateToProps = (state) => {
    let data = state.createEvent.invitees;
    return {
        invitees: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //some functions
        getFBFriends: () => {
            dispatch(getFBFriends());
        }
    };
};


const InviteesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Invitees);

export default InviteesContainer;
