import React from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import formatStatus from '../../utils/formatStatus';
import OrderInfo from './OrderInfo';

const OrderView = ({ data }) => {
  const { getCustomerOrderDetails: order } = data;

  return (
    <>
      <Card>
        <Title>
          {order.name} - {formatStatus(order.status)}
        </Title>
      </Card>
      <OrderInfo order={order} />
      <Card>
        <Pre>{JSON.stringify(order, null, 2)}</Pre>
      </Card>
    </>
  );
};

//

export default OrderView;

const Title = styled.h1`
  font-size: 1rem;

  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Pre = styled.pre`
  font-size: 10px;
`;
