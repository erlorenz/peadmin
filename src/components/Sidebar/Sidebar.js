import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import {
  faClock,
  faCheckCircle,
  faExclamationTriangle,
  faGift,
  faBan,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import SidebarLink from '../SidebarLink';
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
        <SidebarLink route="/dashboard/orderform" orderForm={true}>
          Order Form
        </SidebarLink>
        <SidebarLink route="/dashboard/active" icon={faClock}>
          Active
        </SidebarLink>
        <SidebarLink route="/dashboard/specialorders" icon={faGift}>
          Special Orders
        </SidebarLink>
        <SidebarLink route="/dashboard/completed" icon={faCheckCircle}>
          Completed
        </SidebarLink>
        <SidebarLink route="/dashboard/cancelled" icon={faBan}>
          Cancelled
        </SidebarLink>
        <SidebarLink route="/dashboard/exceptions" icon={faExclamationTriangle}>
          Exceptions
        </SidebarLink>
        <SidebarLink route="/signout" hide icon={faSignOutAlt}>
          Log Out
        </SidebarLink>
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
