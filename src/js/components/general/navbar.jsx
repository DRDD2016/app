import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar">
            <a className="navbutton" href="#">
                <div >
                    <label>Albums</label>
                </div>
            </a>

            <Link className="navbutton" to="calendar">
                <div >
                    <i className="fa fa-calendar-o" ariaHidden="true"></i>
                    <label>Calendar</label>
                </div>
            </Link>

            <Link className="navbutton" to="feed">
                <div >
                    <label>Feed</label>
                </div>
            </Link>

            <a className="navbutton" href="#">
                <div >
                    <label>Profile</label>
                </div>
            </a>

            <Link className="navbutton" to="create-event">
                <div >
                    <label>Create</label>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
