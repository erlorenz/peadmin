import React from 'react';
import { Query } from 'react-apollo';
import queryString from 'query-string';
import formatStatus from '../../utils/formatStatus';
import { Card, TableRow, TableCell } from '../UI';
import formatTotalPrice from '../../utils/formatTotalPrice';

const OrderList = ({ query, history, location, fields, type }) => {
  // Extract query string of statuses
  const { status } = queryString.parse(location.search);

  const renderRows = orders => {
    return orders.map(order => (
      <TableRow
        hover={true}
        key={order.id}
        onClick={() => history.push(`/dashboard/${type}/${order.id}`)}>
        {fields.map((field, index) => {
          if (field === 'total_price') {
            return (
              <TableCell key={index}>
                {formatTotalPrice(order[field])}
              </TableCell>
            );
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

        let orders;
        if (type === 'specialOrders') {
          orders = data.getSpecialOrdersByStatus;
        }
        if (type === 'customerOrders') {
          orders = data.getCustomerOrdersByStatus;
        }

        return (
          <Card>
            <table>
              <thead>
                <TableRow underline={true}>{renderHeaders}</TableRow>
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
