import React, { Component } from 'react';
import axios from 'axios';

class SpecialOrders extends Component {
  state = {
    orders: [],
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/orderform');
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
        onClick={() => this.props.history.push(`/admin/special/${order._id}`)}>
        <td>{order.name}</td>
        <td>{order.company}</td>
        <td>{order.phone}</td>
        <td>{order.totalPrice / 100}</td>
        <td>{order.status}</td>
      </tr>
    ));

    if (this.state.error) {
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
  }
}

export default SpecialOrders;
