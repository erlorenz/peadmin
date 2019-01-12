import React from 'react';
import { Button, Notification } from './UI';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components/macro';
import FieldGroup from './FieldGroup/FieldGroup';

const ChangeStatusForm = ({ onSubmit, loading, onDismiss }) => {
  return (
    <Formik initialValues={{ status: '' }} onSubmit={onSubmit}>
      {({ status }) => (
        <Form>
          <Field component={FieldGroup} select={true} name="status">
            <option value="" disabled />
            <option value="processed">Processed</option>
            <option value="picked_up">Picked Up</option>
            <option value="checked_in">Checked In</option>
            <option value="out_for_delivery">Out For Delivery</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="exception">Exception</option>
          </Field>
          <Row>
            <LeftButton cancel type="button" onClick={onDismiss}>
              Cancel
            </LeftButton>
            <RightButton type="submit">Update</RightButton>
          </Row>
          {status && status.message && (
            <Notification>{status.message}</Notification>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ChangeStatusForm;

const RightButton = styled(Button)`
  display: inline-block;
  width: auto;
`;

const LeftButton = styled(RightButton)`
  margin-right: 0.8rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
