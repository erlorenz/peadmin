import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';
import { ApolloConsumer } from 'react-apollo';
import localStorageHelper from '../utils/localStorageHelper';

class SignOut extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <ApolloConsumer>
        {client => {
          localStorageHelper.remove();
          this.context.signOut();
          client.clearStore();
          return <Redirect to="/" />;
        }}
      </ApolloConsumer>
    );
  }
}

export default SignOut;
