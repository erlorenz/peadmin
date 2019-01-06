import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarLink = ({
  children,
  route,
  icon,
  orderForm = false,
  hide = false,
}) => {
  const iconElement = icon ? <FontAwesomeIcon icon={icon} /> : null;

  return (
    <li>
      <NavLink to={route}>
        {iconElement}
        {children}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
