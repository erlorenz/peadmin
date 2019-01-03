import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';
import { localStorageHelper } from '../utils';

class SignOut extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    localStorageHelper.remove();
    console.log('Signing OUt');
    this.context.signOut();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default SignOut;
