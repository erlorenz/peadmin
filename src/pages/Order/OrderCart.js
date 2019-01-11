import React from 'react';
import styled from 'styled-components/macro';

import { TableRow, TableCell, Card, TableHead } from '../../components/UI';
import formatPrice from '../../utils/formatPrice';

const OrderCart = ({ order }) => {
  const cartList = order.customerOrderItems.map(item => (
    <TableRow key={item.id}>
      <TableCell>{item.description}</TableCell>
      <TableCellAlignRight>{formatPrice(item.price)}</TableCellAlignRight>
      <TableCellAlignRight>{item.quantity}</TableCellAlignRight>
      <TableCellAlignRight>
        {formatPrice(item.price * item.quantity)}
      </TableCellAlignRight>
    </TableRow>
  ));

  return (
    <Card>
      <table>
        <TableHead>
          <TableRow>
            <TableCell as="th">Item</TableCell>
            <TableCellAlignRight as="th">Price</TableCellAlignRight>
            <TableCellAlignRight as="th">Quantity</TableCellAlignRight>
            <TableCellAlignRight as="th">Subtotal</TableCellAlignRight>
          </TableRow>
        </TableHead>
        <tbody>
          {cartList}
          <TableRow>
            <td />
            <td />
            <td />
            <TableCell as="th">Total: ${order.total_price / 100}</TableCell>
          </TableRow>
        </tbody>
      </table>
    </Card>
  );
};

export default OrderCart;

const TableCellAlignRight = styled(TableCell)`
  text-align: right;
`;
