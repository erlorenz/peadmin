import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { StripeProvider } from 'react-stripe-elements';

import { AuthProvider } from './contexts';
import theme from './styles/theme';
import App from './App';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  request: operation =>
    operation.setContext({
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('auth')).token,
      },
    }),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
            <App />
          </StripeProvider>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
