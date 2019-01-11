import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components/macro';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import Loader from 'react-loader-spinner';
import validationSchema from './validationSchema';
import { Card, Button } from '../../components/UI';

const CreateSpecialOrderForm = ({ loading, onSubmit, signIn }) => {
  const initialValues = {
    email: '',
    company: '',
    name: '',
    description: '',
    phoneAsNumber: '',
    decimalPrice: '',
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ status }) => (
          <StyledForm>
            <Field
              type="text"
              name="name"
              label="Name"
              component={FieldGroup}
            />
            <Field
              type="number"
              name="phoneAsNumber"
              label="Phone"
              component={FieldGroup}
            />
            <Field
              type="text"
              name="company"
              label="Company"
              component={FieldGroup}
            />
            <Field
              type="text"
              name="email"
              label="Email"
              component={FieldGroup}
            />
            <Field
              type="number"
              step=".01"
              name="decimalPrice"
              label="Total Price"
              component={FieldGroup}
            />
            <Field
              type="text"
              name="description"
              label="Description"
              textarea={true}
              rows="5"
              component={FieldGroup}
            />

            <Button type="submit">
              {loading ? <Loader type="Puff" height="1.1rem" /> : 'Sign In'}
            </Button>

            <div>{status && status.message ? status.message : ''}</div>
          </StyledForm>
        )}
      </Formik>
    </Card>
  );
};

export default CreateSpecialOrderForm;

const StyledForm = styled(Form)`
  @media (min-width: 1000px) {
    max-width: 450px;
  }
`;
