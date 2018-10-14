import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Active from '../components/Active';
import Order from '../components/Order';
import Completed from '../components/Completed';
import Exceptions from '../components/Exceptions';
import Cancelled from '../components/Cancelled';
import OrderForm from '../components/OrderForm';
import { connect } from 'react-redux';

class Admin extends Component {
  componentDidMount() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div className="admin">
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/admin/active" component={Active} />
            <Route exact path="/admin/order" component={Order} />
            <Route exact path="/admin/completed" component={Completed} />
            <Route exact path="/admin/exceptions" component={Exceptions} />
            <Route exact path="/admin/cancelled" component={Cancelled} />
            <Route exact path="/admin/orderform" component={OrderForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth.authenticated };
};

export default connect(mapStateToProps)(Admin);
