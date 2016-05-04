import React from 'react';
import { Link } from 'react-router';

class Feed extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.hydrateState();
        this.props.hydrateFeed();
    }

    render () {

        return (
            <div className="container">
              <div className="row">
                <h4 className="twelve columns">Feed</h4>
              </div>
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
