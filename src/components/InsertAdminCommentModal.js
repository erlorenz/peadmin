import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { INSERT_ADMIN_COMMENT } from '../queries';
import InsertAdminCommentForm from './InsertAdminCommentForm';
import { AuthContext } from '../contexts/AuthProvider';
import setErrorMessage from '../utils/setErrorMessage';
import * as yup from 'yup';

const InsertAdminCommentModal = ({ order, onDismiss, type }) => {
  const auth = useContext(AuthContext);

  const idType =
    type === 'specialOrder' ? 'special_order_id' : 'customer_order_id';

  const refetchQueries =
    type === 'specialOrder' ? ['getSpecialOrder'] : ['getCustomerOrder'];

  const schema = yup.object().shape({
    admin_user_id: yup.string().required('Admin ID missing.'),
    comment_body: yup.string().required('Cannot submit blank comment.'),
    [idType]: yup.string().required('Type is required'),
  });

  const handleSubmit = mutate => async (values, actions) => {
    const { setSubmitting, setStatus } = actions;

    const variables = {
      admin_user_id: auth.state.id || '',
      comment_body: values.comment_body,
      [idType]: order.id,
    };

    try {
      await schema.validate(variables);

      const result = await mutate({ variables });

      console.log('Add Comment Result:', result);
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
    <Mutation mutation={INSERT_ADMIN_COMMENT} refetchQueries={refetchQueries}>
      {(mutate, { data, error, loading }) => (
        <InsertAdminCommentForm
          onSubmit={handleSubmit(mutate)}
          onDismiss={onDismiss}
        />
      )}
    </Mutation>
  );
};

export default InsertAdminCommentModal;
