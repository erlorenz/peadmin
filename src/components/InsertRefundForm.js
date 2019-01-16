import React from 'react';
import { Button, Notification } from './UI';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components/macro';
import FieldGroup from './FieldGroup/FieldGroup';

const InsertRefundForm = ({ onSubmit, loading, onDismiss }) => {
  return (
    <Formik initialValues={{ decimalAmount: '' }} onSubmit={onSubmit}>
      {({ errors, status }) => (
        <Form>
          <Field component={FieldGroup} type="number" name="decimalAmount" />
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

export default InsertRefundForm;

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
