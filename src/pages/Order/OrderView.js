import React, { Component } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import OrderInfo from './OrderInfo';
import OrderHistory from './OrderHistory';
import ChangeStatusModal from '../../components/ChangeStatusModal';
import OrderTitle from './OrderTitle';
import { Portal } from 'react-portal';

class OrderView extends Component {
  state = {
    changeStatusModalIsOpen: false,
  };

  handleModalToggle = () => {
    this.setState({
      changeStatusModalIsOpen: !this.state.changeStatusModalIsOpen,
    });
  };

  renderModal = (order, refetch) => {
    if (this.state.changeStatusModalIsOpen)
      return (
        <Portal>
          <ChangeStatusModal
            order={order}
            refetch={refetch}
            onClick={this.handleModalToggle}
          />
        </Portal>
      );
    return null;
  };

  render() {
    const { getCustomerOrderDetails: order } = this.props.data;
    const { refetch } = this.props;

    return (
      <>
        <OrderTitle order={order} onClick={this.handleModalToggle} />
        {this.renderModal(order, refetch)}
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
