import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './containers/App';
import './css/index.css';
import reducers from './reducers';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userName = localStorage.getItem('userName');

// Axios URL and Header setup on load and refresh
axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://press-express-server.herokuapp.com';
axios.defaults.headers.common.Authorization = token;

// Check for initial state
const checkAuth = {
  authenticated: token,
  user,
  userName,
};

// Set up devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  { auth: checkAuth },
  composeEnhancers(applyMiddleware(reduxThunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
