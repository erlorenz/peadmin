import React, { Component } from 'react';
import getOrders from '../../utils/getOrders';

class Active extends Component {
  state = {
    orders: [],
    error: false,
  };

  componentDidMount() {
    getOrders('active', this);
  }

  render() {
    const orderRows = this.state.orders.map(order => (
      <tr
        key={order._id}
        className="order-row"
        onClick={() => this.props.history.push(`/admin/order/${order._id}`)}>
        <td>{order.name}</td>
        <td>{order.hotel}</td>
        <td>{order.pickupDate + ' ' + order.pickupHour}</td>
        <td>{order.returnDate + ' ' + order.returnHour}</td>
        <td>{order.status}</td>
      </tr>
    ));

    if (this.state.error) {
      return <h1>Error retrieving the data, please log out and try again</h1>;
    }

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
  }
}

export default Active;
