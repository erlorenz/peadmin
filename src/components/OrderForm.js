import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import Spinner from 'react-spinkit';

class OrderForm extends Component {
  state = {};

  onSubmit = formData => {
    this.props.submitOrder(formData);
  };

  render() {
    if (this.props.orderStatus === 'success') {
      return <Redirect to="/admin/special" />;
    }

    if (this.props.orderStatus === 'pending') {
      return <Spinner name="three-bounce" className="spinner" />;
    }

    return (
      <div className="card">
        <form
          className="order-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            type="text"
            component="input"
            name="name"
            placeholder="Full Name"
          />
          <Field
            type="email"
            component="input"
            name="email"
            placeholder="Email"
          />
          <Field
            type="tel"
            placeholder="Phone Number"
            name="phone"
            component="input"
          />
          <Field
            type="text"
            placeholder="Company"
            name="company"
            component="input"
          />
          <Field
            type="number"
            placeholder="Total Price"
            name="totalPrice"
            component="input"
          />
          <Field name="description" component="textarea" rows="10" />
          <button type="submit" className="button">
            Submit
          </button>
          <p> {this.props.errorMessage}</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderStatus: state.order.status,
    errorMessage: state.order.errorMessage,
    message: state.order.message,
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  reduxForm({ form: 'orderForm' }),
)(OrderForm);
