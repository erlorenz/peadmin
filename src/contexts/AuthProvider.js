import React, { Component, createContext } from 'react';

import localStorageHelper from '../utils/localStorageHelper';

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
    if (!user.token) this.signOut();

    this.setState(user);
    console.log('Hydrating', this.state.token);
  };

  signIn = authData => {
    console.log(authData);
    authData.isAuthenticated = true;
    authData.accessLevel = authData.access_level;
    delete authData.__typename;
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
      isAuthenticated: false,
    };
    this.setState(reset);
    localStorageHelper.remove();
    console.log('signing out');
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          state: this.state,
          signOut: this.signOut,
          signIn: this.signIn,
          hydrateFromLocalStorage: this.hydrateFromLocalStorage,
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}