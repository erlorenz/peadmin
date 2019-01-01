import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import styles from './SignIn.module.scss';
// import DisplayFormikState from '../../components/DisplayFormikState';

const SignInForm = props => {
  return (
    <Form className={styles.form}>
      <Field type="text" name="email" placeholder="Email" />
      <div className={styles.errorMessage}>
        <ErrorMessage name="email" className={styles.errorMessage} />
      </div>
      <Field type="password" name="password" placeholder="Password" />
      <div className={styles.errorMessage}>
        <ErrorMessage name="password" className={styles.errorMessage} />
      </div>
      <button type="submit" disabled={props.isSubmitting}>
        Sign In
      </button>
      {/* <DisplayFormikState {...props} /> */}
    </Form>
  );
};

export default SignInForm;
