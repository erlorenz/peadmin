import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components/macro';

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
      const message = 'Unable to sign in.';
      setStatus({ message });
      setSubmitting(false);
    }
  };

  render() {
    if (this.context.state.token) return <Redirect to="/dashboard/" />;

    return (
      <Layout>
        <Mutation mutation={SIGN_IN}>
          {(signIn, { loading }) => (
            <SignInForm
              loading={loading}
              onSubmit={this.handleSubmit(signIn)}
            />
          )}
        </Mutation>
      </Layout>
    );
  }
}

export default SignIn;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: radial-gradient(600px 600px at 50% 45px, #31bfdb 0, #102a35 130%);
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;
  padding-top: 10vh;
`;
