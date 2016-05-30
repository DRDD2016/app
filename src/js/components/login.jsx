import React from 'react';
import { browserHistory } from 'react-router';
import validCookieExists from '../lib/validCookieExists.js';
import Banner from './general/banner.jsx';

class Login extends React.Component {

    constructor (props) {

        super(props);
    }

    componentWillMount () {

        if (validCookieExists()) {

            browserHistory.push('/feed');
            return false;
        }
    }

    render () {

        return (
            <div className="container login">

                <Banner />
                    <div className="row">
                        <h2 className="twelve columns centre">Welcome to Spark</h2>
                    </div>

                    <div className="row">
                        <p className="text-snippet">
                            The easy way to organise parties, events, share pictures and memories with friends, family and groups.
                        </p>
                    </div>

                    <div className="row">
                        <button className="twelve columns facebook" onClick={ (e) => this.props.login() }>
                            Login with Facebook
                        </button>
                    </div>

            </div>
        );
    }
}

export default Login;
