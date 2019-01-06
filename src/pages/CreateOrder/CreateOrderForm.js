import React from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components/macro';
import Fieldset from '../../components/Fieldset/Fieldset';
import validationSchema from './validationSchema';
import { Card } from '../../components/UI';

const CreateOrderForm = ({ loading, onSubmit, signIn }) => {
  return (
    <Card>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ status }) => (
          <StyledForm>
            <Field
              type="text"
              name="email"
              label="Email"
              component={Fieldset}
            />
            <Field type="text" name="name" label="Name" component={Fieldset} />
            <Field type="text" name="name" label="Name" component={Fieldset} />
            <Field type="text" name="name" label="Name" component={Fieldset} />
            <Field type="text" name="name" label="Name" component={Fieldset} />
            <Field type="text" name="name" label="Name" component={Fieldset} />
            <Field type="text" name="name" label="Name" component={Fieldset} />

            <button type="submit">Sign In</button>
            <div>{status && status.message ? status.message : ''}</div>
          </StyledForm>
        )}
      </Formik>
    </Card>
  );
};

export default CreateOrderForm;

const StyledForm = styled(Form)`
  @media (min-width: 1000px) {
    max-width: 450px;
  }
`;
