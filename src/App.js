import React, { Component, Fragment } from 'react';
import Login from './containers/Login';
import Admin from './containers/Admin';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {};

  // Check if logged in when first at site
  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      if (!jwt) {
        throw Error('no jwt');
      }
      axios.defaults.headers.common.Authorization = jwt;
      this.setState({ isLoggedIn: true });
      this.setState({ user: user });
      console.log('You are logged in');
    } catch (e) {
      console.log(e.message);
    }
  }

  loginHandler = async loginData => {
    try {
      const response = await axios.post('/auth/login', loginData);
      // Extract token
      const jwt = response.data.token;
      // Set local storage
      localStorage.setItem('user', loginData.email);
      localStorage.setItem('token', jwt);
      // Set State
      this.setState({ isLoggedIn: true });
      this.setState({ user: loginData.email });
      // Remove error from login page
      this.setState({ loginError: '' });
      // Set headers
      axios.defaults.headers.common.Authorization = jwt;
      // Error handling
    } catch (e) {
      this.setState({ loginError: e.response.data.message });
      setTimeout(() => {
        this.setState({ loginError: '' });
      }, 6000);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
