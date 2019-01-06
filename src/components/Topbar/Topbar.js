import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import { ReactComponent as Hamburger } from '../../assets/img/hamburger.svg';

const Topbar = ({ email, clicked, userName }) => {
  return (
    <header>
      <div onClick={clicked}>
        <Hamburger alt="menu icon" />
      </div>
      <ul>
        <li>
          <span>Hello, {userName}!</span>
          <Gravatar email={email} default={'robohash'} />
        </li>

        <li>
          <Link to="/signout">LOG OUT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Topbar;
