import React from 'react';
import formatDate from '../../utils/formatDate';
import {
  CardRow,
  Card,
  TableRow,
  TableCell,
  TableHead,
} from '../../components/UI';
import styled from 'styled-components/macro';

const OrderHistory = ({ order }) => {
  return (
    <CardRow>
      <Card>
        <table>
          <Thead>
            <TableRow>
              <TableCell as="th">Created</TableCell>
              <TableCell as="th">Picked Up</TableCell>
              <TableCell as="th">Checked In</TableCell>
              <TableCell as="th">Out For Delivery</TableCell>
              <TableCell as="th">Completed</TableCell>
            </TableRow>
          </Thead>
          <tbody>
            <TableRow>
              <StackedTableCell>
                <Span>Created: </Span>
                {formatDate(order.created_at)}
              </StackedTableCell>
              <StackedTableCell>
                <Span>Picked Up: </Span>
                {formatDate(order.picked_up)}
              </StackedTableCell>
              <StackedTableCell>
                <Span>Checked In: </Span>
                {formatDate(order.checked_in)}
              </StackedTableCell>
              <StackedTableCell>
                <Span>Out For Delivery: </Span>
                {formatDate(order.out_for_delivery)}
              </StackedTableCell>
              <StackedTableCell>
                <Span>Completed: </Span>
                {formatDate(order.completed)}
              </StackedTableCell>
            </TableRow>
          </tbody>
        </table>
      </Card>
    </CardRow>
  );
};

export default OrderHistory;
const StackedTableCell = styled(TableCell)`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1000px) {
    display: table-cell;
  }
`;

const Span = styled.span`
  font-weight: bold;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const Thead = styled(TableHead)`
  display: none;

  @media (min-width: 1000px) {
    display: table-header-group;
  }
`;
