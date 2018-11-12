import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faCheckCircle,
  faExclamationTriangle,
  faGift,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';

const Sidebar = ({ user, isOpen, clicked }) => {
  let sidebarClass = styles.sidebar;
  if (isOpen) {
    sidebarClass = `${styles.sidebar} ${styles.sidebarOpen}`;
  }

  return (
    <nav className={sidebarClass} onClick={clicked}>
      <div className={styles.logo}>
        <Logo alt="Press Express Logo" />
      </div>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.orderForm}`}>
          <Link to="/admin/orderform" className={styles.orderFormLink}>
            Order Form
          </Link>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/admin/active" className={styles.listLink}>
            <FontAwesomeIcon icon={faClock} /> Active
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/admin/completed" className={styles.listLink}>
            <FontAwesomeIcon icon={faCheckCircle} /> Completed
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/admin/specialorders" className={styles.listLink}>
            <FontAwesomeIcon icon={faGift} /> Special Orders
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/admin/cancelled" className={styles.listLink}>
            <FontAwesomeIcon icon={faBan} /> Cancelled
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/admin/exceptions" className={styles.listLink}>
            <FontAwesomeIcon icon={faExclamationTriangle} /> Exceptions
          </NavLink>
        </li>
        <li className={`${styles.listItem} ${styles.logOut}`}>
          <Link to="/logout" className={styles.listLink}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
