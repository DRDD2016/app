import React from 'react';
import { connect } from 'react-redux';
import { getFBFriends, addInvitee } from '../actions/create-event.js';
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
        //some functions
        getFBFriends: () => {
            dispatch(getFBFriends());
        },

        handleSelected: (id, index) => {
            dispatch(addInvitee(id, index));
        },

        removeSelected: (id, index) => {
            console.log(id, index, '--------');
            // dispatch(removeInvitee(id, index));
        }
    };
};


const InviteFriendsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InviteFriends);

export default InviteFriendsContainer;
