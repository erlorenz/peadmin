import React, { Component, createContext } from 'react';

import localStorageHelper from '../utils/localStorageHelper';

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  state = {
    email: '',
    token: '',
    name: '',
    accessLevel: '',
    id: '',
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
  };

  signIn = authData => {
    authData.isAuthenticated = true;
    authData.accessLevel = authData.access_level;
    delete authData.access_level;
    delete authData.__typename;
    localStorageHelper.set(authData);
    this.setState(authData);
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
