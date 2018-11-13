import React from 'react';
import styles from './Login.module.scss';

const LoginForm = ({ email, password, onSubmit, onChange, errorMessage }) => {
  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit" className="button">
          Log In
        </button>
        <p> {errorMessage}</p>
      </form>
    </div>
  );
};

export default LoginForm;
