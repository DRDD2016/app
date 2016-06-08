import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const Navbar = ({ currentLocation }) => {
    console.log(currentLocation);

    let navbarClasses = classnames("navbar", {
        "display-none": currentLocation === "/"
    });

    let albumsClasses = classnames("nav-button", {
        "selected": currentLocation === "/albums"
    });

    let calendarClasses = classnames("nav-button", {
        "selected": currentLocation === "/calendar"
    });

    let feedClasses = classnames("nav-button", {
        "selected": currentLocation === "/feed"
    });

    let profileClasses = classnames("nav-button", {
        "selected": currentLocation === "/profile"
    });

    let createEventClasses = classnames("nav-button", {
        "selected": currentLocation === "/create-event"
    });


    return (
        <div className={ navbarClasses }>
            <Link className={ albumsClasses } to="albums">
                <div >
                    <i className="fa fa-camera nav-icon "></i>
                    <label className="menu-label">Albums</label>
                </div>
            </Link>

            <Link className={ calendarClasses } to="calendar">
                <div>
                    <i className="fa fa-calendar nav-icon"></i>
                    <label className="menu-label">Calendar</label>
                </div>
            </Link>

            <Link className={ feedClasses } to="feed">
                <div >
                    <i className="fa fa-globe nav-icon"></i>
                    <label className="menu-label">Feed</label>
                </div>
            </Link>

            <Link className={ profileClasses } to="profile">
                <div >
                    <i className="fa fa-user nav-icon"></i>
                    <label className="menu-label">Profile</label>
                </div>
            </Link>

            <Link className={ createEventClasses } to="create-event">
                <div >
                    <i className="fa fa-pencil nav-icon"></i>
                    <label className="menu-label">Create</label>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
