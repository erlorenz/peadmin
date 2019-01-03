import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Sidebar/Sidebar.module.scss';

export default function SidebarLink({
  children,
  route,
  icon,
  orderForm = false,
  hide = false,
}) {
  const liStyle = orderForm ? styles.orderForm : '';
  const linkStyle = orderForm ? 'orderFormLink' : 'listLink';
  const iconElement = icon ? <FontAwesomeIcon icon={icon} /> : null;
  const hideOnDesktop = hide ? styles.hide : '';

  return (
    <li className={`${styles.listItem} ${liStyle} ${hideOnDesktop}`}>
      <NavLink to={route} className={styles[linkStyle]}>
        {iconElement}
        {children}
      </NavLink>
    </li>
  );
}
