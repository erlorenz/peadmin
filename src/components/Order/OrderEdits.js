import React from 'react';

const OrderEdits = ({
  adminCommentValue,
  changed,
  commentClicked,
  statusValue,
  statusClicked,
}) => (
  <div className="order__edits">
    <div className="order__addcomment">
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
    <div className="order__changestatus">
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

export default OrderEdits;
