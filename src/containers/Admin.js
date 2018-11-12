import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { OrderList } from '../components/Orders';
import Order from './Order';
import OrderForm from '../components/OrderForm';
import SpecialOrder from './SpecialOrder';
import Topbar from '../components/Topbar';
import { connect } from 'react-redux';
import getOrders from '../utils/getOrders';

class Admin extends Component {
  state = {
    sidebarOpen: false,
    orders: null,
    list: this.props.match.params.list,
    error: false,
  };

  componentDidMount() {
    if (!this.props.auth) {
      alert('You are not logged in!');
      this.props.history.push('/');
    }

    getOrders(this.state.list, this);
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    console.log('Admin: ', this.state.orders);

    return (
      <div className="admin">
        <Sidebar
          isOpen={this.state.sidebarOpen}
          clicked={this.sidebarToggleHandler}
        />
        <main className="main">
          <Topbar clicked={this.sidebarToggleHandler} />
          <Switch>
            <Route exact path="/admin/order/:id" component={Order} />
            <Route exact path="/admin/orderform" component={OrderForm} />
            <Route exact path="/admin/special/:id" component={SpecialOrder} />
            <Route
              path="/admin/"
              render={props => (
                <OrderList
                  {...props}
                  orders={this.state.orders}
                  error={this.state.error}
                />
              )}
            />
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
