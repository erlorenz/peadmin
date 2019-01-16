import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { INSERT_REFUND } from '../queries';
import { AuthContext } from '../contexts/AuthProvider';
import setErrorMessage from '../utils/setErrorMessage';
import * as yup from 'yup';
import InsertRefundForm from './InsertRefundForm';

const InsertRefundModal = ({ order, onDismiss, type }) => {
  const auth = useContext(AuthContext);

  const idType =
    type === 'specialOrder' ? 'special_order_id' : 'customer_order_id';

  const refetchQueries =
    type === 'specialOrder' ? ['getSpecialOrder'] : ['getCustomerOrder'];

  const schema = yup.object().shape({
    admin_user_id: yup.string().required('Admin ID missing.'),
    amount: yup.number().required('Amount cannot be blank.'),
    [idType]: yup.string().required('Type missing.'),
    name: yup.string().required('Name missing.'),
    email: yup.string().required('Email missing.'),
    stripe_charge: yup.string().required('Stripe charge missing.'),
  });

  const handleSubmit = mutate => async (values, actions) => {
    const { setSubmitting, setStatus } = actions;

    const amount = Math.round(values.decimalAmount * 100);

    const variables = {
      admin_user_id: auth.state.id || '',
      amount,
      [idType]: order.id,
      email: order.email,
      name: order.name,
      stripe_charge: order.stripe_charge,
    };

    try {
      await schema.validate(variables);

      const result = await mutate({ variables });

      console.log('Insert Refund Result:', result);
      setSubmitting(false);
      onDismiss();
    } catch (e) {
      console.log(e.message);
      const message = setErrorMessage(e);
      setStatus({ message });
      setSubmitting(false);
    }
  };
  return (
    <Mutation mutation={INSERT_REFUND} refetchQueries={refetchQueries}>
      {(mutate, { data, error, loading }) => (
        <InsertRefundForm
          onSubmit={handleSubmit(mutate)}
          onDismiss={onDismiss}
        />
      )}
    </Mutation>
  );
};

export default InsertRefundModal;
