import React from 'react';
import { Mutation } from 'react-apollo';
import UpdateStatusForm from './UpdateStatusForm';
import { UPDATE_STATUS } from '../queries';
import * as yup from 'yup';
import setErrorMessage from '../utils/setErrorMessage';

const UpdateStatusModal = ({ order, onDismiss, type }) => {
  const idType =
    type === 'specialOrder' ? 'special_order_id' : 'customer_order_id';

  const refetchQueries =
    type === 'specialOrder'
      ? ['getSpecialOrder']
      : ['getCustomerOrder', 'getCustomerOrdersByStatus'];

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
      console.log('Change Result:', result);
      setSubmitting(false);
      onDismiss();
    } catch (e) {
      const message = setErrorMessage(e);
      setStatus({ message });
      setSubmitting(false);
    }
  };
  return (
    <Mutation mutation={UPDATE_STATUS} refetchQueries={refetchQueries}>
      {(mutate, { data, error, loading }) => (
        <UpdateStatusForm
          onSubmit={handleSubmit(mutate)}
          onDismiss={onDismiss}
        />
      )}
    </Mutation>
  );
};

export default UpdateStatusModal;
