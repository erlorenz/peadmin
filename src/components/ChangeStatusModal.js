import React from 'react';
import { Mutation } from 'react-apollo';
import { CHANGE_STATUS } from '../queries';
import ChangeStatusForm from './ChangeStatusForm';

const ChangeStatusModal = ({ order, refetch, onClick }) => {
  const handleSubmit = mutate => async (
    values,
    { setSubmitting, setStatus },
  ) => {
    try {
      const result = await mutate({ variables: { status: values.status } });
      console.log(result);
    } catch (e) {
      console.log(e.message);
      setStatus();
    }
  };
  return (
    <Mutation mutation={CHANGE_STATUS}>
      {(mutate, { data, error, loading }) => (
        <ChangeStatusForm onSubmit={handleSubmit(mutate)} onClick={onClick} />
      )}
    </Mutation>
  );
};

export default ChangeStatusModal;
