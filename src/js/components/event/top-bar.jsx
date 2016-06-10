import React from 'react';
import { Link } from 'react-router';

const TopBar = ({ eventID, handleEdit, displayCancelModal, isPoll, userIsHost }) => {
    return (
        <div className="event-header row">
            <Link onClick={ () => { handleEdit(this.props.event); } } to={ 'edit/' + eventID }>
                <p className="three columns back-button" > Edit </p>
            </Link>
            <h3 className=" six columns title">Event</h3>
            <p className="three columns cancel-event-button"
               onClick={ displayCancelModal }>
                Cancel
            </p>
        </div>
    );
};

export default TopBar;
