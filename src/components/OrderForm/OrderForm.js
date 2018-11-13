import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import Spinner from 'react-spinkit';
// import Portal from '../Portal';
import styles from './OrderForm.module.scss';

class OrderForm extends Component {
  onSubmit = () => console.log('Order submitted!');

  render() {
    // if (this.props.orderStatus === 'success') {
    //   return <Redirect to="/admin/specialorders" />;
    // }

    // if (this.props.orderStatus === 'pending') {
    //   return (
    //     <Portal>
    //       <Spinner name="three-bounce" className="spinner" />
    //     </Portal>
    //   );
    // }

    return (
      <div className={styles.orderForm}>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" name="phone" />
          <input type="text" placeholder="Company" name="company" />
          <input type="number" placeholder="Total Price" name="totalPrice" />
          <textarea name="description" rows="10" />
          <button type="submit" className="button">
            Submit
          </button>
          <p> {this.props.errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default OrderForm;
