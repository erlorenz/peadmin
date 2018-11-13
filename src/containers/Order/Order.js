import React, { Component, Fragment } from 'react';
import axios from 'axios';
import OrderInfo from './OrderInfo';
import OrderStatus from './OrderStatus';
import OrderCart from './OrderCart';
import OrderComments from './OrderComments';
import OrderEdits from './OrderEdits';
import styles from './Order.module.scss';

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
        const response = await axios.put(
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
        const response = await axios.put(
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
      } catch (e) {
        alert(e.response.data);
      }
    } else {
      alert('No comment added!!');
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { order, id, cartItems, comments, adminComment, status } = this.state;

    if (this.state.error) {
      return <h1>Error retrieving data, please log out and try again</h1>;
    }

    const title = `${id} - ${order.status}`;

    return (
      <Fragment>
        <div className={styles.title}>
          <p>{order.status && id ? title.toUpperCase() : null}</p>
        </div>

        <OrderInfo order={order} styles={styles} />
        <OrderStatus order={order} styles={styles} />
        <OrderCart order={order} cartItems={cartItems} styles={styles} />
        <OrderComments comments={comments} styles={styles} />
        <OrderEdits
          adminCommentValue={adminComment}
          statusValue={status}
          changed={this.changeHandler}
          commentClicked={this.commentAddHandler}
          statusClicked={this.statusChangeHandler}
          styles={styles}
        />
      </Fragment>
    );
  }
}

export default Order;
