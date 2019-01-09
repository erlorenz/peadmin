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
    <StyledLi>
      <StyledNavLink to={route} signout={signOut ? 'true' : undefined}>
        {iconElement}
        {children}
      </StyledNavLink>
    </StyledLi>
  );
};

export default SidebarLink;

const activeClassName = 'active';

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  padding-left: 5rem;
  color: #8d9498;
  display: block;
  line-height: 50px;
  font-size: 1.2rem;

  :hover {
    background-color: #eef0f3;
  }
  



  /* &.${activeClassName} {
    color: ${props => props.theme.navLinkHover}; */
  }

  @media (min-width: 1000px) {
    font-size: .9rem;
    padding-left: 2rem;
    display: ${props => (props.signout ? 'none' : 'block')};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1.2rem;
  font-size: 1rem;
`;

const StyledLi = styled.li`
  border-bottom: 1px solid #f2f2f2;

  :last-child {
    border-bottom: none;
  }

  @media (min-width: 1000px) {
    :nth-last-child(2) {
      border-bottom: none;
    }
  }
`;
