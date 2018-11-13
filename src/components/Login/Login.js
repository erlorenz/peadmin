import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import styles from './Login.module.scss';

class Login extends Component {
  onSubmit = () => console.log('Form submitted');

  render() {
    // if (this.props.authenticated) {
    //   return <Redirect to="/admin/active" />;
    // }

    return (
      <div className={styles.main}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit" className="button">
            Log In
          </button>
          <p> {this.props.errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default Login;
