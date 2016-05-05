import React from 'react';
import Notification from './notification.jsx';
import { Link } from 'react-router';

class Feed extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount () {
        this.props.hydrateState();
        this.props.hydrateFeed();
    }

    render () {

        let notifications = this.props.notifications.map((data, i) => {

            return (
                <Notification
                    key={ i }
                    eventID={ data.eventID }
                    timestamp={ data.timestamp }
                    isPoll={ data.isPoll }
                    hostName={ data.hostName }
                    hostPhotoURL={ data.hostPhotoURL }
                    eventWhat={ data.eventWhat }
                    eventWhere={ data.eventWhere }
                    eventWhen={ data.eventWhen } />
            );
        });

        return (
            <div className="container">
              <div className="row">
                <h4 className="twelve columns">Feed</h4>
              </div>
              { notifications }
              <div className="row">
                <button className="twelve columns">
                  <Link to="/create-event">
                    Create new event
                  </Link>
                </button>
              </div>

            </div>
        );
    }
}

export default Feed;
