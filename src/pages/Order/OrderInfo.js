import React from 'react';
import styled from 'styled-components/macro';
import {
  Card,
  CardRow,
  TableCell,
  TableRow,
  CardTitle,
} from '../../components/UI';
import formatDate from '../../utils/formatDate';

const OrderInfo = ({ order, type }) => {
  return (
    <>
      <CardRow>
        <Card>
          <CardTitle>Customer</CardTitle>
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
                <TableCell preLine>{order.stripe_charge}</TableCell>
              </TableRow>
            </tbody>
          </table>
        </Card>
        {type === 'customerOrder' && (
          <RightCard>
            <CardTitle>Pickup/Delivery</CardTitle>
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
          </RightCard>
        )}
      </CardRow>
      {order.special_instructions && (
        <Card>
          <CardTitle>Special Instructions</CardTitle>
          <Div>{order.special_instructions}</Div>
        </Card>
      )}
      {order.description && (
        <Card>
          <CardTitle>Description</CardTitle>
          <Div>{order.description}</Div>
        </Card>
      )}
    </>
  );
};

export default OrderInfo;

const Div = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  white-space: pre-line;
  padding: 1rem;
  width: 100%;
`;

const RightCard = styled(Card)`
  @media (min-width: 1000px) {
    margin-left: 1.8rem;
  }
`;
