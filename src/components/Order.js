import React, { Component, Fragment } from 'react';
import axios from '../axios-auth';

const sampleID = '5b39b7f5484d850014197528';

class Order extends Component {
  state = {
    order: {},
    id: sampleID,
    status: null,
    adminComment: null,
    cartItems: [],
  };

  async componentDidMount() {
    const response = await axios.get(`/admin/order/${this.state.id}`);
    console.log('the response:', response.data);
    this.setState({ order: response.data, cartItems: response.data.cartItems });
  }

  render() {
    const { order, id, cartItems } = this.state;
    console.log('cartitems:', cartItems);

    const cartList = cartItems.map(cartItem => (
      <tr key={cartItem.id}>
        <td>{cartItem.name}</td>
        <td>${cartItem.price / 100}</td>
        <td>{cartItem.quantity}</td>
      </tr>
    ));

    return (
      <Fragment>
        <h1>
          Order {id} - {order.status}
        </h1>
        <div className="order__info">
          <ul>
            <li>Name: {order.name}</li>
            <li>Phone: {order.phone}</li>
            <li>Email: {order.email}</li>

            <li>Stripe ID: {order.stripeCharge}</li>
          </ul>
          <ul>
            <li>Hotel: {order.hotel}</li>
            <li>Room: {order.room}</li>
            <li>
              Pickup: {order.pickupDate} {order.pickupHour}
            </li>
            <li>
              Return: {order.returnDate} {order.returnHour}
            </li>
          </ul>
          <ul>
            <li>Created: {order.created}</li>
            <li>Picked Up: {order.pickedUp}</li>
            <li>Checked In: {order.checkedIn}</li>
            <li>Out for Delivery: {order.outForDelivery}</li>
            <li>Delivered: {order.delivered}</li>
            <li>Comments: {order.adminComment}</li>
          </ul>
        </div>

        <table className="order__cart">
          <tbody>
            {cartList}
            <tr>
              <td />
              <td />
              <td>${order.totalPrice / 100}</td>
            </tr>
          </tbody>
        </table>

        <div className="edits">
          <textarea rows="5" />
          <select>
            <option>Processed</option>
            <option>Picked Up</option>
            <option>Checked In</option>
            <option>Out for Delivery</option>
            <option>Completed</option>
            <option>Cancelled</option>
            <option>Refunded</option>
          </select>
          <button type="button">Submit</button>
        </div>
      </Fragment>
    );
  }
}

export default Order;
