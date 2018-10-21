import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {
  Active,
  Completed,
  Exceptions,
  SpecialOrders,
  Cancelled,
} from '../components/Orders';
import Order from './Order';
import OrderForm from '../components/OrderForm';
import SpecialOrder from './SpecialOrder';
import Topbar from '../components/Topbar';
import { connect } from 'react-redux';

class Admin extends Component {
  state = {
    sidebarOpen: false,
  };

  componentDidMount() {
    if (!this.props.auth) {
      alert('You are not logged in!');
      this.props.history.push('/');
    }
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    return (
      <div className="admin">
        <Sidebar
          isOpen={this.state.sidebarOpen}
          clicked={this.sidebarToggleHandler}
        />
        <main className="main">
          <Topbar clicked={this.sidebarToggleHandler} />
          <Switch>
            <Route exact path="/admin/active" component={Active} />
            <Route exact path="/admin/order/:id" component={Order} />
            <Route exact path="/admin/completed" component={Completed} />
            <Route exact path="/admin/exceptions" component={Exceptions} />
            <Route exact path="/admin/cancelled" component={Cancelled} />
            <Route exact path="/admin/orderform" component={OrderForm} />
            <Route exact path="/admin/special" component={SpecialOrders} />
            <Route exact path="/admin/special/:id" component={SpecialOrder} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth.authenticated };
};

export default connect(mapStateToProps)(Admin);
