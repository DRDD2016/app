import React from 'react';
import store from './app.jsx';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth () {
            if (document.cookie.indexOf("sparkToken") === -1) {

                this.context.router.push('/');
            }
        }

        render () {
            return (
                <div>
                    <Component {...this.props}/>
                </div>
            );
        }
    }

    AuthenticatedComponent.contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    return AuthenticatedComponent;
}
