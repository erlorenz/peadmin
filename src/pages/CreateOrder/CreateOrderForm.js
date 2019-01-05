import React from 'react';
import { Formik, Field, Form } from 'formik';
import Fieldset from '../../components/Fieldset/Fieldset';
import validationSchema from './validationSchema';

const CreateOrderForm = ({ loading, onSubmit, signIn }) => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ status }) => (
          <Form>
            <Field
              type="text"
              name="email"
              label="Email"
              component={Fieldset}
            />
            <Field
              type="password"
              name="password"
              label="Password"
              component={Fieldset}
            />
            <button type="submit">Sign In</button>
            <div>{status && status.message ? status.message : ''}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateOrderForm;
