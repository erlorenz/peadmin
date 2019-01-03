import React from 'react';
import { Query } from 'react-apollo';
import queryString from 'query-string';

const OrderList = ({ query, history, location, fields, type }) => {
  // Display order information if there is any

  const { status } = queryString.parse(location.search);
  console.log('status', status);

  const renderRows = orders => {
    return orders.map(order => (
      <tr
        key={order.id}
        className="order-row"
        onClick={() => history.push(`/dashboard/${type}/${order.id}`)}>
        {fields.map((field, index) =>
          field === 'total_price' ? (
            <td key={index}>{order[field] / 100}</td>
          ) : (
            <td key={index}>{order[field]}</td>
          ),
        )}
      </tr>
    ));
  };

  const renderHeaders = fields.map((field, index) => (
    <th key={index}>{field.toUpperCase()}</th>
  ));

  // Display different headers
  return (
    <Query query={query} variables={{ status }}>
      {({ data, error, loading }) => {
        if (loading) return <div>LOADING</div>;
        if (error) return <h1>{error.message}</h1>;
        console.log(data);
        const { getCustomerOrdersByStatus: orders } = data;
        return (
          <div className="card">
            <table>
              <thead>
                <tr>{renderHeaders}</tr>
              </thead>
              <tbody>{renderRows(orders)}</tbody>
            </table>
          </div>
        );
      }}
    </Query>
  );
};

export default OrderList;
