import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './FormikFieldset.module.scss';

export default ({ type, name, label, ...props }) => {
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>{label}</label>
      <Field name={name} type={type} {...props} className={styles.input} />
      <p className={styles.errorMessage}>
        <ErrorMessage name={name} />
      </p>
    </fieldset>
  );
};
