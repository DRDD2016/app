import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import axios from 'axios';

class Invitees extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
        //dispatch action here.
        this.props.getFBFriends();
    }
    render () {
        return (
            <div>
                <h3> Invite your Friends! </h3>
            </div>
        );
    }
}


export default Invitees;
