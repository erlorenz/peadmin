import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { OrderList, SpecialOrderList } from '../../components/Orders';
import Order from '../Order';
import OrderForm from '../../components/OrderForm';
import SpecialOrder from '../SpecialOrder';
import Topbar from '../../components/Topbar';
import getOrders from '../../utils/getOrders';

class Admin extends Component {
  state = {
    sidebarOpen: false,
    orders: null,
    error: false,
  };

  componentDidMount() {
    getOrders(this.props.match.params.list, this);
  }

  componentDidUpdate(prevProps, prevState) {
    getOrders(this.props.match.params.list, this, prevProps.match.params.list);
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
            <Route exact path="/admin/orderform" component={OrderForm} />
            <Route exact path="/admin/order/:id" component={Order} />
            <Route
              exact
              path="/admin/specialOrder/:id"
              component={SpecialOrder}
            />
            <Route
              path="/admin/specialorders"
              render={props => (
                <SpecialOrderList
                  {...props}
                  orders={this.state.orders}
                  error={this.state.error}
                />
              )}
            />
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

export default Admin;
