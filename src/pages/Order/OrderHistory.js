import React from 'react';
import formatDate from '../../utils/formatDate';
import { CardRow, Card, TableRow, TableCell } from '../../components/UI';

const OrderHistory = ({ order }) => {
  return (
    <CardRow>
      <Card>
        <table>
          <thead>
            <TableRow>
              <TableCell as="th">Created:</TableCell>
              <TableCell as="th">Picked Up:</TableCell>
              <TableCell as="th">Checked In:</TableCell>
              <TableCell as="th">Out For Delivery:</TableCell>
              <TableCell as="th">Completed:</TableCell>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>{formatDate(order.created_at)}</TableCell>
              <TableCell>{formatDate(order.picked_up)}</TableCell>
              <TableCell>{formatDate(order.checked_in)}</TableCell>
              <TableCell>{formatDate(order.out_for_delivery)}</TableCell>
              <TableCell>{formatDate(order.completed)}</TableCell>
            </TableRow>
          </tbody>
        </table>
      </Card>
    </CardRow>
  );
};

export default OrderHistory;
