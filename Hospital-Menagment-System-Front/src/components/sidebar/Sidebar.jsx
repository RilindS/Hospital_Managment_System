  import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

  const Sidebar = () => {
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <Link to="/patient" className="sidebar-link">
            <i className="fas fa-user-injured"></i>
            <span className="link-text">Patient</span>
          </Link>
          <Link to="/doctor" className="sidebar-link">
            <i className="fas fa-user-md"></i>
            <span className="link-text">Doctor</span>
          </Link>
          <Link to="/department" className="sidebar-link">
            <i className="fas fa-building"></i>
            <span className="link-text">Department</span>
          </Link>
          <Link to="/nurse" className="sidebar-link">
            <i className="fas fa-user-nurse"></i>
            <span className="link-text">Nurse</span>
          </Link>
          <Link to="/room" className="sidebar-link">
            <i className="fas fa-procedures"></i>
            <span className="link-text">Room</span>
          </Link>
          <Link to="/login" className="sidebar-link">
            <i className="fas fa-sign-in-alt"></i>
            <span className="link-text">LogIn</span>
          </Link>
          <Link to="/register" className="sidebar-link">
            <i className="fas fa-user-plus"></i>
            <span className="link-text">Register</span>
          </Link>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    );
  };

  export default Sidebar;
