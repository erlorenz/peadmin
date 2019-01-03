import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts';
import { localStorageHelper } from '../utils';
import { ApolloConsumer } from 'react-apollo';

class SignOut extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    localStorageHelper.remove();
    console.log('Signing OUt');
    this.context.signOut();
  }

  render() {
    return (
      <ApolloConsumer>
        {client => {
          client.clearStore();
          return <Redirect to="/" />;
        }}
      </ApolloConsumer>
    );
  }
}

export default SignOut;
