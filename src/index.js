import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { AuthProvider } from './contexts';
import App from './App';
import './scss/index.scss';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </AuthProvider>,
  document.querySelector('#root'),
);
