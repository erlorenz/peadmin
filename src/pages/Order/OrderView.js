import React, { Component } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import ChangeStatusModal from '../../components/ChangeStatusModal';
import OrderTitle from './OrderTitle';
import Modal from '../../components/Modal';
import OrderCart from './OrderCart';
import OrderComments from './OrderComments';

class OrderView extends Component {
  state = {
    changeStatusModalIsOpen: false,
  };

  handleChangeStatusModalToggle = () => {
    this.setState({
      changeStatusModalIsOpen: !this.state.changeStatusModalIsOpen,
    });
  };

  renderChangeStatusModal = (order, type) => {
    if (this.state.changeStatusModalIsOpen)
      return (
        <Modal onDismiss={this.handleChangeStatusModalToggle}>
          <ChangeStatusModal order={order} type={type} />
        </Modal>
      );
    return null;
  };

  render() {
    const { getCustomerOrderDetails: order } = this.props.data;
    const { type = 'customerOrder' } = this.props;

    return (
      <>
        <OrderTitle order={order} onClick={this.handleModalToggle} />
        {this.renderChangeStatusModal(order, type)}
        <OrderInfo order={order} type={type} />
        <OrderHistory order={order} />
        {type === 'customerOrder' && <OrderCart order={order} />}
        <OrderComments
          order={order}
          type={type}
          onClick={() => console.log('Clicked')}
        />

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
