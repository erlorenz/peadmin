import React from 'react';
import styles from './OrderForm.module.scss';

const OrderForm = ({
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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={onChange}
          value={name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          onChange={onChange}
          value={phone}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          onChange={onChange}
          value={company}
        />
        <input
          type="number"
          placeholder="Total Price"
          name="totalPrice"
          step=".01"
          onChange={onChange}
          value={totalPrice}
        />
        <textarea
          name="description"
          rows="10"
          onChange={onChange}
          value={description}
        />
        <button type="submit" className="button">
          Submit
        </button>
        <p> {errorMessage}</p>
      </form>
    </div>
  );
};
export default OrderForm;
