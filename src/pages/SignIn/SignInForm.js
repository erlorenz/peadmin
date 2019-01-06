import React from 'react';
import { Formik, Field, Form } from 'formik';
import Fieldset from '../../components/Fieldset/Fieldset';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import validationSchema from './validationSchema';
import { Button } from '../../components/UI';
import styled from 'styled-components/macro';

const SignInForm = ({ loading, onSubmit, signIn }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ status }) => (
        <StyledForm>
          <StyledLogo />

          <Field type="text" name="email" label="Email" component={Fieldset} />
          <Field
            type="password"
            name="password"
            label="Password"
            component={Fieldset}
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
  background: white;
  padding: 1rem;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius};

  @media (min-width: 550px) {
    padding: 3rem;
  }
`;

const StyledLogo = styled(Logo)`
  width: 80%;
  padding: 2rem 0;
`;

const Status = styled.div`
  color: #c43126;
`;
