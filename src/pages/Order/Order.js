import React, { Component } from 'react';
import { AuthContext } from '../../contexts';
import { Query } from 'react-apollo';
import OrderView from './OrderView';

class Order extends Component {
  static contextType = AuthContext;

  render() {
    const { id } = this.props.match.params;
    const { type, query } = this.props;

    return (
      <Query query={query} variables={{ id }}>
        {({ data, error, loading }) => {
          if (loading) return null;
          if (error) return <h1>{error.message}</h1>;
          return <OrderView data={data} type={type} />;
        }}
      </Query>
    );
  }
}

export default Order;
