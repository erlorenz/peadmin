import React, { Component, useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import NotFound from './components/NotFound';
import SignOut from './components/SignOut';
import { AuthContext } from './contexts';
import Dashboard from './pages/Dashboard/Dashboard';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={SignOut} />
        <Route path="/" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
