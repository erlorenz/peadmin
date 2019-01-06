import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './contexts';
import theme from './styles/theme';
import App from './App';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  request: operation =>
    operation.setContext({
      headers: { 'x-auth-token': localStorage.getItem('token') },
    }),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
