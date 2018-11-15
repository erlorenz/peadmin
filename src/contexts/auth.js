import React, { Component } from 'react';
import initialAuth from '../utils/initialAuth';

const DEFAULT_STATE = initialAuth();

const AuthContext = React.createContext(DEFAULT_STATE);

class AuthProvider extends Component {
  state = DEFAULT_STATE;

  authHandler = authData => {
    this.setState(authData);
  };

  logoutHandler = () => {
    this.setState({
      isAdmin: '',
      isAuthenticated: '',
      userName: '',
      email: '',
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticate: this.authHandler,
          logout: this.logoutHandler,
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext, AuthProvider };
