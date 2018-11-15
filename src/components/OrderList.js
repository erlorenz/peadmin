import React from 'react';

const OrderList = ({ orders, error, history, fields, type }) => {
  // Display order information if there is any

  let orderRows, orderHeaders;
  if (orders) {
    orderRows = orders.map(order => (
      <tr
        key={order._id}
        className="order-row"
        onClick={() => history.push(`/admin/${type}/${order._id}`)}>
        {fields.map((field, index) =>
          field === 'totalPrice' ? (
            <td key={index}>{order[field] / 100}</td>
          ) : (
            <td key={index}>{order[field]}</td>
          ),
        )}
      </tr>
    ));
    orderHeaders = fields.map((field, index) => (
      <th key={index}>{field.toUpperCase()}</th>
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
          <tr>{orderHeaders}</tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    </div>
  );
};

export default OrderList;
