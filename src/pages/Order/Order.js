import React from 'react';
import { Query } from 'react-apollo';
import OrderView from './OrderView';

const Order = props => {
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
};

export default Order;
