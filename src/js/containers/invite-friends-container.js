import React from 'react';
import { connect } from 'react-redux';
import { addInvitee, removeInvitee } from '../actions/create-event.js';
import InviteFriends from '../components/invite-friends.jsx';

const mapStateToProps = (state) => {
    let friends = state.createEvent.friends;
    let invitees = state.createEvent.invitees;

    return {
        friends: friends,
        invitees: invitees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleSelected: (id, index) => {
            dispatch(addInvitee(id, index));
        },

        removeSelected: (id, index) => {
            dispatch(removeInvitee(id, index));
        }
    };
};


const InviteFriendsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);

export default InviteFriendsContainer;
