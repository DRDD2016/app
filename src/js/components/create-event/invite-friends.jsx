import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import axios from 'axios';

class InviteFriends extends React.Component {
    constructor (props){
        super(props);
    }

    render () {
        var friends = this.props.friends.map((friendData, index) => {
            return (
                  <div key={ index } className="item">
                        <div className="right floated content">
                            <div onClick={ (e) => this.props.handleSelected(friendData, index) } className="ui button">Invite</div>
                        </div>
                        <img className="ui avatar image" src={ friendData.photoURL } />
                        <div className="content">
                            { friendData.firstName } { friendData.lastName }
                        </div>
                  </div>
            );
        });

        var invitees = this.props.invitees.map((inviteeData, index) => {
            if (!inviteeData) {
                return (
                    <div>
                        <p> Add your Friends to see them here </p>
                    </div>
                );
            } else {
                return (
                    <div onClick={ (e) => this.props.removeSelected(inviteeData, index) } key={inviteeData.id} className=" blue ui image label">
                          <img src={ inviteeData.photoURL} />
                          { inviteeData.firstName }
                          <i className="delete icon"></i>
                    </div>

                );
            }
        });
        return (
            <div>
                <h3> Invite your Friends! </h3>
                <div>
                    {invitees}
                </div>

                <div className="ui middle aligned divided list">
                    {friends}
                </div>



                <button>
                    <Link to='/create-event/confirm'>Next</Link>
                </button>
            </div>
        );
    }
}


export default InviteFriends;
