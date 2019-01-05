import React from 'react';
import { Input } from '../UI';

export default ({ field, form, ...props }) => {
  const { touched, errors } = form;
  const { name } = field;
  const { label } = props;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';

  return (
    <fieldset>
      <label>{label}</label>
      <Input {...field} {...props} />
      <p>{errorMessage}</p>
    </fieldset>
  );
};
