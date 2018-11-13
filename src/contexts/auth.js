import React, { Component } from 'react';
import initialAuth from '../utils/initialAuth';

const DEFAULT_STATE = initialAuth();
console.log('Default state:', DEFAULT_STATE);

const AuthContext = React.createContext(DEFAULT_STATE);

class AuthProvider extends Component {
  state = DEFAULT_STATE;

  authHandler = authData => {
    this.setState(authData);
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, authenticate: this.authHandler }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthProvider };
