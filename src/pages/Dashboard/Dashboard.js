import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import OrderList from '../../components/OrderList/OrderList';
import Order from '../Order/Order';
import Topbar from '../../components/Topbar';
import { AuthContext } from '../../contexts';
import { orderFields, specialOrderFields } from '../Order/orderFields';
import { ORDERS_BY_STATUS } from '../../queries';
import CreateOrder from '../CreateOrder/CreateOrder';

class Dashboard extends Component {
  static contextType = AuthContext;

  state = {
    sidebarOpen: false,
    orders: null,
    error: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  sidebarToggleHandler = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    if (!this.context.state.token) return <Redirect to="/" />;

    return (
      <div className="layout">
        <Sidebar
          isOpen={this.state.sidebarOpen}
          clicked={this.sidebarToggleHandler}
        />
        <main className="main">
          <Topbar
            clicked={this.sidebarToggleHandler}
            email={this.context.state.email}
            userName={this.context.state.name}
          />
          <Switch>
            <Route
              exact
              path="/dashboard/specialorderform"
              component={CreateOrder}
            />
            <Route
              path="/dashboard/orders/:id"
              render={props => <Order {...props} type="order" />}
            />
            <Route
              path="/dashboard/specialorders/:id"
              render={props => <Order {...props} type="specialOrder" />}
            />
            <Route
              path="/dashboard/specialorders"
              render={props => (
                <OrderList
                  {...props}
                  fields={specialOrderFields}
                  type="specialOrders"
                />
              )}
            />
            <Route
              path="/dashboard/orders"
              render={props => (
                <OrderList
                  {...props}
                  query={ORDERS_BY_STATUS}
                  fields={orderFields}
                  type="orders"
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Dashboard;
