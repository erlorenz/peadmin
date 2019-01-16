import React, { useState } from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import StatusIndicator from '../../components/StatusIndicator';
import Modal from '../../components/Modal';
import UpdateStatusModal from '../../components/UpdateStatusModal';

const OrderTitle = ({ order, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleToggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      {modalIsOpen && (
        <Modal onDismiss={handleToggleModal}>
          <UpdateStatusModal order={order} type={type} />
        </Modal>
      )}
      <Card>
        <StyledStatusIndicator
          status={order.status}
          onClick={handleToggleModal}
        />
      </Card>
    </>
  );
};

export default OrderTitle;

const StyledStatusIndicator = styled(StatusIndicator)`
  height: 100%;
  width: 100%;
  cursor: pointer;
  font-size: 1.15rem;
`;
