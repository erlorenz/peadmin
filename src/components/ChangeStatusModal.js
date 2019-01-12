import React from 'react';
import { Mutation } from 'react-apollo';
import ChangeStatusForm from './ChangeStatusForm';
import { CHANGE_STATUS } from '../queries';
import * as yup from 'yup';
import setErrorMessage from '../utils/setErrorMessage';

const ChangeStatusModal = ({ order, onDismiss, type }) => {
  const idType =
    type === 'specialOrder' ? 'special_order_id' : 'customer_order_id';

  const schema = yup.object().shape({
    status: yup.string().required('Status cannot be blank.'),
    [idType]: yup.string().required('Type is required'),
  });

  const handleSubmit = mutate => async (values, actions) => {
    const { setSubmitting, setStatus } = actions;

    const variables = { status: values.status, [idType]: order.id };

    try {
      await schema.validate(variables);

      const result = await mutate({
        variables,
      });
      console.log(result);
      setSubmitting(false);
      onDismiss();
    } catch (e) {
      const message = setErrorMessage(e);
      setStatus({ message });
      setSubmitting(false);
    }
  };
  return (
    <Mutation
      mutation={CHANGE_STATUS}
      refetchQueries={['GetCustomerOrder', 'GetSpecialOrder']}>
      {(mutate, { data, error, loading }) => (
        <ChangeStatusForm
          onSubmit={handleSubmit(mutate)}
          onDismiss={onDismiss}
        />
      )}
    </Mutation>
  );
};

export default ChangeStatusModal;
