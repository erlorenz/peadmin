import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component {
  onSubmit = formProps => {
    this.props.login(formProps, () => this.props.history.push('/admin/active'));
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
          <p> {this.props.errorMessage}</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({ form: 'login' }),
)(Login);
