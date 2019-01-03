import React from 'react';
import formatDate from '../../utils/formatDate';

const OrderStatus = ({ order }) => {
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Created</th>
            <th>Picked Up</th>
            <th>Checked In</th>
            <th>Out For Delivery</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formatDate(order.created)}</td>
            <td>{formatDate(order.pickedUp)}</td>
            <td>{formatDate(order.checkedIn)}</td>
            <td>{formatDate(order.outForDelivery)}</td>
            <td>{formatDate(order.completed)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderStatus;
