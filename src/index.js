import React from 'react';
import ReactDOM from 'react-dom';

import { AuthProvider } from './contexts';
import App from './App';
import './scss/index.scss';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector('#root'),
);
