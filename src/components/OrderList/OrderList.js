import React from 'react';
import { Query } from 'react-apollo';
import queryString from 'query-string';
import formatStatus from '../../utils/formatStatus';
import { Card, TableRow, TableCell } from '../UI';

const OrderList = ({ query, history, location, fields, type }) => {
  // Display order information if there is any

  const { status } = queryString.parse(location.search);

  const renderRows = orders => {
    return orders.map(order => (
      <TableRow
        pointer={true}
        key={order.id}
        className="order-row"
        onClick={() => history.push(`/dashboard/${type}/${order.id}`)}>
        {fields.map((field, index) => {
          if (field === 'total_price') {
            return <TableCell key={index}>{order[field] / 100}</TableCell>;
          } else if (field === 'status') {
            return (
              <TableCell key={index}>{formatStatus(order[field])}</TableCell>
            );
          } else {
            return <TableCell key={index}>{order[field]}</TableCell>;
          }
        })}
      </TableRow>
    ));
  };

  const renderHeaders = fields.map((field, index) => (
    <TableCell as="th" key={index}>
      {field
        .toUpperCase()
        .split('_')
        .join(' ')}
    </TableCell>
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
                <TableRow>{renderHeaders}</TableRow>
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
