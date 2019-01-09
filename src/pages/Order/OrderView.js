import React from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import StatusAndComment from '../../components/StatusAndComment';
import OrderTitle from './OrderTitle';

const OrderView = ({ data, refetch }) => {
  const { getCustomerOrderDetails: order } = data;

  return (
    <>
      <OrderTitle order={order} />
      <StatusAndComment order={order} refetch={refetch} />
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
