import React, { Component, Fragment } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import OrderInfo from '../components/Order/OrderInfo';
import OrderStatus from '../components/Order/OrderStatus';
import OrderCart from '../components/Order/OrderCart';
import OrderComments from '../components/Order/OrderComments';
import OrderEdits from '../components/Order/OrderEdits';

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

  commentAddHandler = async () => {
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
    const { order, id, cartItems, comments, adminComment } = this.state;

    if (this.state.error) {
      return <h1>Error retrieving data, please log out and try again</h1>;
    }

    return (
      <Fragment>
        <h1 className="order__title">
          Order {id} - {order.status}
        </h1>

        <OrderInfo order={order} />
        <OrderStatus order={order} />
        <OrderCart order={order} cartItems={cartItems} />
        <OrderComments comments={comments} />
        <OrderEdits
          adminComment={adminComment}
          changed={this.changeHandler}
          commentClicked={this.commentAddHandler}
          statusClicked={this.statusHandler}
        />

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
