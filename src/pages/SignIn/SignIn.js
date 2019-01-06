import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { AuthContext } from '../../contexts';
import { SIGN_IN } from '../../queries';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';

class SignIn extends Component {
  static contextType = AuthContext;

  handleSubmit = signIn => async (values, { setSubmitting, setStatus }) => {
    try {
      const { data } = await signIn({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      setSubmitting(false);
      console.log(data.signIn);

      this.context.signIn(data.signIn);
    } catch (e) {
      console.log(e.message);
      const message = e.graphQLErrors
        ? 'Invalid user name or password.'
        : 'Network error';
      setStatus({ message });
      setSubmitting(false);
    }
  };

  render() {
    if (this.context.state.token) return <Redirect to="/dashboard/active" />;
    return (
      <Mutation mutation={SIGN_IN}>
        {(signIn, { loading }) => (
          <SignInForm loading={loading} onSubmit={this.handleSubmit(signIn)} />
        )}
      </Mutation>
    );
  }
}

export default SignIn;
