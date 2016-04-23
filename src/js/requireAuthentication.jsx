import React from 'react';
import store from './index.jsx';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth () {
            if (document.cookie.indexOf("sparkID") === -1) {

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
