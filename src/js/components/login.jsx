import React from 'react';

class Login extends React.Component {

    constructor(props) {

        super(props);
    }

    componentWillMount () {

        if (document.cookie.indexOf("sparkID") !== -1) {

            this.context.router.push('/feed');
            return false;
        }
    }

    render () {

        return (
            <div className="u-full-width">
                <div className="row">

                    <h1 className="twelve rows">Welcome to Spark</h1>
                </div>
                <div className="row">

                    <button className="twelve rows" onClick={ (e) => this.props.login() }>
                        Login with Facebook
                    </button>
                </div>

            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Login;
