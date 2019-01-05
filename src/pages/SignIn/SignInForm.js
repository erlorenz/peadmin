import React from 'react';
import { Formik, Field, Form } from 'formik';
import Fieldset from '../../components/Fieldset/Fieldset';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import validationSchema from './validationSchema';
import { Button } from '../../components/UI';

const SignInForm = ({ loading, onSubmit, signIn }) => {
  return (
    <div>
      <Logo />

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
            <Button type="submit">Sign In</Button>
            <div>{status && status.message ? status.message : ''}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
