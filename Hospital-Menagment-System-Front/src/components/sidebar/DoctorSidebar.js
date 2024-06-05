import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

import './Sidebar.css';


const DoctorSidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <Link to="/doctor/patient" className="sidebar-link">
        <i className="fas fa-user-injured"></i>
        <span className="link-text">Shiko pacinetet e gjith spitalit</span>
      </Link>
      <Link to="/doctor/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Appointments</span>
      </Link>
      <button onClick={logout} className="sidebar-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="link-text">Logout</span>
      </button>
      {/* Add more links specific to the doctor role */}
      <Link to="/doctor /city-filter" className="sidebar-link">
        <i className="fas fa-city"></i>
        <span className="link-text">Filter by City</span>
      </Link>
    </div>
  );
};

export default DoctorSidebar;