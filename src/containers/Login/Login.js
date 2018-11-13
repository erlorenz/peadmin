import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts';
import LoginForm from './LoginForm';
import axios from 'axios';
import showError from '../../utils/showError';

class Login extends Component {
  static contextType = AuthContext;
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  handleSubmit = async event => {
    // Prevent form submission
    event.preventDefault();

    try {
      // API Call
      const response = await axios.post('/auth/login', {
        email: this.state.email,
        password: this.state.password,
      });
      const { token, userName, isAdmin } = response.data;

      // Set Headers
      axios.defaults.headers.common['x-auth-token'] = token;
      console.log(response.data);

      // Change state in AuthProvider
      this.context.authenticate({
        isAuthenticated: token,
        userName,
      });

      // Persist to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);
      localStorage.setItem('userName', userName);

      //Create error message
    } catch (e) {
      showError(this, e);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.context.isAuthenticated) return <Redirect to="/admin/active" />;
    return (
      <LoginForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default Login;
