import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Portal from '../Portal';
import SpecialOrderForm from './SpecialOrderForm';

class OrderForm extends Component {
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

  handleSubmit = () => console.log('Order submitted!');

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.props.orderStatus === 'success') {
      return <Redirect to="/admin/specialorders" />;
    }

    if (this.props.orderStatus === 'pending') {
      return (
        <Portal>
          <Spinner name="three-bounce" className="spinner" />
        </Portal>
      );
    }

    return (
      <SpecialOrderForm
        name={this.state.name}
        phone={this.state.phone}
        email={this.state.email}
        description={this.state.description}
        company={this.state.company}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderForm;
