import React, { useContext, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Elements } from 'react-stripe-elements';

import Sidebar from './Sidebar';
import OrderList from './OrderList';
import Order from '../Order/Order';
import Topbar from './Topbar';
import { AuthContext } from '../../contexts';
import { orderFields, specialOrderFields } from './orderFields';
import {
  GET_CUSTOMER_ORDER,
  GET_SPECIAL_ORDER,
  GET_CUSTOMER_ORDERS_BY_STATUS,
  GET_SPECIAL_ORDERS_BY_STATUS,
} from '../../queries';
import CreateSpecialOrder from '../CreateSpecialOrder/CreateSpecialOrder';
import Landing from '../Landing.js/Landing';

const Dashboard = () => {
  const auth = useContext(AuthContext);

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  if (!auth.state.token) return <Redirect to="/" />;

  return (
    // need to add the check token
    <Layout>
      <Sidebar isOpen={sidebarIsOpen} onClick={handleToggleSidebar} />
      <Main>
        <Topbar
          onClick={handleToggleSidebar}
          email={auth.state.email}
          userName={auth.state.name}
        />
        <Switch>
          <Route exact path="/dashboard" component={Landing} />
          <Route
            exact
            path="/dashboard/specialorderform"
            render={props => (
              <Elements>
                <CreateSpecialOrder {...props} />
              </Elements>
            )}
          />
          <Route
            path="/dashboard/customerorders/:id"
            render={props => (
              <Elements>
                <Order
                  {...props}
                  type="customerOrder"
                  query={GET_CUSTOMER_ORDER}
                />
              </Elements>
            )}
          />
          <Route
            path="/dashboard/specialorders/:id"
            render={props => (
              <Elements>
                <Order
                  {...props}
                  type="specialOrder"
                  query={GET_SPECIAL_ORDER}
                />
              </Elements>
            )}
          />
          <Route
            path="/dashboard/specialorders"
            render={props => (
              <OrderList
                {...props}
                query={GET_SPECIAL_ORDERS_BY_STATUS}
                fields={specialOrderFields}
                type="specialOrders"
              />
            )}
          />
          <Route
            path="/dashboard/customerorders"
            render={props => (
              <OrderList
                {...props}
                query={GET_CUSTOMER_ORDERS_BY_STATUS}
                fields={orderFields}
                type="customerOrders"
              />
            )}
          />
        </Switch>
      </Main>
    </Layout>
  );
};

export default Dashboard;

const Layout = styled.div`
  display: block;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 1000px) {
    padding-left: 255px;
  }
`;

const Main = styled.div`
  padding: 4.9rem 0.9rem 0.9rem 0.9rem;
  font-size: 0.9rem;
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};

  @media (min-width: 1000px) {
    padding: 5.8rem 1.8rem;
    display: flex;
    flex-direction: column;
  }
`;
