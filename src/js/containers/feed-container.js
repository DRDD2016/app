import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/feed.jsx';
import { getUser } from '../actions/user.js';
import { getNotifications, applyFilter } from '../actions/notifications.js';
import { updateNotification } from '../actions/event.js';
import filterNotifications from '../lib/filterNotifications.js';

const mapStateToProps = (state) => {



    return {
        user: state.user,
        notifications: state.notifications.data,
        isFetching: state.notifications.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleUpdateNotification: (index) => {

            dispatch(updateNotification(index));
        },
        displayFilters: (filterChoice) => {

            dispatch(applyFilter(filterChoice));
        },
        displayAll: () => {

            dispatch(clearFilter());
        }
    };
};


const FeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

export default FeedContainer;
