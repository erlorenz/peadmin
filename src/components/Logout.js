import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';
import axios from 'axios';

class Logout extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('isAdmin');
    delete axios.defaults.headers.common.Authorization;

    this.context.authenticate({
      userName: '',
      isAuthenticated: '',
      isAdmin: false,
    });
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
