import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import axios from 'axios';

class Invitees extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log(this.props,'mount------');
        //dispatch action here.
        this.props.getFBFriends();
    }
    render () {
        var friends = this.props.invitees.map((object) => {
            return (
                <li>
                    {object.firstName} {object.lastName}
                    <img className="profile-photo" src={object.photoURL} />
                </li>
            )
        })
        console.log(this.props.invitees,'-------');
        return (
            <div>
                <h3> Invite your Friends! </h3>
                <ul>
                    {friends}
                </ul>


                <button>
                    <Link to='/create-event/confirm'>Next</Link>
                </button>
            </div>
        );
    }
}


export default Invitees;
