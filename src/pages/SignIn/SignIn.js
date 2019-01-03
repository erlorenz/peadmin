import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Mutation } from 'react-apollo';
import styles from './SignIn.module.scss';
import { AuthContext } from '../../contexts';
import { SIGN_IN } from '../../queries';
import FormikFieldset from '../../components/FormikFieldset';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';

class SignIn extends Component {
  static contextType = AuthContext;

  validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Not a valid email.')
      .required('Email required.'),
    password: yup
      .string()
      .min(4, 'Password needs to be more than 6 characters.')
      .required('Password required.'),
  });

  handleSubmit = signIn => async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await signIn({
        variables: { email: values.email, password: values.password },
      });
      setSubmitting(false);
      const { _typename, ...authData } = response.data.signIn;
      this.context.signIn(authData);
    } catch (e) {
      const message = e.graphQLErrors
        ? 'Invalid username/password'
        : 'Network error';
      setStatus({ message });
      setSubmitting(false);
    }
  };

  render() {
    if (this.context.state.token) return <Redirect to="/dashboard/active" />;
    return (
      <div className={styles.container}>
        <div className={styles.formWrap}>
          <Logo className={styles.logo} />
          <Mutation mutation={SIGN_IN}>
            {(signIn, { error }) => {
              //
              // Render the form
              //
              return (
                <Formik
                  initialValues={{ email: '', password: '' }}
                  onSubmit={this.handleSubmit(signIn)}
                  validationSchema={this.validationSchema}>
                  {({ status }) => (
                    <Form>
                      <FormikFieldset type="text" name="email" label="Email" />
                      <FormikFieldset
                        type="password"
                        name="password"
                        label="Password"
                      />
                      <button type="submit">Sign In</button>

                      {/* Show error message from request */}

                      <div className={styles.errorMessage}>
                        {status && status.message && (
                          <div>{status.message}</div>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              );
            }}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default SignIn;
