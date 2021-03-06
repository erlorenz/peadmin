import React from 'react';
import { Card, ScrollContainer } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import OrderTitle from './OrderTitle';
import OrderCart from './OrderCart';
import OrderComments from './OrderComments';
import OrderRefunds from './OrderRefunds';
import OrderAdditionalCharges from './OrderAdditionalCharges';
import NoPrint from '../../components/NoPrint';
import Checklist from './Checklist';
import PrintInfo from './PrintInfo';

const OrderView = props => {
  const { type, data } = props;
  const order =
    type === 'customerOrder' ? data.getCustomerOrder : data.getSpecialOrder;

  return (
    <>
      <OrderTitle order={order} type={type} />
      <OrderInfo order={order} type={type} />
      <OrderHistory order={order} />
      {type === 'customerOrder' && <OrderCart order={order} />}
      <OrderComments order={order} type={type} />
      <OrderRefunds order={order} type={type} />
      <OrderAdditionalCharges order={order} type={type} />
      <NoPrint>
        <Card>
          <ScrollContainer>
            <Pre>{JSON.stringify(order, null, 2)}</Pre>
          </ScrollContainer>
        </Card>
      </NoPrint>
      <Checklist />
      <PrintInfo order={order} />
    </>
  );
};

//

export default OrderView;

const Pre = styled.pre`
  font-size: 10px;
  text-align: left;
  display: none;
`;
