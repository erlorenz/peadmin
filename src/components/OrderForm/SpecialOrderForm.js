import React from 'react';
import styles from './OrderForm.module.scss';

const SpecialOrderForm = ({
  onChange,
  onSubmit,
  errorMessage,
  email,
  phone,
  company,
  totalPrice,
  description,
  name,
}) => {
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
};
export default SpecialOrderForm;
