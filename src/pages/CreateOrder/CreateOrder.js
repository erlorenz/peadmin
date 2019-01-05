import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { AuthContext } from '../../contexts';
import { CREATE_SPECIAL_ORDER } from '../../queries';
import { Redirect } from 'react-router-dom';
import CreateOrderForm from './CreateOrderForm';

class CreateOrder extends Component {
  static contextType = AuthContext;

  handleSubmit = signIn => async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await signIn({
        variables: { email: values.email, password: values.password },
      });
      setSubmitting(false);
      const { _typename, ...authData } = response.data.signIn;
      this.context.signIn(authData);
    } catch (e) {
      const message = e.graphQLErrors
        ? 'Invalid username/password'
        : 'Network error';
      setStatus({ message });
      setSubmitting(false);
    }
  };

  render() {
    if (this.context.state.token) return <Redirect to="/dashboard/active" />;
    return (
      <div>
        <Mutation mutation={CREATE_SPECIAL_ORDER}>
          {(mutation, { error, loading }) => (
            <CreateOrderForm
              mutation={mutation}
              requestError={error}
              loading={loading}
              onSubmit={this.handleSubmit(mutation)}
            />
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreateOrder;
