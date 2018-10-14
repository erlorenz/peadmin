import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };

    return (
      <div className="login">
        <div className="login-form">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <button
            type="button"
            className="button"
            onClick={() => this.props.submitted(loginData)}>
            Log In
          </button>
          <p> {this.props.error} </p>
        </div>
      </div>
    );
  }
}

export default Login;
