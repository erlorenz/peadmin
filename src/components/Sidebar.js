import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list-item">
          <a href="#" className="list-link">
            Active
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Completed
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Cancelled
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Exceptions
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Order Form
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
