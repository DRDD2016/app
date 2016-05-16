import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar">
            <a className="navbutton" href="#">
                <div >
                    <i className="menu-icon photo big icon "></i>
                    <label className="menu-label">Albums</label>

                </div>
            </a>

            <Link className="navbutton" to="calendar">
                <div>
                    <i className="calendar big icon menu-icon"></i>
                    <label className="menu-label">Calendar</label>
                </div>
            </Link>

            <Link className="navbutton" to="feed">
                <div >
                    <i className="world big icon menu-icon"></i>
                    <label className="menu-label">Feed</label>

                </div>
            </Link>

            <a className="navbutton" href="#">
                <div >
                    <i className="user big icon menu-icon"></i>
                    <label className="menu-label">Profile</label>

                </div>
            </a>

            <Link className="navbutton" to="create-event">
                <div >
                    <i className="write big icon menu-icon"></i>
                    <label className="menu-label">Create</label>

                </div>
            </Link>
        </div>
    );
};

export default Navbar;
