import React from 'react';

const OrderCart = ({ order, cartItems }) => {
  const cartList = cartItems.map(cartItem => (
    <tr key={cartItem.id}>
      <td>{cartItem.name}</td>
      <td>${cartItem.price / 100}</td>
      <td>{cartItem.quantity}</td>
      <td>${(cartItem.price * cartItem.quantity) / 100}</td>
    </tr>
  ));

  return (
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
  );
};

export default OrderCart;
