import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar">
            <a className="nav-button" href="#">
                <div >
                    <i className="photo big icon nav-icon "></i>
                    <label className="menu-label">Albums</label>
                </div>
            </a>

            <Link className="nav-button" to="calendar">
                <div>
                    <i className="calendar big icon nav-icon"></i>
                    <label className="menu-label">Calendar</label>
                </div>
            </Link>

            <Link className="nav-button" to="feed">
                <div >
                    <i className="world big icon nav-icon"></i>
                    <label className="menu-label">Feed</label>
                </div>
            </Link>

            <a className="nav-button" href="#">
                <div >
                    <i className="user big icon nav-icon"></i>
                    <label className="menu-label">Profile</label>
                </div>
            </a>

            <Link className="nav-button" to="create-event">
                <div >
                    <i className="write big icon nav-icon"></i>
                    <label className="menu-label">Create</label>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
