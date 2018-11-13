import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import { ReactComponent as Hamburger } from '../../assets/img/hamburger.svg';
import styles from './Topbar.module.scss';

class Topbar extends Component {
  render() {
    return (
      <header className={styles.topbar}>
        <div className={styles.menu} onClick={this.props.clicked}>
          <Hamburger className={styles.hamburger} alt="menu icon" />
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>Hello, {this.props.userName}!</span>
            <Gravatar
              email={this.props.user}
              default={'robohash'}
              className={styles.avatar}
            />
          </li>

          <li className={`${styles.listItem} ${styles.logOut}`}>
            <Link to="/logout">LOG OUT</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Topbar;
