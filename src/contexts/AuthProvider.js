import React, { Component, createContext } from 'react';
import axios from 'axios';
import { client } from '../index';

import { localStorageHelper } from '../utils';
import { checkToken } from '../queries';

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  state = {
    email: null,
    token: null,
    name: null,
    accessLevel: null,
    id: null,
    isAuthenticating: false,
  };

  hydrateUser = () => {
    const user = {
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token'),
      email: localStorage.getItem('email'),
      accessLevel: localStorage.getItem('accessLevel'),
      id: localStorage.getItem('id'),
      isAuthenticating: false,
    };

    if (user.token) user.isAuthenticating = true;
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.headers.common['x-auth-token'] = user.token;

    this.setState(user);
  };

  checkToken = async token => {
    try {
      const result = await client.query(checkToken);
      if (!result.data.success) throw new Error(result.message);
      this.setState({ isAuthenticating: false });
    } catch (e) {
      console.log(e.message);
      this.setState({
        email: null,
        token: null,
        name: null,
        accessLevel: null,
        id: null,
        isAuthenticating: false,
      });
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
      id: null,
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
          hydrateUser: this.hydrateUser,
          checkToken: this.checkToken,
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
