import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';

class OrderForm extends Component {
  state = {};
  render() {
    return <h1>ORDER FORM PAGE</h1>;
  }
}

const mapStateToProps = state => {
  return {
    orderStatus: state.order.status,
    errorMessage: state.order.errorMessage,
    message: state.order.message,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(OrderForm);
