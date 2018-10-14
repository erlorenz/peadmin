import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://press-express-server.herokuapp.com';

ReactDOM.render(<App />, document.getElementById('root'));
