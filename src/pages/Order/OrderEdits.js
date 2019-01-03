import React from 'react';

const OrderEdits = ({
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
        <option value="processed">Processed</option>
        <option value="pickedUp">Picked Up</option>
        <option value="checkedIn">Checked In</option>
        <option value="outForDelivery">Out For Delivery</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
        <option value="exception">Exception</option>
      </select>
      <button type="button" onClick={statusClicked}>
        Update Status
      </button>
    </div>
  </div>
);

export default OrderEdits;
