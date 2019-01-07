import React, { Component, Fragment } from 'react';
import { AuthContext } from '../../contexts';
import { Query } from 'react-apollo';
import OrderView from './OrderView';
import { GET_CUSTOMER_ORDER } from '../../queries';
import { Card } from '../../components/UI';

class Order extends Component {
  static contextType = AuthContext;

  render() {
    const { id } = this.props.match.params;

    return (
      <Query query={GET_CUSTOMER_ORDER} variables={{ id }}>
        {({ data, error, loading }) => {
          if (loading) return null;
          if (error) return <h1>{error.message}</h1>;
          return <OrderView data={data} />;
        }}
      </Query>
    );
  }
}

export default Order;
