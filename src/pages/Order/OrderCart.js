import React from 'react';
import styled from 'styled-components/macro';

import {
  TableRow,
  TableCell,
  Card,
  TableHead,
  ScrollContainer,
  CardTitle,
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
      <CardTitle>Items</CardTitle>
      <ScrollContainer>
        <Table>
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
                Total: {formatPrice(order.total_price)}
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </ScrollContainer>
    </Card>
  );
};

export default OrderCart;

const Table = styled.table`
  @media print {
    color: black;
  }
`;
