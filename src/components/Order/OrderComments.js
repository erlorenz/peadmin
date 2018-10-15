import React from 'react';
import format from 'date-fns/format';

const formattedDate = isoDate => format(new Date(isoDate), 'MM/DD/YYYY h:mm a');

const OrderComments = ({ comments }) => {
  const commentList = comments.map(comment => (
    <tr key={comment.time}>
      <td className="order__admin-timestamp-cell">
        {formattedDate(comment.time)}
      </td>
      <td className="order__admin-user-cell">{comment.user}</td>
      <td className="order__admin-comments-cell">{comment.comment}</td>
    </tr>
  ));

  return (
    <div className="card">
      <table className="order__comments ">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>User</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>{commentList}</tbody>
      </table>
    </div>
  );
};

export default OrderComments;
