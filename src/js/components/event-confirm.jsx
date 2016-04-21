import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const EventConfirm = ({ data, saveEvent, login }) => {

    return (
        <div>
            <h2>Confirm</h2>
            <button onClick={ (e) => saveEvent(data) }>
                Save event
            </button>

            <button onClick={ (e) => login() }>
                LOGIN
            </button>
            <a href="/bell/door" >Sohil  </a>
        </div>
    );
};

export default EventConfirm;
