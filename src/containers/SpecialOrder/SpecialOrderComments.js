import React from 'react';
import formatDate from '../../utils/formatDate';

const SpecialOrderComments = ({ comments, styles }) => {
  const commentList = comments.map(comment => (
    <tr key={comment.time}>
      <td className={styles.adminTimestamp}>{formatDate(comment.time)}</td>
      <td className={styles.adminUser}>{comment.user}</td>
      <td className={styles.adminComment}>{comment.comment}</td>
    </tr>
  ));

  return (
    <div className="card">
      <table className={styles.comments}>
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

export default SpecialOrderComments;
