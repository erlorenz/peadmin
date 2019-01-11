import React from 'react';
import { Mutation } from 'react-apollo';
import ChangeStatusForm from './ChangeStatusForm';
import { CHANGE_STATUS } from '../queries';

const ChangeStatusModal = ({ order, onDismiss, type }) => {
  const typeVariable =
    type === 'specialOrder' ? 'special_order_id' : 'customer_order_id';

  const handleSubmit = mutate => async (
    values,
    { setSubmitting, setStatus },
  ) => {
    try {
      const result = await mutate({
        variables: { status: values.status, [typeVariable]: order.id },
      });
      console.log(result);
      onDismiss();
    } catch (e) {
      console.log(e.message);
      setStatus();
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
