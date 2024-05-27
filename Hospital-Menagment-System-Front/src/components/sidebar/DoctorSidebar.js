import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const DoctorSidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/doctor/patient" className="sidebar-link">
        <i className="fas fa-user-injured"></i>
        <span className="link-text">Patients</span>
      </Link>
      <Link to="/doctor/appointments" className="sidebar-link">
        <i className="fas fa-calendar-check"></i>
        <span className="link-text">Appointments</span>
      </Link>
      {/* Add more links specific to the doctor role */}
    </div>
  );
};

export default DoctorSidebar;
