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
            <div className="">
                <div className="">

                    <h1 className="">Welcome to Spark</h1>
                </div>
                <div className="">

                    <button className="" onClick={ (e) => this.props.login() }>
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
