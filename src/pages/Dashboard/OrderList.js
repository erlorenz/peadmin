import React from 'react';
import { Query } from 'react-apollo';
import queryString from 'query-string';
import formatStatus from '../../utils/formatStatus';
import { Card, TableRow, TableCell } from '../../components/UI';
import formatTotalPrice from '../../utils/formatTotalPrice';
import formatDate from '../../utils/formatDate';
import styled from 'styled-components/macro';

const OrderList = ({ query, history, location, fields, type }) => {
  // Extract query string of statuses
  const { status, order_by, direction } = queryString.parse(location.search);

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
          } else if (field === 'return_date' || field === 'pickup_date') {
            return (
              <TableCell key={index}>{formatDate(order[field])}</TableCell>
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

  return (
    <Query
      query={query}
      variables={{ status, orderBy: order_by, direction }}
      pollInterval={10000}>
      {({ data, error, loading }) => {
        if (loading) return null;
        if (error) return <h1>{error.message}</h1>;

        let orders = [];
        orders =
          type === 'specialOrders'
            ? data.getSpecialOrdersByStatus
            : data.getCustomerOrdersByStatus;

        return (
          <Card>
            <ScrollContainer>
              <table>
                <thead>
                  <TableRow underline={true}>{renderHeaders}</TableRow>
                </thead>
                <tbody>{renderRows(orders)}</tbody>
              </table>
            </ScrollContainer>
          </Card>
        );
      }}
    </Query>
  );
};

export default OrderList;

const ScrollContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;
