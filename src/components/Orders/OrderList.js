import React from 'react';

const OrderList = ({ orders, error, history }) => {
  // Display order information if there is any
  let orderRows;
  if (orders) {
    orderRows = orders.map(order => (
      <tr
        key={order._id}
        className="order-row"
        onClick={() => history.push(`/admin/order/${order._id}`)}>
        <td>{order.name}</td>
        <td>{order.hotel}</td>
        <td>{order.pickupDate + ' ' + order.pickupHour}</td>
        <td>{order.returnDate + ' ' + order.returnHour}</td>
        <td>{order.status}</td>
      </tr>
    ));
  }

  // Display error message
  if (error) {
    return <h1>Error retrieving the data, please log out and try again</h1>;
  }

  // Display different headers

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hotel</th>
            <th>Pickup</th>
            <th>Return</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    </div>
  );
};

export default OrderList;
