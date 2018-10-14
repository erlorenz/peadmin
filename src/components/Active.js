import React, { Component } from 'react';
import axios from 'axios';

class Active extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    const response = await axios.get('/admin/active');
    console.log('the response:', response.data);
    this.setState({ orders: response.data });
  }

  render() {
    const orderRows = this.state.orders.map(order => (
      <tr key={order._id} className="order-row">
        <td>{order.name}</td>
        <td>{order.hotel}</td>
        <td>{order.pickupDate + ' ' + order.pickupHour}</td>
        <td>{order.returnDate + ' ' + order.returnHour}</td>
        <td>{order.status}</td>
      </tr>
    ));

    return (
      <table>
        <thead className="tableHeader">
          <tr>
            <td>Name</td>
            <td>Hotel</td>
            <td>Pickup</td>
            <td>Return</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    );
  }
}

export default Active;
