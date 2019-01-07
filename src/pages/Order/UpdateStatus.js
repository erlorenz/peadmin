import React from 'react';
import { Card, Button, Select } from '../../components/UI';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components/macro';

const UpdateStatus = ({ onSubmit, loading }) => {
  return (
    <StyledCard>
      <Formik initialValues={{ status: '' }} onSubmit={onSubmit}>
        {({ errors, status }) => (
          <Form>
            <Field component={Select} name="status">
              <option value="" disabled />
              <option value="processed">Processed</option>
              <option value="picked_up">Picked Up</option>
              <option value="checked_in">Checked In</option>
              <option value="out_for_delivery">Out For Delivery</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="exception">Exception</option>
            </Field>
            <StatusButton type="submit">Update Status</StatusButton>
          </Form>
        )}
      </Formik>
    </StyledCard>
  );
};

export default UpdateStatus;

const StatusButton = styled(Button)`
  margin: 1rem 0 0 0;
`;

const StyledCard = styled(Card)`
  justify-content: space-around;
  @media (min-width: 1000px) {
    width: 30%;
  }
`;
