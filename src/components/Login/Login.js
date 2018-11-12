import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';
import styles from './Login.module.scss';

class Login extends Component {
  onSubmit = formData => {
    this.props.login(formData);
  };

  render() {
    const { handleSubmit } = this.props;

    if (this.props.authenticated) {
      return <Redirect to="/admin/active" />;
    }

    return (
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(this.onSubmit)}>
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
  return {
    errorMessage: state.auth.errorMessage,
    authenticated: state.auth.authenticated,
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({ form: 'login' }),
)(Login);
