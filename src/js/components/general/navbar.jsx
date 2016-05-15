import React from 'react';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbutton">
                <label>Albums</label>
            </div>
            <div className="navbutton">
                <i className="fa fa-calendar-o" ariaHidden="true"></i>
                <label>Calendar</label>
            </div>
            <div className="navbutton">
                <label>Feed</label>
            </div>
            <div className="navbutton">
                <label>Profile</label>
            </div>
            <div className="navbutton">
                <label>Create</label>
            </div>
        </div>
    );
};

export default Navbar;
