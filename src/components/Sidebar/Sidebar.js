import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import queryString from 'query-string';
import {
  faClock,
  faCheckCircle,
  faExclamationTriangle,
  faGift,
  faBan,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import SidebarLink from '../SidebarLink';

const Sidebar = ({ user, isOpen, clicked }) => {
  // let sidebarClass = styles.sidebar;
  if (isOpen) {
    // sidebarClass = `${styles.sidebar} ${styles.sidebarOpen}`;
  }

  return (
    <nav className="" onClick={clicked}>
      <div className="">
        <Logo alt="Press Express Logo" />
      </div>
      <ul className="">
        <SidebarLink route="/dashboard/orderform" orderForm={true}>
          Order Form
        </SidebarLink>
        <SidebarLink
          route={`/dashboard/orders?${queryString.stringify({
            status: [
              'processed',
              'picked_up',
              'checked_in',
              'out_for_delivery',
            ],
          })}`}
          icon={faClock}>
          Active
        </SidebarLink>
        <SidebarLink route="/dashboard/specialorders" icon={faGift}>
          Special Orders
        </SidebarLink>
        <SidebarLink
          route="/dashboard/orders?status=completed"
          icon={faCheckCircle}>
          Completed
        </SidebarLink>
        <SidebarLink route="/dashboard/orders?status=cancelled" icon={faBan}>
          Cancelled
        </SidebarLink>
        <SidebarLink
          route="/dashboard/orders?status=exception"
          icon={faExclamationTriangle}>
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
