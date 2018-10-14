import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
  onSubmit = formProps => {
    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            type="email"
            component="input"
            name="email"
            placeholder="Email"
          />
          <Field
            type="password"
            placeholder="Password"
            name="password"
            component="input"
          />
          <button type="submit" className="button">
            Log In
          </button>
          <p> heres where it goes </p>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'login' })(Login);
