import React, { Component } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import OrderTitle from './OrderTitle';
import OrderCart from './OrderCart';
import OrderComments from './OrderComments';

class OrderView extends Component {
  render() {
    const { getCustomerOrderDetails: order } = this.props.data;
    const { type = 'customerOrder' } = this.props;

    return (
      <>
        <OrderTitle order={order} type={type} />
        <OrderInfo order={order} type={type} />
        <OrderHistory order={order} />
        {type === 'customerOrder' && <OrderCart order={order} />}
        <OrderComments order={order} type={type} />

        <Card>
          <Pre>{JSON.stringify(order, null, 2)}</Pre>
        </Card>
      </>
    );
  }
}

//

export default OrderView;

const Pre = styled.pre`
  font-size: 10px;
`;
