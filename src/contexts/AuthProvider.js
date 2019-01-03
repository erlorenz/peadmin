import React, { Component, createContext } from 'react';
import { ApolloConsumer } from 'react-apollo';

import { localStorageHelper } from '../utils';

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  state = {
    email: null,
    token: null,
    name: null,
    accessLevel: null,
    id: null,
    isAuthenticated: false,
  };

  hydrateFromLocalStorage = () => {
    const user = {
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token'),
      email: localStorage.getItem('email'),
      accessLevel: localStorage.getItem('accessLevel'),
      id: localStorage.getItem('id'),
    };

    this.setState(user);
  };

  signIn = authData => {
    console.log(authData);
    authData.isAuthenticated = true;
    this.setState(authData);
    localStorageHelper.set(authData);
  };

  signOut = () => {
    const reset = {
      accessLevel: null,
      token: null,
      name: null,
      email: null,
      id: null,
    };
    this.setState(reset);
    localStorageHelper.remove();
    console.log('signing out');
  };

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <AuthContext.Provider
            value={{
              state: this.state,
              signOut: this.signOut,
              signIn: this.signIn,
              hydrateFromLocalStorage: this.hydrateFromLocalStorage,
            }}>
            {this.props.children}
          </AuthContext.Provider>
        )}
      </ApolloConsumer>
    );
  }
}
