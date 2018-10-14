import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list-item">
          <Link to="/admin/active" className="list-link">
            Active
          </Link>
        </li>
        <li className="list-item">
          <Link to="/admin/completed" className="list-link">
            Completed
          </Link>
        </li>
        <li className="list-item">
          <Link to="/admin/cancelled" className="list-link">
            Cancelled
          </Link>
        </li>
        <li className="list-item">
          <Link to="/admin/exceptions" className="list-link">
            Exceptions
          </Link>
        </li>
        <li className="list-item">
          <Link to="/admin/orderform" className="list-link">
            Order Form
          </Link>
        </li>
        <li className="list-item">
          <Link to="/logout" className="list-link">
            Log Out
          </Link>
        </li>
      </ul>
      <div className="user-signed-in">
        {' '}
        <p>
          Signed In As <br /> {user}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps)(Sidebar);
