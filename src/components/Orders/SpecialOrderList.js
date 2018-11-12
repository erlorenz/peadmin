import React from 'react';

const SpecialOrderList = ({ orders, error, history }) => {
  let orderRows;
  if (orders) {
    orderRows = orders.map(order => (
      <tr
        key={order._id}
        className="order-row"
        onClick={() => history.push(`/admin/specialOrder/${order._id}`)}>
        <td>{order.name}</td>
        <td>{order.company}</td>
        <td>{order.phone}</td>
        <td>{order.totalPrice / 100}</td>
        <td>{order.status}</td>
      </tr>
    ));
  }

  if (error) {
    return <h1>Error retrieving data, please log out and try again</h1>;
  }

  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    </div>
  );
};

export default SpecialOrderList;
