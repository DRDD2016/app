import React from 'react';
import { browserHistory } from 'react-router';
import validCookieExists from './lib/validCookieExists.js';

export function requireAuthentication (Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {

            if (!validCookieExists()) {

                browserHistory.push('/');
                return false;
            } else {
                return true;
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
    
    return AuthenticatedComponent;
}
