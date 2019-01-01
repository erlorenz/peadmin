import React, { Component, createContext } from 'react';
import { hydrateUser, localStorageHelper } from '../utils';

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  state = {
    email: null,
    token: null,
    name: null,
    accessLevel: null,
    isAuthenticating: false,
  };

  initialAuthCheck = () => {
    try {
      const authData = hydrateUser();
      this.setState(authData);
      console.log('Hydrate user ran');
      if (authData.token) console.log('Hitting DB for authentication of token');
      this.setState({ isAuthenticating: false });
    } catch (e) {
      console.log('error with checking authentication');
    }
  };

  signIn = authData => {
    this.setState(authData);

    localStorageHelper.set(authData);
  };

  signOut = () => {
    const reset = {
      accessLevel: null,
      token: null,
      name: null,
      email: null,
    };
    this.setState(reset);
    console.log('signing out');
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          signOut: this.signOut,
          signIn: this.signIn,
          initialAuthCheck: this.initialAuthCheck,
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
