import React from 'react';

class Feed extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.hydrateState();
    }

    render () {

        return (
            <div>
                <h1>This is the Feed Container</h1>
            </div>
        );
    }
}

export default Feed;
