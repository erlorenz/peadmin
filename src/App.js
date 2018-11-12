import React, { Component, Fragment } from 'react';
import Login from './components/Login';
import Admin from './containers/Admin';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin/:list" component={Admin} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
export default App;
