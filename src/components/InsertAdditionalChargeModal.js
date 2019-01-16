import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { INSERT_ADDITIONAL_CHARGE } from '../queries';
import { AuthContext } from '../contexts/AuthProvider';
import setErrorMessage from '../utils/setErrorMessage';
import * as yup from 'yup';
import InsertAdditionalChargeForm from './InsertAdditionalChargeForm';

const InsertAdditionalChargeModal = ({ order, onDismiss, type }) => {
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
    stripe_customer: yup.string().required('Stripe customer missing.'),
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
      stripe_customer: order.stripe_customer,
    };

    try {
      await schema.validate(variables);

      const result = await mutate({ variables });

      console.log('Insert Additional Charge Result:', result);
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
    <Mutation
      mutation={INSERT_ADDITIONAL_CHARGE}
      refetchQueries={refetchQueries}>
      {(mutate, { data, error, loading }) => (
        <InsertAdditionalChargeForm
          onSubmit={handleSubmit(mutate)}
          onDismiss={onDismiss}
        />
      )}
    </Mutation>
  );
};

export default InsertAdditionalChargeModal;
