import React, { Component } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import ChangeStatusModal from '../../components/ChangeStatusModal';
import OrderTitle from './OrderTitle';
import Modal from '../../components/Modal';

class OrderView extends Component {
  state = {
    changeStatusModalIsOpen: false,
  };

  handleModalToggle = () => {
    this.setState({
      changeStatusModalIsOpen: !this.state.changeStatusModalIsOpen,
    });
  };

  renderModal = (order, type) => {
    if (this.state.changeStatusModalIsOpen)
      return (
        <Modal onDismiss={this.handleModalToggle}>
          <ChangeStatusModal
            order={order}
            type={type}
            // onDismiss={this.handleModalToggle}
          />
        </Modal>
      );
    return null;
  };

  render() {
    const { getCustomerOrderDetails: order } = this.props.data;
    const { type } = this.props;

    return (
      <>
        <OrderTitle order={order} onClick={this.handleModalToggle} />
        {this.renderModal(order, type)}
        <OrderInfo order={order} />
        <OrderHistory order={order} />
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
