import React from 'react';
// import styled from 'styled-components/macro';

import {
  TableRow,
  TableCell,
  Card,
  TableHead,
  ScrollContainer,
} from '../../components/UI';
import formatPrice from '../../utils/formatPrice';

const OrderCart = ({ order }) => {
  const cartList = order.customerOrderItems.map(item => (
    <TableRow key={item.id}>
      <TableCell>{item.description}</TableCell>
      <TableCell right>{formatPrice(item.price)}</TableCell>
      <TableCell right>{item.quantity}</TableCell>
      <TableCell right>{formatPrice(item.price * item.quantity)}</TableCell>
    </TableRow>
  ));

  return (
    <Card>
      <ScrollContainer>
        <table>
          <TableHead>
            <TableRow>
              <TableCell as="th">Item</TableCell>
              <TableCell right as="th">
                Price
              </TableCell>
              <TableCell right as="th">
                Quantity
              </TableCell>
              <TableCell right as="th">
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {cartList}
            <TableRow>
              <td />
              <td />
              <td />
              <TableCell right as="th">
                Total: ${order.total_price / 100}
              </TableCell>
            </TableRow>
          </tbody>
        </table>
      </ScrollContainer>
    </Card>
  );
};

export default OrderCart;
