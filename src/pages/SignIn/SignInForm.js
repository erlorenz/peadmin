import React from 'react';
import { Formik, Field, Form } from 'formik';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import validationSchema from './validationSchema';
import { Button, Notification } from '../../components/UI';
import styled from 'styled-components/macro';
import FieldGroup from '../../components/FieldGroup/FieldGroup';

const SignInForm = ({ loading, onSubmit, signIn }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ status }) => (
        <StyledForm>
          <StyledLogo />

          <Field
            type="text"
            name="email"
            placeholder="Email"
            component={FieldGroup}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={FieldGroup}
          />
          <Button type="submit">Sign In</Button>
          {status && status.message && (
            <Notification>{status.message}</Notification>
          )}
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignInForm;

const StyledForm = styled(Form)`
  padding: 1.8rem 1rem;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};

  @media (min-width: 550px) {
    padding: 1.8rem;
  }
`;

const StyledLogo = styled(Logo)`
  width: 150px;
  margin-bottom: 1.5rem;

  path {
    fill: white;
  }
`;
