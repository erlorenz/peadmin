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
import InsertAdminCommentModal from '../../components/InsertAdminCommentModal';
import NoPrint from '../../components/NoPrint';

const OrderComments = ({ order, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const commentList = order.adminComments.map(comment => (
    <TableRow striped key={comment.created_at}>
      <TableCell>{formatDate(comment.created_at)}</TableCell>
      <TableCell>{comment.name}</TableCell>
      <TableCell preLine>{comment.comment_body}</TableCell>
    </TableRow>
  ));

  return (
    <NoPrint>
      {modalIsOpen && (
        <Modal onDismiss={handleToggleModal}>
          <InsertAdminCommentModal order={order} type={type} />
        </Modal>
      )}
      <Card>
        <CardHead>
          <CardTitle>Comments</CardTitle>
          <AddNew onClick={handleToggleModal} />
        </CardHead>
        <ScrollContainer>
          <table>
            <TableHead>
              <tr>
                <TableCell as="th">Timestamp</TableCell>
                <TableCell as="th">User</TableCell>
                <TableCell as="th">Comments</TableCell>
              </tr>
            </TableHead>
            <tbody>{commentList}</tbody>
          </table>
        </ScrollContainer>
      </Card>
    </NoPrint>
  );
};

export default OrderComments;
