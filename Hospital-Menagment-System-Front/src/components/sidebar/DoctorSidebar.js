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
      
      <Link to="/doctor/appointmentsByDate" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Filtro terminet baz dates</span>
      </Link><Link to="/doctor/city-filter" className="sidebar-link">
        <i className="fas fa-search"></i>
        <span className="link-text">Filter by City</span>
      </Link>
      <button onClick={logout} className="sidebar-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="link-text">Logout</span>
      </button>
      {/* Add more links specific to the doctor role */}
      
    </div>
  );
};

export default DoctorSidebar;