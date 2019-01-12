import React from 'react';
import formatDate from '../../utils/formatDate';
// import styled from 'styled-components/macro';
import {
  ScrollContainer,
  Card,
  TableHead,
  TableRow,
  TableCell,
} from '../../components/UI';
import AddNew from '../../components/AddNew';

const OrderComments = ({ order, onClick }) => {
  const commentList = order.adminComments.map(comment => (
    <TableRow striped key={comment.created_at}>
      <TableCell>{formatDate(comment.created_at)}</TableCell>
      <TableCell>{comment.name}</TableCell>
      <TableCell>{comment.comment_body}</TableCell>
    </TableRow>
  ));

  return (
    <Card>
      <AddNew onClick={onClick} />
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
  );
};

export default OrderComments;
