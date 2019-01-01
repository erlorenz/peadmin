import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './SignIn.module.scss';
import { AuthContext } from '../../contexts';
import SignInForm from './SignInForm';

class SignIn extends Component {
  static contextType = AuthContext;

  initialValues = { email: '', password: '' };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(`Submitted ${values.email}, ${values.password}`);

    const authData = {
      token: 'tok_visa',
      name: 'Erik Lorenz',
      access_level: 'admin',
      email: 'e@email.com',
    };

    this.context.signIn(authData);
    setSubmitting(false);
  };

  validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Not a valid email.')
      .required('Email required.'),
    password: yup
      .string()
      .min(6, 'Password needs to be more than 6 characters.')
      .required('Password required.'),
  });

  render() {
    return (
      <div className={styles.main}>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={this.validationSchema}
          render={SignInForm}
        />
      </div>
    );
  }
}

export default SignIn;
