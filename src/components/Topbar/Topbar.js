import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import { ReactComponent as Hamburger } from '../../assets/img/hamburger.svg';
import styles from './Topbar.module.scss';

const Topbar = ({ email, clicked, userName }) => {
  return (
    <header className={styles.topbar}>
      <div className={styles.menu} onClick={clicked}>
        <Hamburger className={styles.hamburger} alt="menu icon" />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>Hello, {userName}!</span>
          <Gravatar
            email={email}
            default={'robohash'}
            className={styles.avatar}
          />
        </li>

        <li className={`${styles.listItem} ${styles.signOut}`}>
          <Link to="/signout">LOG OUT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Topbar;
