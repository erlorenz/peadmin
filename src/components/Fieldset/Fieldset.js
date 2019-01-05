import React from 'react';
import styles from './FormikFieldset.module.scss';

export default ({ field, form, ...props }) => {
  const { touched, errors } = form;
  const { name } = field;
  const { label } = props;

  const errorMessage = touched[name] && errors[name] ? errors[name] : '';

  return (
    <fieldset>
      <label>{label}</label>
      <input {...field} {...props} />
      <p>{errorMessage}</p>
    </fieldset>
  );
};
