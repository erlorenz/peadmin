import React from 'react';
import formatDate from '../../utils/formatDate';
import { CardRow, Card, TableRow, TableCell } from '../../components/UI';

const OrderHistory = ({ order }) => {
  return (
    <CardRow>
      <Card>
        <table>
          <tbody>
            <TableRow>
              <TableCell as="th">Created:</TableCell>
              <TableCell>{formatDate(order.created_at)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Picked Up:</TableCell>
              <TableCell>{formatDate(order.picked_up)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Checked In:</TableCell>
              <TableCell>{formatDate(order.checked_in)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Out For Delivery:</TableCell>
              <TableCell>{formatDate(order.out_for_delivery)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Completed:</TableCell>
              <TableCell>{formatDate(order.completed)}</TableCell>
            </TableRow>
          </tbody>
        </table>
      </Card>
    </CardRow>
  );
};

export default OrderHistory;
