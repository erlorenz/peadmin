import React from 'react';
import { Card, Button, Select } from './UI';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components/macro';

const ChangeStatusForm = ({ onSubmit, loading, onClick }) => {
  return (
    <Formik initialValues={{ status: '' }} onSubmit={onSubmit}>
      {({ errors, status }) => (
        <Overlay onClick={onClick}>
          <StyledForm onClick={e => e.stopPropagation()}>
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
              <StyledButton cancel type="button" onClick={onClick}>
                Cancel
              </StyledButton>
            </StyledCard>
          </StyledForm>
        </Overlay>
      )}
    </Formik>
  );
};

export default ChangeStatusForm;

const StyledButton = styled(Button)`
  margin: 1rem 0 0 0;
`;

const StyledCard = styled(Card)`
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledForm = styled(Form)`
  height: 100%;
  width: 100%;
  max-width: 450px;

  @media (min-width: 450px) {
    height: auto;
  }
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000000bd;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 450px) {
    padding: 2rem;
  }
`;
