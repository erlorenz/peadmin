import React from 'react';
import { Card, Button, Select } from './UI';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components/macro';

const ChangeStatus = ({ onSubmit, loading }) => {
  return (
    <Formik initialValues={{ status: '' }} onSubmit={onSubmit}>
      {({ errors, status }) => (
        <Form>
          <StyledCard>
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
            <StyledButton type="submit">Update</StyledButton>
            <StyledButton cancel type="submit">
              Cancel
            </StyledButton>
          </StyledCard>
        </Form>
      )}
    </Formik>
  );
};

export default ChangeStatus;

const StyledButton = styled(Button)`
  margin: 1rem 0 0 0;
`;

const StyledCard = styled(Card)`
  justify-content: space-evenly;
`;
