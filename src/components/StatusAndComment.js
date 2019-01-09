import React from 'react';
import { CardRow } from './UI';
import { Mutation } from 'react-apollo';
import { CHANGE_STATUS } from '../queries';
import ChangeStatus from './ChangeStatus';

const StatusAndComment = ({ order }) => {
  const handleSubmitStatus = mutate => async (
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

  // const handleSubmitComment = mutate => async (
  //   values,
  //   { setSubmitting, setStatus },
  // ) => {
  //   try {
  //     const result = await mutate({ variables: {} });
  //   } catch (e) {
  //     console.log(e.message);
  //     setStatus();
  //   }
  // };

  return (
    <CardRow>
      <Mutation mutation={CHANGE_STATUS}>
        {(mutate, { data, error, loading }) => (
          <ChangeStatus onSubmit={handleSubmitStatus(mutate)} />
        )}
      </Mutation>
      {/* <Mutation mutation={ADD_COMMENT}>
        {(mutate, { data, error, loading }) => (
          <AddComment onSubmit={handleSubmitComment(mutate)} />
        )}
      </Mutation> */}
    </CardRow>
  );
};

export default StatusAndComment;
