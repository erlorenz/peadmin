import React from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import TitleAndStatus from './TitleAndStatus';

const OrderView = ({ data }) => {
  const { getCustomerOrderDetails: order } = data;

  return (
    <>
      <TitleAndStatus order={order} />
      <OrderInfo order={order} />
      <OrderHistory order={order} />
      <Card>
        <Pre>{JSON.stringify(order, null, 2)}</Pre>
      </Card>
    </>
  );
};

//

export default OrderView;

const Pre = styled.pre`
  font-size: 10px;
`;
