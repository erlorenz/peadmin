import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';
import queryString from 'query-string';
import {
  faClock,
  faCheckCircle,
  faExclamationTriangle,
  faGift,
  faBan,
  faSignOutAlt,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import SidebarLink from '../../components/SidebarLink';

const Sidebar = ({ user, isOpen, onClick }) => {
  return (
    <Nav isOpen={isOpen} onClick={onClick}>
      <LogoWrapper>
        <Logo alt="Press Express Logo" />
      </LogoWrapper>
      <List>
        <SidebarLink route="/dashboard/specialorderform" icon={faCreditCard}>
          Order Form
        </SidebarLink>
        <SidebarLink
          route={`/dashboard/customerorders?${queryString.stringify({
            status: [
              'processed',
              'picked_up',
              'checked_in',
              'out_for_delivery',
            ],
            title: 'active_orders',
          })}`}
          icon={faClock}>
          Active
        </SidebarLink>
        <SidebarLink
          route={`/dashboard/specialorders?${queryString.stringify({
            status: [
              'processed',
              'picked_up',
              'checked_in',
              'out_for_delivery',
              'completed',
              'cancelled',
              'exception',
            ],
            title: 'special_orders',
          })}`}
          icon={faGift}>
          Special Orders
        </SidebarLink>
        <SidebarLink
          route={`/dashboard/customerorders?${queryString.stringify({
            status: ['completed'],
            title: 'completed_orders',
          })}`}
          icon={faCheckCircle}>
          Completed
        </SidebarLink>
        <SidebarLink
          route={`/dashboard/customerorders?${queryString.stringify({
            status: ['cancelled'],
            title: 'cancelled_orders',
          })}`}
          icon={faBan}>
          Cancelled
        </SidebarLink>
        <SidebarLink
          route={`/dashboard/customerorders?${queryString.stringify({
            status: ['exception'],
            title: 'exception_orders',
          })}`}
          icon={faExclamationTriangle}>
          Exceptions
        </SidebarLink>
        <SidebarLink route="/signout" signOut={true} icon={faSignOutAlt}>
          Sign Out
        </SidebarLink>
      </List>
    </Nav>
  );
};

export default withRouter(Sidebar);

const Nav = styled.nav`
  background-color: white;
  position: fixed;
  top: 65px;
  left: 0;
  width: 100vw;
  height: 100%;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: ease-in 0.2s all;
  z-index: 5;

  @media (min-width: 1000px) {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    transform: translateX(0);
    width: 255px;
  }

  @media print {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  height: 64px;
  display: none;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  padding: 0 3rem;

  @media (min-width: 1000px) {
    display: flex;
  }
`;

const List = styled.ul`
  margin-top: 1.5rem;
  padding: 0;
`;
