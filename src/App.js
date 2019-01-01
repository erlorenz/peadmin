import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import SignIn from './containers/SignIn';
import Admin from './containers/Admin';
import NotFound from './components/NotFound';
import SignOut from './components/SignOut';
import AdminLoading from './components/AdminLoading';
import AdminLanding from './components/AdminLanding';
import { AuthContext } from './contexts';

class App extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    this.context.hydrateUser();
  }

  render() {
    if (!this.context.state.token) return <SignIn />;

    if (this.context.state.isAuthenticating)
      return (
        <AdminLoading
          checkToken={this.context.checkToken}
          token={this.context.state.token}
        />
      );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AdminLanding} />
          <Route path="/admin/:list" component={Admin} />
          <Route path="/signout" component={SignOut} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
