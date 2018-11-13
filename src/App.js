import React, { Component } from 'react';
import Login from './containers/Login';
import Admin from './containers/Admin';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// const auth = initialAuth();

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin/:list" component={Admin} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
