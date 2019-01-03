import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Mutation } from 'react-apollo';
import styles from './SignIn.module.scss';
import { AuthContext } from '../../contexts';
import { SIGN_IN } from '../../queries';
import FormikFieldset from '../../components/FormikFieldset';

class SignIn extends Component {
  static contextType = AuthContext;

  initialValues = { email: '', password: '' };

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

  serverError = error => {
    if (error) return error.graphQLErrors[0].message;
  };

  handleSubmit = signIn => async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await signIn({
        variables: { email: values.email, password: values.password },
      });

      const { _typename, ...authData } = response.data.signIn;
      this.context.signIn(authData);
    } catch (e) {
      console.log(e.message);
    }

    setSubmitting(false);
  };

  render() {
    return (
      <div className={styles.main}>
        <Mutation mutation={SIGN_IN}>
          {(signIn, { error }) => {
            return (
              <Formik
                initialValues={this.initialValues}
                onSubmit={this.handleSubmit(signIn)}
                validationSchema={this.validationSchema}>
                {() => (
                  <Form className={styles.form}>
                    <FormikFieldset type="text" name="email" label="Email" />
                    <FormikFieldset
                      type="password"
                      name="password"
                      label="Password"
                    />
                    <button type="submit">Sign In</button>
                    <div className={styles.errorMessage}>
                      {this.serverError(error)}
                    </div>
                  </Form>
                )}
              </Formik>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default SignIn;
