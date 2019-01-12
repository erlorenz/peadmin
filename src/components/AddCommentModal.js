import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { INSERT_ADMIN_COMMENT } from '../queries';
import AddCommentForm from './AddCommentForm';
import { AuthContext } from '../contexts/AuthProvider';

const AddCommentModal = ({ order, onDismiss, type }) => {
  const auth = useContext(AuthContext);

  console.log('AUTH CONTEXT: ', auth);

  const typeVariable =
    type === 'specialOrder' ? 'special_order_id' : 'customer_order_id';

  const handleSubmit = mutate => async (
    values,
    { setSubmitting, setStatus },
  ) => {
    try {
      const result = await mutate({
        variables: {
          admin_user_id: auth.state.id,
          comment_body: values.comment_body,
          [typeVariable]: order.id,
        },
      });
      console.log(result);
      setSubmitting(false);
      onDismiss();
    } catch (e) {
      console.log(e.message);
      const message = 'Error Adding Comment.';
      setStatus({ message });
      setSubmitting(false);
    }
  };
  return (
    <Mutation
      mutation={INSERT_ADMIN_COMMENT}
      refetchQueries={['GetCustomerOrder', 'GetSpecialOrder']}>
      {(mutate, { data, error, loading }) => (
        <AddCommentForm onSubmit={handleSubmit(mutate)} onDismiss={onDismiss} />
      )}
    </Mutation>
  );
};

export default AddCommentModal;
