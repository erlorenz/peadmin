import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';
import { ApolloConsumer } from 'react-apollo';
import localStorageHelper from '../utils/localStorageHelper';

const SignOut = () => {
  const auth = useContext(AuthContext);

  return (
    <ApolloConsumer>
      {client => {
        auth.signOut();
        client.clearStore();
        return <Redirect to="/" />;
      }}
    </ApolloConsumer>
  );
};

export default SignOut;
