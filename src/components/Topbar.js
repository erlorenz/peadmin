import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';
import Hamburger from '../assets/img/hamburger.svg';

class Topbar extends Component {
  state = {};

  render() {
    return (
      <header className="topbar">
        <div className="topbar__menu">
          <img src={Hamburger} className="topbar__hamburger" alt="menu icon" />
        </div>
        <ul className="topbar__list">
          <li className="topbar__list-item">
            <span>Hello, {this.props.userName}!</span>
            <Gravatar email={this.props.user} />
          </li>

          <li className="topbar__list-item topbar__log-out">
            <Link to="/logout">LOG OUT</Link>
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user, userName: state.auth.userName };
};
export default connect(mapStateToProps)(Topbar);
