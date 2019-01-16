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
} from '../../components/UI';
import AddNew from '../../components/AddNew';
import Modal from '../../components/Modal';
import AddCommentModal from '../../components/AddCommentModal';

const OrderComments = ({ order, type }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const commentList = order.adminComments.map(comment => (
    <TableRow striped key={comment.created_at}>
      <TableCell>{formatDate(comment.created_at)}</TableCell>
      <TableCell>{comment.name}</TableCell>
      <TableCell>{comment.comment_body}</TableCell>
    </TableRow>
  ));

  return (
    <>
      {modalIsOpen && (
        <Modal onDismiss={handleToggleModal}>
          <AddCommentModal order={order} type={type} />
        </Modal>
      )}
      <Card>
        <AddNew onClick={handleToggleModal} />
        <CardTitle>COMMENTS</CardTitle>
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
    </>
  );
};

export default OrderComments;
