import React from 'react';
import { Formik, Field, Form } from 'formik';
import Fieldset from '../../components/Fieldset/Fieldset';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import validationSchema from './validationSchema';
import { Button, Card } from '../../components/UI';
import styled from 'styled-components';

const SignInForm = ({ loading, onSubmit, signIn }) => {
  return (
    <Layout>
      <Card>
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
      </Card>
    </Layout>
  );
};

export default SignInForm;

// Styled Components

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
