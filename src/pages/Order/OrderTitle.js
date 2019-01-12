import React, { useState } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import formatPrice from '../../utils/formatPrice';
import StatusIndicator from '../../components/StatusIndicator';
import Modal from '../../components/Modal';
import ChangeStatusModal from '../../components/ChangeStatusModal';

const OrderTitle = ({ order, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleToggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      {modalIsOpen && (
        <Modal onDismiss={handleToggleModal}>
          <ChangeStatusModal order={order} type={type} />
        </Modal>
      )}
      <TitleCard>
        <Title>{order.name}</Title>
        <Price>{formatPrice(order.total_price)}</Price>
        <StyledStatusIndicator
          status={order.status}
          onClick={handleToggleModal}
        />
      </TitleCard>
    </>
  );
};

export default OrderTitle;

const Title = styled.h1`
  font-size: 1.3rem;
`;

const Price = styled(Title)``;

const TitleCard = styled(Card)`
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const StyledStatusIndicator = styled(StatusIndicator)`
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
`;
