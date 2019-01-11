import React from 'react';
import { Formik, Field, Form } from 'formik';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import validationSchema from './validationSchema';
import { Button } from '../../components/UI';
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
          <Status>{status && status.message ? status.message : ''}</Status>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SignInForm;

const StyledForm = styled(Form)`
  padding: 1.8rem 1rem;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};

  @media (min-width: 550px) {
    padding: 1.8rem;
  }
`;

const StyledLogo = styled(Logo)`
  width: 70%;
  margin-bottom: 1rem;
  padding: 1rem 0;

  path {
    fill: white;
  }
  @media (min-width: 1000px) {
    margin-bottom: 1.5rem;
  }
`;

const Status = styled.div`
  color: #c43126;
`;
