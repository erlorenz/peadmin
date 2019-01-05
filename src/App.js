import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import NotFound from './components/NotFound';
import SignOut from './components/SignOut';
import { AuthContext } from './contexts';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    this.context.hydrateFromLocalStorage();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={SignOut} />
        <Route path="/" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
