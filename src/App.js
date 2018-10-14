import React, { Component, Fragment } from 'react';
import Login from './containers/Login';
import Admin from './containers/Admin';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
export default App;
