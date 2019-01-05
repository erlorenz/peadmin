import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Mutation } from 'react-apollo';
import { AuthContext } from '../../contexts';
import { SIGN_IN } from '../../queries';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';

class SignIn extends Component {
  static contextType = AuthContext;

  handleSubmit = signIn => async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await signIn({
        variables: { email: values.email, password: values.password },
      });
      setSubmitting(false);
      const { _typename, ...authData } = response.data.signIn;
      this.context.signIn(authData);
    } catch (e) {
      const message = e.graphQLErrors
        ? 'Invalid username/password'
        : 'Network error';
      setStatus({ message });
      setSubmitting(false);
    }
  };

  render() {
    if (this.context.state.token) return <Redirect to="/dashboard/active" />;
    return (
      <div>
        <Mutation mutation={SIGN_IN}>
          {(signIn, { error, loading }) => (
            <SignInForm
              mutation={signIn}
              requestError={error}
              loading={loading}
              onSubmit={this.handleSubmit(signIn)}
            />
          )}
        </Mutation>
      </div>
    );
  }
}

export default SignIn;
