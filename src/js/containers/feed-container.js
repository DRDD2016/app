import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/feed.jsx';
import { getUser } from '../actions/user.js';
import { getNotifications, applyFilter, clearFilter } from '../actions/notifications.js';
import { updateNotification } from '../actions/event.js';
import filterNotifications from '../lib/filterNotifications.js';

const mapStateToProps = (state) => {

    let data = state.notifications.data;
    let isFilter = state.notifications.filter;
    let isShowHosting = state.notifications.showHosting;

    let notifications = filterNotifications(data, isFilter, isShowHosting);

    return {
        user: state.user,
        notifications,
        isFetching: state.notifications.isFetching,
        isFilter,
        isShowHosting
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleUpdateNotification: (index) => {

            dispatch(updateNotification(index));
        },
        displaySome: (filterChoice) => {

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
