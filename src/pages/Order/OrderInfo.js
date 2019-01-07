import React from 'react';
// import styled from 'styled-components/macro';
import { Card, CardRow, TableCell, TableRow } from '../../components/UI';
import formatDate from '../../utils/formatDate';

const OrderInfo = ({ order, styles }) => {
  return (
    <CardRow>
      <Card>
        <table>
          <tbody>
            <TableRow>
              <TableCell as="th">Name:</TableCell>
              <TableCell>{order.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Phone:</TableCell>
              <TableCell>{order.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Email:</TableCell>
              <TableCell>{order.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Stripe ID:</TableCell>
              <TableCell>{order.stripe_charge}</TableCell>
            </TableRow>
          </tbody>
        </table>
      </Card>
      <Card>
        <table>
          <tbody>
            <TableRow>
              <TableCell as="th">Hotel:</TableCell>
              <TableCell>{order.hotel}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Room:</TableCell>
              <TableCell>{order.room}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Pickup:</TableCell>
              <TableCell>{formatDate(order.pickup_date)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell as="th">Return:</TableCell>
              <TableCell>{formatDate(order.return_date)}</TableCell>
            </TableRow>
          </tbody>
        </table>
      </Card>
    </CardRow>
  );
};

export default OrderInfo;
