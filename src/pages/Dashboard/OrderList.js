import React from 'react';
import { Query } from 'react-apollo';
import queryString from 'query-string';
import { Card, TableRow, TableCell, CardTitle } from '../../components/UI';
import formatPrice from '../../utils/formatPrice';
import formatDate from '../../utils/formatDate';
import styled from 'styled-components/macro';
import StatusIndicator from '../../components/StatusIndicator';

const OrderList = ({ query, history, location, fields, type }) => {
  // Extract query string of statuses
  const { status, order_by, direction, title } = queryString.parse(
    location.search,
  );

  const renderRows = orders => {
    return orders.map(order => (
      <TableRow
        striped={true}
        hover={true}
        key={order.id}
        onClick={() => history.push(`/dashboard/${type}/${order.id}`)}>
        {fields.map((field, index) => {
          if (field === 'total_price') {
            return (
              <StyledTableCell key={index}>
                {formatPrice(order[field])}
              </StyledTableCell>
            );
          } else if (field === 'status') {
            return (
              <StyledTableCell key={index}>
                <StatusIndicator status={order.status} />
              </StyledTableCell>
            );
          } else if (field === 'return_date' || field === 'pickup_date') {
            return (
              <StyledTableCell key={index}>
                {formatDate(order[field])}
              </StyledTableCell>
            );
          } else {
            return (
              <StyledTableCell key={index}>{order[field]}</StyledTableCell>
            );
          }
        })}
      </TableRow>
    ));
  };

  const renderHeaders = fields.map((field, index) => (
    <StyledTableCell as="th" key={index}>
      {field
        .toUpperCase()
        .split('_')
        .join(' ')}
    </StyledTableCell>
  ));

  return (
    <Query
      query={query}
      variables={{ status, orderBy: order_by, direction }}
      pollInterval={4000}>
      {({ data, error, loading }) => {
        if (error) return <h1>{error.message}</h1>;
        if (loading) return <div>LOADING</div>;

        let orders = [];
        orders =
          type === 'specialOrders'
            ? data.getSpecialOrdersByStatus
            : data.getCustomerOrdersByStatus;

        return (
          <Card>
            <CardTitle>
              {title
                .toUpperCase()
                .split('_')
                .join(' ')}
            </CardTitle>
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

const StyledTableCell = styled(TableCell)`
  white-space: nowrap;
`;
