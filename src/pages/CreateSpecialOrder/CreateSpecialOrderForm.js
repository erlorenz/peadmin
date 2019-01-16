import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components/macro';
import FieldGroup from '../../components/FieldGroup/FieldGroup';
import Loader from 'react-loader-spinner';
import { CardElement } from 'react-stripe-elements';

import validationSchema from './validationSchema';
import { Card, Button } from '../../components/UI';
import theme from '../../styles/theme';
import { Label } from '../../components/FieldGroup/FieldGroupStyles';

const CreateSpecialOrderForm = ({ loading, onSubmit, signIn }) => {
  const initialValues = {
    email: '',
    company: '',
    name: '',
    description: '',
    phoneAsNumber: '',
    decimalPrice: '',
  };

  const style = {
    base: {
      color: 'inherit',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: '16px',
      lineHeight: '1.5',
    },
    invalid: {
      color: theme.errorColor,
      iconColor: theme.errorColor,
    },
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
            <Label>Card Details</Label>
            <StyledCardElement style={style} />

            <Button type="submit">
              {loading ? (
                <Loader type="Puff" height="1.1rem" />
              ) : (
                'Create Order'
              )}
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

const StyledCardElement = styled(CardElement)`
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  border: 1px solid #dbdbdb;
  border-radius: ${theme.borderRadius};
`;
