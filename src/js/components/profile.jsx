import React from 'react';

const Profile = ({ user, handleLogOut }) => {
    console.log(user);
    return (
        <div className=" profile-page row">

        <div className="event-header row">
            <h3 className=" twelve columns title">Profile</h3>
        </div>

        <h2 className="user-name"> { user.firstName + ' ' + user.lastName } </h2>

        <div className="twelve columns">
        <img className="ui profile-page-photo circular image" src={ user.photoURL  } alt="Host photo" />
        </div>

        <button className="logout-button" onClick={ handleLogOut } >
            Log Out
        </button>

        </div>

    );
};

export default Profile;
