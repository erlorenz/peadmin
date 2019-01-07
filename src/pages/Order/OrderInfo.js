import React from 'react';
import styled from 'styled-components/macro';
import { Card } from '../../components/UI';
import formatDate from '../../utils/formatDate';

const OrderInfo = ({ order, styles }) => {
  return (
    <Div>
      <Card>
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{order.name}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{order.phone}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{order.email}</td>
            </tr>
            <tr>
              <th>Stripe ID:</th>
              <td>{order.stripe_charge}</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card>
        <table>
          <tbody>
            <tr>
              <th>Hotel:</th>
              <td>{order.hotel}</td>
            </tr>
            <tr>
              <th>Room:</th>
              <td>{order.room}</td>
            </tr>
            <tr>
              <th>Pickup:</th>
              <td>{formatDate(order.pickup_date)}</td>
            </tr>
            <tr>
              <th>Return:</th>
              <td>{formatDate(order.return_date)}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Div>
  );
};

export default OrderInfo;

const Div = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
