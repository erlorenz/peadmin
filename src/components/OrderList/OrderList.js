import React from 'react';
import { Query } from 'react-apollo';
import queryString from 'query-string';
import formatStatus from '../../utils/formatStatus';
import { Card } from '../UI';

const OrderList = ({ query, history, location, fields, type }) => {
  // Display order information if there is any

  const { status } = queryString.parse(location.search);

  const renderRows = orders => {
    return orders.map(order => (
      <tr
        key={order.id}
        className="order-row"
        onClick={() => history.push(`/dashboard/${type}/${order.id}`)}>
        {fields.map((field, index) => {
          if (field === 'total_price') {
            return <td key={index}>{order[field] / 100}</td>;
          } else if (field === 'status') {
            return <td key={index}>{formatStatus(order[field])}</td>;
          } else {
            return <td key={index}>{order[field]}</td>;
          }
        })}
      </tr>
    ));
  };

  const renderHeaders = fields.map((field, index) => (
    <th key={index}>
      {field
        .toUpperCase()
        .split('_')
        .join(' ')}
    </th>
  ));

  // Display different headers
  return (
    <Query query={query} variables={{ status }}>
      {({ data, error, loading }) => {
        if (loading) return <div>LOADING</div>;
        if (error) return <h1>{error.message}</h1>;

        const { getCustomerOrdersByStatus: orders } = data;
        return (
          <Card>
            <table>
              <thead>
                <tr>{renderHeaders}</tr>
              </thead>
              <tbody>{renderRows(orders)}</tbody>
            </table>
          </Card>
        );
      }}
    </Query>
  );
};

export default OrderList;
