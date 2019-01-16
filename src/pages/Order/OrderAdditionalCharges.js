import React, { useState } from 'react';
import formatDate from '../../utils/formatDate';
// import styled from 'styled-components/macro';
import {
  ScrollContainer,
  Card,
  TableHead,
  TableRow,
  TableCell,
  CardTitle,
  CardHead,
} from '../../components/UI';
import AddNew from '../../components/AddNew';
import Modal from '../../components/Modal';
import formatPrice from '../../utils/formatPrice';
import InsertAdditionalChargeModal from '../../components/InsertAdditionalChargeModal';

const OrderAdditionalCharges = ({ order, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const commentList = order.additionalCharges.map(additionalCharge => (
    <TableRow striped key={additionalCharge.id}>
      <TableCell>{formatDate(additionalCharge.created_at)}</TableCell>
      <TableCell>{formatPrice(additionalCharge.amount)}</TableCell>
      <TableCell preLine>{additionalCharge.stripe_charge}</TableCell>
    </TableRow>
  ));

  return (
    <>
      {modalIsOpen && (
        <Modal onDismiss={handleToggleModal}>
          <InsertAdditionalChargeModal order={order} type={type} />
        </Modal>
      )}
      <Card>
        <CardHead>
          <CardTitle>Additional Charges</CardTitle>
          <AddNew onClick={handleToggleModal} />
        </CardHead>
        <ScrollContainer>
          <table>
            <TableHead>
              <tr>
                <TableCell as="th">Timestamp</TableCell>
                <TableCell as="th">Amount</TableCell>
                <TableCell as="th">Charge ID</TableCell>
              </tr>
            </TableHead>
            <tbody>{commentList}</tbody>
          </table>
        </ScrollContainer>
      </Card>
    </>
  );
};

export default OrderAdditionalCharges;
