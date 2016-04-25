import React from 'react';
import { Link } from 'react-router';

class Feed extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log("hydrateState");
        this.props.hydrateState();
    }

    render () {

        return (
            <div>
                <h4>Feed</h4>
                <button>
                    <Link to="/create-event">
                        Create new event
                    </Link>
                </button>
            </div>
        );
    }
}

export default Feed;
