import React, { Component } from 'react';
import axios from 'axios';

class Active extends Component {
  state = {
    orders: [],
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/admin/active');
      console.log('the response:', response.data);
      this.setState({ orders: response.data, error: false });
    } catch (e) {
      this.setState({ error: true });
      console.log(e.response.data.message);
    }
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
      return <h1>Error retrieving data, please log out and try again</h1>;
    }

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
