import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import styled from 'styled-components/macro';
import { ReactComponent as HamburgerIcon } from '../../assets/img/hamburger.svg';

const Topbar = ({ email, onClick, userName }) => {
  return (
    <Header>
      <Menu onClick={onClick}>
        <StyledHamburgerIcon alt="menu icon" />
      </Menu>
      <List>
        <ListItem>
          <span>Hello, {userName}!</span>
          <StyledGravatar email={email} default={'robohash'} />
        </ListItem>

        <ListItem signIn>
          <StyledLink to="/signout">LOG OUT</StyledLink>
        </ListItem>
      </List>
    </Header>
  );
};

export default Topbar;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4rem;
  background: ${props => props.theme.topbarColor};
  width: 100vw;
  z-index: 1;
  padding-right: 1rem;
`;

const Menu = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 64px;
  padding: 1rem;

  @media (min-width: 1000px) {
    display: none;
  }
`;
const StyledHamburgerIcon = styled(HamburgerIcon)`
  max-width: 100%;
  height: auto;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 55%;

  @media (min-width: 1000px) {
    width: 35vw;
  }
`;

const ListItem = styled.li`
  display: ${props => (props.signIn ? 'none' : 'flex')};
  align-items: center;
  color: white;

  @media (min-width: 1000px) {
    display: flex;
    padding-right: 2rem;
  }
`;

const StyledGravatar = styled(Gravatar)`
  border-radius: 50%;
  height: 37px;
  width: 37px;
  margin-left: 0.5rem;
`;

const StyledLink = styled(Link)`
  line-height: 64px;
  :hover {
    color: lightblue;
  }
`;
