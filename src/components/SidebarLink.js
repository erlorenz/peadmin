import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';

const SidebarLink = ({
  children,
  route,
  icon,
  orderForm = false,
  signOut = false,
}) => {
  const iconElement = icon ? <StyledIcon icon={icon} /> : null;

  return (
    <li>
      <StyledNavLink to={route} signout={signOut ? 'true' : undefined}>
        {iconElement}
        {children}
      </StyledNavLink>
    </li>
  );
};

export default SidebarLink;

const activeClassName = 'active';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  padding-left: 5rem;
  color: ${props => props.theme.navLinkColor};
  display: block;
  line-height: 50px;
  font-size: 1.2rem;

  :hover {
    color: ${props => props.theme.navLinkHover};
  }

  &.${activeClassName} {
    color: ${props => props.theme.navLinkHover};
  }

  @media (min-width: 1000px) {
    font-size: 1rem;
    padding-left: 3rem;
    display: ${props => (props.signout ? 'none' : 'block')};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
