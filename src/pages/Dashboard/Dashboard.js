import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import OrderList from '../../components/OrderList';
import Order from '../Order';
import SpecialOrderForm from '../SpecialOrderForm';
import Topbar from '../../components/Topbar';
import getOrders from '../../utils/getOrders';
import { AuthContext } from '../../contexts';
import { orderFields, specialOrderFields } from '../Order/orderFields';

class Dashboard extends Component {
  static contextType = AuthContext;
  state = {
    sidebarOpen: false,
    orders: null,
    error: false,
  };

  componentDidMount() {
    getOrders(this.props.match.params.list, this);

    if (!this.context.state.token) this.props.history.push('/');
  }

  componentDidUpdate(prevProps, prevState) {
    getOrders(this.props.match.params.list, this, prevProps.match.params.list);
  }

  sidebarToggleHandler = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    return (
      <div className="layout">
        <Sidebar
          isOpen={this.state.sidebarOpen}
          clicked={this.sidebarToggleHandler}
        />
        <main className="main">
          <Topbar
            clicked={this.sidebarToggleHandler}
            email={this.context.email}
            userName={this.context.userName}
          />
          <Switch>
            <Route
              exact
              path="/dashboard/orderform"
              component={SpecialOrderForm}
            />
            <Route
              exact
              path="/dashboard/order/:id"
              render={props => <Order {...props} type="order" />}
            />
            <Route
              exact
              path="/dashboard/specialOrder/:id"
              render={props => <Order {...props} type="specialOrder" />}
            />
            <Route
              path="/dashboard/specialorders"
              render={props => (
                <OrderList
                  {...props}
                  orders={this.state.orders}
                  error={this.state.error}
                  fields={specialOrderFields}
                  type="specialOrder"
                />
              )}
            />
            <Route
              path="/dashboard/"
              render={props => (
                <OrderList
                  {...props}
                  orders={this.state.orders}
                  error={this.state.error}
                  fields={orderFields}
                  type="order"
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
