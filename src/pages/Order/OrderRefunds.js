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
import InsertRefundModal from '../../components/InsertRefundModal';
import formatPrice from '../../utils/formatPrice';

const OrderRefunds = ({ order, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const commentList = order.refunds.map(refund => (
    <TableRow striped key={refund.id}>
      <TableCell>{formatDate(refund.created_at)}</TableCell>
      <TableCell>{formatPrice(refund.amount)}</TableCell>
      <TableCell preLine>{refund.stripe_refund}</TableCell>
    </TableRow>
  ));

  return (
    <>
      {modalIsOpen && (
        <Modal onDismiss={handleToggleModal}>
          <InsertRefundModal order={order} type={type} />
        </Modal>
      )}
      <Card>
        <CardHead>
          <CardTitle>Refunds</CardTitle>
          <AddNew onClick={handleToggleModal} />
        </CardHead>
        <ScrollContainer>
          <table>
            <TableHead>
              <tr>
                <TableCell as="th">Timestamp</TableCell>
                <TableCell as="th">Amount</TableCell>
                <TableCell as="th">Refund ID</TableCell>
              </tr>
            </TableHead>
            <tbody>{commentList}</tbody>
          </table>
        </ScrollContainer>
      </Card>
    </>
  );
};

export default OrderRefunds;
