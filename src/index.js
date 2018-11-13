import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './scss/index.scss';
import { AuthProvider } from './contexts';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
