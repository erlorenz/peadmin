import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components/macro';

import { AuthContext } from '../../contexts';
import { SIGN_IN } from '../../queries';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import setErrorMessage from '../../utils/setErrorMessage';

const SignIn = () => {
  const auth = useContext(AuthContext);

  const handleSubmit = signIn => async (
    values,
    { setSubmitting, setStatus },
  ) => {
    try {
      const { data } = await signIn({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      setSubmitting(false);

      console.log(data.signIn);
      auth.signIn(data.signIn);
    } catch (e) {
      const message = setErrorMessage(e);
      setStatus({ message });
      setSubmitting(false);
    }
  };

  if (auth.state.token) return <Redirect to="/dashboard/" />;

  return (
    <Layout>
      <Mutation mutation={SIGN_IN}>
        {(signIn, { loading }) => (
          <SignInForm loading={loading} onSubmit={handleSubmit(signIn)} />
        )}
      </Mutation>
    </Layout>
  );
};

export default SignIn;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: radial-gradient(600px 600px at 50% 45px, #31bfdb 0, #3b535d 130%);
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;
  padding-top: 10vh;
`;
