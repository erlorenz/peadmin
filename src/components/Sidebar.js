import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
        {/* <li className="list-item">
          <Link to="/admin/active" className="list-link">
            Log Out
          </Link> 
        </li>*/}
      </ul>
    </div>
  );
};

export default Sidebar;
