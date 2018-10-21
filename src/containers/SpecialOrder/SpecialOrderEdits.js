import React from 'react';

const SpecialOrderEdits = ({
  adminCommentValue,
  changed,
  commentClicked,
  statusValue,
  statusClicked,
  styles,
}) => (
  <div className={styles.edits}>
    <div className={styles.addcomment}>
      <textarea
        rows="5"
        name="adminComment"
        value={adminCommentValue}
        onChange={changed}
      />
      <button type="button" onClick={commentClicked}>
        Add Comment
      </button>
    </div>
    <div className={styles.changestatus}>
      <select value={statusValue} name="status" onChange={changed}>
        <option disabled />
        <option>Processed</option>
        <option>Picked Up</option>
        <option>Checked In</option>
        <option>Out For Delivery</option>
        <option>Completed</option>
        <option>Cancelled</option>
        <option>Refunded</option>
        <option>Additional Charge</option>
        <option>Returned</option>
      </select>
      <button type="button" onClick={statusClicked}>
        Update Status
      </button>
    </div>
  </div>
);

export default SpecialOrderEdits;
