import React, { Component, Fragment } from 'react';
import axios from '../axios-auth';

const sampleID = '5b39b7f5484d850014197528';

class Order extends Component {
  state = {
    order: {},
    id: sampleID,
    status: 'Completed',
    adminComment: null,
    cartItems: [],
    comments: [],
    username: 'erik@test.com',
  };

  async componentDidMount() {
    const response = await axios.get(`/admin/order/${this.state.id}`);
    console.log('the response:', response.data);
    this.setState({
      order: response.data,
      cartItems: response.data.cartItems,
      comments: response.data.adminComments,
    });
  }

  statusChangeHandler = async () => {
    if (this.state.status) {
      const response = await axios.patch(
        `/admin/order/${this.state.id}/status`,
        {
          status: this.state.status,
        },
      );
      console.log(response.data);
    } else {
      alert('No status updated!!');
    }
  };

  commentHandler = async () => {
    if (this.state.adminComment) {
      const response = await axios.patch(
        `/admin/order/${this.state.id}/comments`,
        {
          comment: this.state.adminComment,
          user: this.state.username,
        },
      );
      console.log(response.data);
    } else {
      alert('No comment added!!');
    }
  };

  render() {
    const { order, id, cartItems, comments } = this.state;
    console.log('cartitems:', cartItems);

    const cartList = cartItems.map(cartItem => (
      <tr key={cartItem.id}>
        <td>{cartItem.name}</td>
        <td>${cartItem.price / 100}</td>
        <td>{cartItem.quantity}</td>
      </tr>
    ));

    const commentList = comments.map(comment => (
      <tr key={comment.time}>
        <td>{comment.time}</td>
        <td>{comment.user}</td>
        <td>{comment.comment}</td>
      </tr>
    ));

    return (
      <Fragment>
        <h1 className="order__title">
          Order {id} - {order.status}
        </h1>
        <div className="order__info data">
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
        </div>

        <div className="order__status data">
          <ul>
            <li>Created: {order.created}</li>
            <li>Picked Up: {order.pickedUp}</li>
            <li>Checked In: {order.checkedIn}</li>
            <li>Out For Delivery: {order.outForDelivery}</li>
            <li>Delivered: {order.delivered}</li>
          </ul>
        </div>

        <table className="order__cart data">
          <tbody>
            {cartList}
            <tr>
              <td />
              <td />
              <td>${order.totalPrice / 100}</td>
            </tr>
          </tbody>
        </table>

        <table className="order__comments data">
          <tbody>{commentList}</tbody>
        </table>

        <div className="order__edits">
          <div className="order__addcomment">
            <textarea rows="5" />
            <button type="button" onClick={this.commentHandler}>
              Add Comment
            </button>
          </div>
          <div className="order__changestatus">
            <select defaultValue="">
              <option disabled />
              <option>Processed</option>
              <option>Picked Up</option>
              <option>Checked In</option>
              <option>Out For Delivery</option>
              <option>Completed</option>
              <option>Cancelled</option>
              <option>Refunded</option>
            </select>
            <button type="button" onClick={this.statusChangeHandler}>
              Update Status
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Order;
