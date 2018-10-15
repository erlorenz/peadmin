import React, { Component, Fragment } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import { connect } from 'react-redux';

const formattedDate = isoDate => format(new Date(isoDate), 'MM/DD/YYYY h:mm a');

class Order extends Component {
  state = {
    order: {},
    id: this.props.match.params.id,
    status: '',
    adminComment: '',
    cartItems: [],
    comments: [],
    username: this.props.userName,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`/admin/order/${this.state.id}`);
      console.log('the response:', response.data);
      this.setState({
        order: response.data,
        error: false,
        cartItems: response.data.cartItems,
        comments: response.data.adminComments,
      });
    } catch (e) {
      this.setState({ error: true });
      console.log(e.response.data.message);
    }
  }

  statusChangeHandler = async () => {
    if (this.state.status) {
      try {
        const response = await axios.patch(
          `/admin/order/${this.state.id}/status`,
          {
            status: this.state.status,
          },
        );
        this.setState({
          order: response.data,
          error: false,
          cartItems: response.data.cartItems,
          comments: response.data.adminComments,
          status: '',
          adminComment: '',
        });
        console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    } else {
      alert('No status updated!!');
    }
  };

  commentHandler = async () => {
    if (this.state.adminComment) {
      try {
        const response = await axios.patch(
          `/admin/order/${this.state.id}/comments`,
          {
            comment: this.state.adminComment,
            user: this.state.username,
          },
        );
        this.setState({
          order: response.data,
          error: false,
          cartItems: response.data.cartItems,
          comments: response.data.adminComments,
          adminComment: '',
          status: '',
        });
        console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    } else {
      alert('No comment added!!');
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { order, id, cartItems, comments } = this.state;
    console.log('cartitems:', cartItems);

    const cartList = cartItems.map(cartItem => (
      <tr key={cartItem.id}>
        <td>{cartItem.name}</td>
        <td>${cartItem.price / 100}</td>
        <td>{cartItem.quantity}</td>
        <td>${(cartItem.price * cartItem.quantity) / 100}</td>
      </tr>
    ));

    const commentList = comments.map(comment => (
      <tr key={comment.time}>
        <td className="order__admin-timestamp-cell">
          {formattedDate(comment.time)}
        </td>
        <td className="order__admin-user-cell">{comment.user}</td>
        <td className="order__admin-comments-cell">{comment.comment}</td>
      </tr>
    ));

    if (this.state.error) {
      return <h1>Error retrieving data, please log out and try again</h1>;
    }

    return (
      <Fragment>
        <h1 className="order__title">
          Order {id} - {order.status}
        </h1>
        <div className="order__info card">
          <table className="order__info1">
            <tr>
              <th>Name:</th>
              <td>{order.name}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{order.phone}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{order.email}</td>
            </tr>
            <tr>
              <th>Stripe ID:</th>
              <td>{order.stripeCharge}</td>
            </tr>
          </table>
          <table className="order__info2">
            <tr>
              <th>Hotel:</th>
              <td>{order.hotel}</td>
            </tr>
            <tr>
              <th>Room:</th>
              <td>{order.room}</td>
            </tr>
            <tr>
              <th>Pickup:</th>
              <td>
                {order.pickupDate} {order.pickupHour}
              </td>
            </tr>
            <tr>
              <th>Return:</th>
              <td>
                {order.returnDate} {order.returnHour}
              </td>
            </tr>
          </table>
        </div>

        <div className="card">
          <table className="order__status">
            <thead>
              <tr>
                <th>Created</th>
                <th>Picked Up</th>
                <th>Checked In</th>
                <th>Out For Delivery</th>
                <th>Delivered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formattedDate(order.created)}</td>
                <td>{formattedDate(order.pickedUp)}</td>
                <td>{formattedDate(order.checkedIn)}</td>
                <td>{formattedDate(order.outForDelivery)}</td>
                <td>{formattedDate(order.delivered)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <table className="order__cart">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartList}
              <tr>
                <td />
                <td />
                <td />
                <th>Total: ${order.totalPrice / 100}</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <table className="order__comments ">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>{commentList}</tbody>
          </table>
        </div>

        <div className="order__edits">
          <div className="order__addcomment">
            <textarea
              rows="5"
              name="adminComment"
              value={this.state.adminComment}
              onChange={this.changeHandler}
            />
            <button type="button" onClick={this.commentHandler}>
              Add Comment
            </button>
          </div>
          <div className="order__changestatus">
            <select
              value={this.state.status}
              name="status"
              onChange={this.changeHandler}>
              <option disabled />
              <option>Processed</option>
              <option>Picked Up</option>
              <option>Checked In</option>
              <option>Out For Delivery</option>
              <option>Completed</option>
              <option>Cancelled</option>
              <option>Refunded</option>
              <option>Additional Charge</option>
              <option>Returned</option>
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

const mapStateToProps = state => {
  return { user: state.auth.user, userName: state.auth.userName };
};
export default connect(mapStateToProps)(Order);
