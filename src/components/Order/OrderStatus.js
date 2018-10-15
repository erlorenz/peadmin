import React from 'react';
import format from 'date-fns/format';

const formattedDate = isoDate => format(new Date(isoDate), 'MM/DD/YYYY h:mm a');

const OrderStatus = ({ order }) => {
  return (
    <div className="card">
      <table className="order__status">
        <thead>
          <tr>
            <th>Created</th>
            <th>Picked Up</th>
            <th>Checked In</th>
            <th>Out For Delivery</th>
            <th>Delivered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formattedDate(order.created)}</td>
            <td>{formattedDate(order.pickedUp)}</td>
            <td>{formattedDate(order.checkedIn)}</td>
            <td>{formattedDate(order.outForDelivery)}</td>
            <td>{formattedDate(order.delivered)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;
