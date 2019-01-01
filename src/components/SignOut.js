import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';
import axios from 'axios';
import { localStorageHelper } from '../utils';

class SignOut extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    localStorageHelper.remove();
    delete axios.defaults.headers.common.Authorization;

    this.context.signOut();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default SignOut;
