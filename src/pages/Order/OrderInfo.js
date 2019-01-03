import React from 'react';

const OrderInfo = ({ order, styles }) => {
  return (
    <div className={styles.info}>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{order.name}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{order.phone}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{order.email}</td>
          </tr>
          <tr>
            <th>Stripe ID:</th>
            <td>{order.stripeCharge}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>Hotel:</th>
            <td>{order.hotel}</td>
          </tr>
          <tr>
            <th>Room:</th>
            <td>{order.room}</td>
          </tr>
          <tr>
            <th>Pickup:</th>
            <td>
              {order.pickupDate} {order.pickupHour}
            </td>
          </tr>
          <tr>
            <th>Return:</th>
            <td>
              {order.returnDate} {order.returnHour}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;
