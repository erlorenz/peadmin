import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import queryString from 'query-string';
import { injectStripe } from 'react-stripe-elements';

import { AuthContext } from '../../contexts';
import { CREATE_SPECIAL_ORDER } from '../../queries';
import CreateSpecialOrderForm from './CreateSpecialOrderForm';

class CreateSpecialOrder extends Component {
  static contextType = AuthContext;

  handleSubmit = mutation => async (values, { setSubmitting, setStatus }) => {
    try {
      // Format price and phone
      const total_price = Math.round(values.decimalPrice * 100);
      const phone = values.phoneAsNumber.toString();

      const { token } = await this.props.stripe.createToken({
        name: values.name,
      });
      console.log(token);

      const response = await mutation({
        variables: {
          email: values.email,
          name: values.name,
          description: values.description,
          total_price,
          phone,
          company: values.company,
          stripeToken: token.id,
        },
      });
      setSubmitting(false);
      console.log(response.data);

      this.props.history.push(
        `/dashboard/specialorders?${queryString.stringify({
          status: [
            'processed',
            'picked_up',
            'checked_in',
            'out_for_delivery',
            'completed',
          ],
          title: 'All Recent Special Orders',
        })}`,
      );
    } catch (e) {
      const message = 'Error with request';
      setStatus({ message });
      setSubmitting(false);
    }
  };

  render() {
    return (
      <Mutation mutation={CREATE_SPECIAL_ORDER}>
        {(mutation, { error, loading }) => (
          <CreateSpecialOrderForm
            mutation={mutation}
            requestError={error}
            loading={loading}
            onSubmit={this.handleSubmit(mutation)}
          />
        )}
      </Mutation>
    );
  }
}

export default injectStripe(CreateSpecialOrder);
