import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Portal from '../../components/Portal';
import OrderForm from './OrderForm';
import submitOrderForm from './submitOrderForm';

class OrderFormContainer extends Component {
  state = {
    orderStatus: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    totalPrice: '',
    description: '',
    errorMessage: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    submitOrderForm(this.state, this);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.state.orderStatus === 'success') {
      return <Redirect to="/admin/specialorders" />;
    }

    if (this.state.orderStatus === 'pending') {
      return (
        <Portal>
          <Spinner name="three-bounce" className="spinner" />
        </Portal>
      );
    }

    return (
      <OrderForm
        name={this.state.name}
        phone={this.state.phone}
        email={this.state.email}
        description={this.state.description}
        company={this.state.company}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default OrderFormContainer;
