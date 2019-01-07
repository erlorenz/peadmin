import React from 'react';
import { Input, Label, TextArea } from '../UI';
import styled from 'styled-components/macro';

const Fieldset = ({ field, form, ...props }) => {
  const { touched, errors } = form;
  const { name } = field;
  const { label, textarea = false } = props;

  const element = textarea ? (
    <TextArea
      error={touched[name] && errors[name] ? 'true' : undefined}
      {...field}
      {...props}
    />
  ) : (
    <Input
      error={touched[name] && errors[name] ? 'true' : undefined}
      {...field}
      {...props}
    />
  );

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';

  return (
    <StyledFieldset>
      <Label>{label}</Label>
      {element}
      <ErrorText>{errorMessage}</ErrorText>
    </StyledFieldset>
  );
};

export default Fieldset;

const StyledFieldset = styled.fieldset`
  margin-bottom: 1.2rem;
  position: relative;
`;

const ErrorText = styled.div`
  color: ${props => props.theme.errorColor};
`;
